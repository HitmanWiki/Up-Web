import { h } from "preact"

import * as S from "./styled"

export const Details = ({ data, total, hashes = null }) => {
  return (
    <S.Wrapper>
      {total && (
        <S.RowTotal>
          <S.Left>{total.label}</S.Left>
          <S.Right>{total.value}</S.Right>
        </S.RowTotal>
      )}
      {data.map(({ label, value }) => (
        <S.Row>
          <S.Left>{label}</S.Left>
          <S.Right>{value}</S.Right>
        </S.Row>
      ))}
      {hashes && (
        <S.Hashes>
          <S.Row>
            <S.Left>{hashes.label}</S.Left>
          </S.Row>
          {hashes.values.map((item) => <S.Hash>{item}</S.Hash>)}
        </S.Hashes>
      )}
    </S.Wrapper>
  )
}
