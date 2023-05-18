export const displayHash = (hash: string, chars: number): string =>
  `${hash.slice(0, chars)}...${hash.slice(-chars)}`
