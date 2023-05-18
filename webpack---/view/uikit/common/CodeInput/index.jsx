import { h } from "preact"
import { useState } from "preact/hooks"
import { useRef, createRef } from "preact/compat"

import * as S from "./styled"

export const CodeInput = ({
  length = 4,
  onChange,
  value = "",
  error = "",
}) => {
  const elRefs = useRef([])
  const [innerValue, setValue] = useState(
    value.length === 4 ? value.split("") : new Array(length).fill("")
  )
  if (elRefs.current.length !== length) {
    elRefs.current = new Array(length)
      .fill()
      .map((_, i) => elRefs.current[i] || createRef())
  }

  const handleChange = (i, e) => {
    if (i < length) {
      const v = e?.target?.value

      if (!v) {
        const copyArr = [...innerValue.slice(0, i), "", ...innerValue.slice(i + 1)]
        setValue(copyArr)
      }

      if (!/[0-9]/.test(v)) {
        return
      }

      const copyArr = [...innerValue.slice(0, i), v[0], ...innerValue.slice(i + 1)]
      setValue(copyArr)

      const code = copyArr.join("")
      if (code.length === length) {
        onChange(code)
      }

      const nextField = elRefs.current[i + 1]?.current
      if (nextField && !nextField.value) {
        nextField.focus()
      }
    }
  }

  const handleKeyDown = (i, e) => {
    if (i !== 0) {
      const { key } = e

      if (key === "Backspace") {
        if (!elRefs.current[i].current.value) {
          const copyArr = [...innerValue.slice(0, i - 1), "", ...innerValue.slice(i)]
          setValue(copyArr)
          elRefs.current[i - 1].current.focus()
          return
        }

        const copyArr = [...innerValue.slice(0, i), "", ...innerValue.slice(i + 1)]
        setValue(copyArr)
      }
    }
  }

  const handleFocus = (e) => {
    const target = e?.target

    if (target?.value) {
      // setTimeout is using for fix safari bug with sync handlers queue
      setTimeout(() => target.select(), 0)
    }
  }

  const handlePaste = (e) => {
    const numbers = e.clipboardData.getData("Text")
      .trim()
      .replace(/[^0-9]/g, "")
      .substring(0, length)
    const tail = new Array(length - numbers.length).fill("")
    const copyArr = [...numbers, ...tail]

    setValue(copyArr)
    const code = copyArr.join("")
    if (code.length === length) {
      onChange(code)
    }
    elRefs.current[length - 1].current.focus()
  }

  return (
    <S.Wrapper>
      <S.Items>
        {innerValue.map((item, i) => (
          <S.Item key={i} error={error}>
            <input
              type="tel"
              pattern="[0-9]*"
              ref={elRefs.current[i]}
              autoFocus={i === 0}
              value={item || ""}
              onChange={e => handleChange(i, e)}
              onKeyDown={e => handleKeyDown(i, e)}
              onFocus={e => handleFocus(e)}
              onPaste={e => handlePaste(e)}
              maxLength={1}
            />
          </S.Item>
        ))}
      </S.Items>
      <S.Error>{error}</S.Error>
    </S.Wrapper>
  )
}
