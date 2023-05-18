import { h } from "preact"

import { Footer } from "view/layouts/MainLayout/Footer"
import { Header } from "view/layouts/MainLayout/Header"

import * as S from "./styled"

export const MainLayout = ({ children }) => {
  return (
    <S.Wrapper>
      <Header />
      <div />
      <S.Card id="root-layout-card">{children}</S.Card>
      <div />
      <Footer />
    </S.Wrapper>
  )
}
