import React from 'react'
import styled from 'styled-components/macro'
import { Z_INDEX } from 'theme'

export const BodyWrapper = styled.main<{ margin?: string; maxWidth?: string }>`
  position: relative;
  margin-top: ${({ margin }) => margin ?? '0px'};
  max-width: ${({ maxWidth }) => maxWidth ?? '480px'};
  width: 100%;
  background: ${({ theme }) => theme.bg0};
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.02), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 8px 18px rgba(0, 0, 0, 0.04),
    0px 12px 24px rgba(0, 0, 0, 0.01);
  border-radius: 24px;

  z-index: ${Z_INDEX.deprecated_content};
}
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children, style, ...rest }: { children: React.ReactNode; style?: any }) {
  return (
    <BodyWrapper style={style} {...rest}>
      {children}
    </BodyWrapper>
  )
}
