import { h } from "preact"
import { useState } from "preact/hooks"

import { useTranslate } from "infrastructure/hooks/useTransalte"
import { errorService } from "infrastructure/services/ErrorService"

import { CopyIcon } from "view/uikit/icons/copy"
import { Tooltip } from "view/uikit/base/Tooltip"

import * as S from "./styled"

export type TCopiedValueProps = {
  label: string
  value: string
  maxWidth?: string
  timeout?: number
}

export const CopiedValue = ({
  label,
  value,
  maxWidth = "230px",
  timeout = 3000,
}: TCopiedValueProps) => {
  const [timeoutId, setTimeoutId] = useState<ReturnType<
    typeof setTimeout
  > | null>(null)

  const copiedText = useTranslate("common.copiedAction")

  const onClick = () => {
    if (window.isSecureContext && navigator?.clipboard) {
      navigator.clipboard.writeText(value).then(() => {
        if (!timeoutId) {
          const id = setTimeout(() => {
            clearTimeout(timeoutId)
            setTimeoutId(null)
          }, timeout)
          setTimeoutId(id)
        }
      })
    } else {
      clearTimeout(timeoutId)
      setTimeoutId(null)
      errorService.send("Copy function requires a secure origin")
    }
  }

  return (
    <S.Content maxWidth={maxWidth}>
      <span>{label}</span>
      <Tooltip
        position="right"
        caretPosition="right"
        textAlign="center"
        containerWidth="27px"
        width="54px"
        tipContent={copiedText}
        disableActions
        isShownDefault={timeoutId !== null}
        withoutArrow
      >
        <CopyIcon onClick={onClick} />
      </Tooltip>
    </S.Content>
  )
}
