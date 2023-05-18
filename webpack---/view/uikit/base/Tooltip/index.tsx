import { h } from "preact"
import type { ComponentChildren } from "preact"
import { useCallback, useEffect, useRef, useState } from "preact/hooks"
import { createPortal } from "preact/compat"

import * as S from "./styled"

export type TTooltipProps = {
  position?: string
  caretPosition?: string
  textAlign?: string
  offset?: string
  containerWidth?: string
  width?: string
  maxWidth?: string
  tipContent?: string
  isShownDefault?: boolean
  disableActions?: boolean
  withoutArrow?: boolean
  isPortal?: boolean
  children?: ComponentChildren
}

export const Tooltip = ({
  position = "left",
  caretPosition = "left",
  textAlign = "left",
  offset = "32px",
  containerWidth = "100%",
  width = "100%",
  maxWidth = "210px",
  tipContent = "",
  isShownDefault = false,
  disableActions = false,
  withoutArrow = false,
  isPortal = false,
  children,
}: TTooltipProps) => {
  const [isShown, setIsShown] = useState(isShownDefault)
  const [boundsPosition, setBoundsPosition] = useState(null)

  const wRef = useRef<HTMLDivElement>(null)
  const tRef = useRef<HTMLDivElement>(null)

  const calcPosition = useCallback(() => {
    const bounds = wRef.current.getBoundingClientRect()
    setBoundsPosition({
      x: bounds.x,
      y: bounds.y - tRef.current.clientHeight,
    })
  }, [])

  useEffect(() => {
    setIsShown(isShownDefault)
    if (isPortal) calcPosition()
  }, [isShownDefault])

  const handleVisibilityTip = useCallback(
    (value) => {
      setIsShown(value)
      if (isPortal && value) calcPosition()
    },
    [isPortal]
  )

  return (
    <S.Wrapper
      ref={wRef}
      containerWidth={containerWidth}
      onMouseEnter={() => !disableActions && handleVisibilityTip(true)}
      onMouseLeave={() => !disableActions && handleVisibilityTip(false)}
      onTouchStart={() => !disableActions && handleVisibilityTip(true)}
      onTouchEnd={() => !disableActions && handleVisibilityTip(false)}
      onWheel={() => !disableActions && setIsShown(false)}
    >
      {children}

      {isPortal
        ? createPortal(
          <S.Tip
            ref={tRef}
            isShown={isShown}
            position={position}
            caretPosition={caretPosition}
            textAlign={textAlign}
            width={width}
            maxWidth={maxWidth}
            withoutArrow={withoutArrow}
            isPortal
            top={boundsPosition && boundsPosition.y}
            left={boundsPosition && boundsPosition.x}
          >
            {tipContent}
          </S.Tip>,
          document.body
        ) :
        <S.Tip
          isShown={isShown}
          position={position}
          caretPosition={caretPosition}
          textAlign={textAlign}
          offset={offset}
          width={width}
          maxWidth={maxWidth}
          withoutArrow={withoutArrow}
        >
          {tipContent}
        </S.Tip>
      }
    </S.Wrapper>
  )
}
