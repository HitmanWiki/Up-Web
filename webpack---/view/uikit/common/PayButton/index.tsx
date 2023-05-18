import { h } from "preact"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { ButtonVariantEnumV2 } from "view/uikit/base/Button/enums"
import { Button } from "view/uikit/base/Button"
import { ApplePayIcon } from "view/uikit/icons"
import { ApplePayButton } from "view/uikit/common/PayButton/styled"

import { PayButtonProps } from "./types"
import { PayButtonTypeEnum } from "./enums"

export const PayButton = ({
  label = "",
  props = {},
  onClick,
  type,
}: PayButtonProps) => {
  if (!label) label = useTranslate("pages.summary.button")

  if (type === PayButtonTypeEnum.Regular) {
    return (
      <Button
        fullWidth
        variant={ButtonVariantEnumV2.Primary}
        onClick={onClick}
        {...props}
      >
        {label}
      </Button>
    )
  }
  if (type === PayButtonTypeEnum.ApplePay) {
    return (
      <ApplePayButton onClick={onClick} disabled={props?.disabled}>
        <ApplePayIcon />
      </ApplePayButton>
    )
  }

  return null
}
