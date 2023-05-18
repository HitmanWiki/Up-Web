import { h } from "preact"
import { ImageLoader } from "view/uikit/common/ImageLoader"

import * as S from "./styled"

export const CountryIcon = ({ width, height, code }): JSX.Element => {
  return (
    <S.Wrapper>
      <ImageLoader
        width={width}
        height={height}
        url={`icons/countries/${code}.svg`}
        fallbackUrl="icons/countries/Unknown.svg"
      />
    </S.Wrapper>
  )
}
