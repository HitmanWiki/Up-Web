import styled from "styled-components"
import { ButtonVariantEnum } from "view/uikit/base/Button/enums"

export const Wrapper = styled.button`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  background: ${({ variant }) => {
    switch (variant) {
      case ButtonVariantEnum.Primary:
        return "var(--theme-button-primary-bg);"
      case ButtonVariantEnum.Additional:
        return "var(--theme-button-additional-bg);"
      default:
        return "var(--theme-button-default-bg);"
    }
  }};
  color: ${({ variant }) => {
    switch (variant) {
      case ButtonVariantEnum.Primary:
        return "var(--theme-button-primary-color);"
      case ButtonVariantEnum.Additional:
        return "var(--theme-button-additional-color);"
      default:
        return "var(--theme-button-default-color);"
    }
  }};
  border: 1px solid transparent;
  box-sizing: border-box;
  outline: none;
  border-radius: var(--skin-button-borderRadius);
  padding: 12px 32px;
  text-align: center;
  cursor: ${({ disabled }) => !disabled && "pointer"};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  transition: border-color 0.2s ease-out, background 0.2s ease-out,
    color 0.2s ease-out;

  &:focus {
    background: ${({ variant }) => {
      switch (variant) {
        case ButtonVariantEnum.Primary:
          return "var(--theme-button-primary-focus-bg);"
        case ButtonVariantEnum.Additional:
          return "var(--theme-button-additional-focus-bg);"
        default:
          return "var(--theme-button-default-focus-bg);"
      }
    }};
    border-color: ${({ variant }) => {
      switch (variant) {
        case ButtonVariantEnum.Primary:
          return "var(--theme-button-primary-focus-borderColor);"
        case ButtonVariantEnum.Additional:
          return "var(--theme-button-additional-focus-borderColor);"
        default:
          return "var(--theme-button-default-focus-borderColor);"
      }
    }};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${({ variant }) => {
        switch (variant) {
          case ButtonVariantEnum.Primary:
            return "var(--theme-button-primary-hover-bg);"
          case ButtonVariantEnum.Additional:
            return "var(--theme-button-additional-hover-bg);"
          default:
            return "var(--theme-button-default-hover-bg);"
        }
      }};
      color: ${({ variant }) => {
        switch (variant) {
          case ButtonVariantEnum.Primary:
            return "var(--theme-button-primary-hover-color);"
          case ButtonVariantEnum.Additional:
            return "var(--theme-button-additional-hover-color);"
          default:
            return "var(--theme-button-default-hover-color);"
        }
      }};
    }
  }

  &:disabled {
    background: ${({ variant }) => {
      switch (variant) {
        case ButtonVariantEnum.Primary:
          return "var(--theme-button-primary-disabled-bg);"
        case ButtonVariantEnum.Additional:
          return "var(--theme-button-additional-disabled-bg);"
        default:
          return "var(--theme-button-default-disabled-bg);"
      }
    }};
    color: ${({ variant }) => {
      switch (variant) {
        case ButtonVariantEnum.Primary:
          return "var(--theme-button-primary-disabled-color);"
        case ButtonVariantEnum.Additional:
          return "var(--theme-button-additional-disabled-color);"
        default:
          return "var(--theme-button-default-disabled-color);"
      }
    }};
  }
`
