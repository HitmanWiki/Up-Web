export const displayWithNetwork = (
  cryptoValue: string,
  network: string
): string => {
  const cryptoNetworkValue = network !== "" ? ` (${network})` : ""

  return `${cryptoValue}${cryptoNetworkValue}`
}
