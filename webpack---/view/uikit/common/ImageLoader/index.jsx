import { h } from "preact"

import { useSafeState } from "infrastructure/hooks/useSafeState"

import * as S from "./styled"

const cdn = process.env.CDN_URL

export const ImageLoader = ({ width, height, url, fallbackUrl }) => {
  const [isLoaded, setIsLoaded] = useSafeState(null)

  return (
    <S.Image
      width={width}
      height={height}
      isLoaded={isLoaded}
      src={`${cdn}/${url}`}
      onLoad={() => setIsLoaded(true)}
      onError={({ currentTarget }) => {
        if (isLoaded) return

        currentTarget.onerror = null
        currentTarget.src = `${cdn}/${fallbackUrl}`
        setIsLoaded(true)
      }}
    />
  )
}
