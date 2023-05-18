import { h } from "preact"
import { LogoUnlimint } from "view/layouts/MainLayout/Footer/assets/logo-unlimit"
import * as S from "./styled"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.Wrapper>
      {/* <S.DevelopedBy> */}
      {/*  Developed by <LogoUnlimint /> */}
      {/* </S.DevelopedBy> */}
      <S.Rights>© 2009 — {currentYear} Unlimint</S.Rights>
    </S.Wrapper>
  )
}
