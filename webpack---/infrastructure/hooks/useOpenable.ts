import { useCallback, useState } from "preact/compat"

type TAnchorEl = boolean | null | EventTarget

export type TOpenableParams = {
  open: boolean
  anchorEl: TAnchorEl
  onOpen: (e: Event) => void
  onClose: () => void
  onToggle: (e: Event) => void
}

export const useOpenable = (
  defaultState: TAnchorEl = null
): TOpenableParams => {
  const [anchorEl, setAnchorEl] = useState(defaultState)

  const open = !!anchorEl

  const onOpen = useCallback((e) => setAnchorEl(e.currentTarget), [])
  const onClose = useCallback(() => setAnchorEl(null), [])
  const onToggle = open ? onClose : onOpen

  return { open, anchorEl, onOpen, onClose, onToggle }
}
