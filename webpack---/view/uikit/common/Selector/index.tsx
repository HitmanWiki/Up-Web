import { h } from "preact"
import { useCallback, useState } from "preact/hooks"
import { createPortal } from "preact/compat"

import { TConfig } from "view/uikit/common/Selector/types"

import { SelectorComponent } from "./SelectorComponent"

type TSelectorProps = {
  title: string,
  open: boolean
  items: string[]
  config: TConfig
  onClose?: () => void
  withSearch?: boolean
  searchPlaceholder?: string
  onChange?: (value: string) => void
  isPortal?: boolean
}

export const Selector = ({
  title = "",
  open,
  items,
  config,
  withSearch = false,
  searchPlaceholder = "",
  onClose,
  onChange,
  isPortal,
}: TSelectorProps) => {
  if (!open) return null

  const [currentItems, setCurrentItems] = useState(items)
  const [searchValue, setSearchValue] = useState("")

  const handleOnSearch = useCallback(
    (e) => {
      const currentSearchValue = e.target.value?.trim() || ""
      const regex = new RegExp(currentSearchValue, "gi")

      const newItems = items.filter((code) => {
        const { name } = config[code]
        return code.search(regex) !== -1 || name.search(regex) !== -1
      })

      setCurrentItems(newItems)
      setSearchValue(currentSearchValue)
    },
    [items, setCurrentItems, setSearchValue]
  )

  const handleOnClose = useCallback(() => {
    onClose?.()
    setCurrentItems(items)
    setSearchValue("")
  }, [items, setCurrentItems, setSearchValue])

  if (isPortal)
    return createPortal(
      <SelectorComponent
        title={title}
        handleOnClose={handleOnClose}
        onClose={onClose}
        withSearch={withSearch}
        searchValue={searchValue}
        searchPlaceholder={searchPlaceholder}
        handleOnSearch={handleOnSearch}
        currentItems={currentItems}
        onChange={onChange}
        config={config}
      />,
      document.getElementById("root-layout-card")
    )

  return (
    <SelectorComponent
      title={title}
      handleOnClose={handleOnClose}
      onClose={onClose}
      withSearch={withSearch}
      searchValue={searchValue}
      searchPlaceholder={searchPlaceholder}
      handleOnSearch={handleOnSearch}
      currentItems={currentItems}
      onChange={onChange}
      config={config}
    />
  )
}
