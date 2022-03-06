const luminosity = (hex: string) => {
  const newHex = hex.replace('#', '')
  const isLenghty = newHex.length > 3
  const R = isLenghty ? parseInt(newHex.substr(0, 2), 16) : parseInt(newHex.substr(0, 1), 16) * 17
  const G = isLenghty ? parseInt(newHex.substr(2, 2), 16) : parseInt(newHex.substr(1, 1), 16) * 17
  const B = isLenghty ? parseInt(newHex.substr(4, 2), 16) : parseInt(newHex.substr(2, 1), 16) * 17

  const hexValue = (R * 299 + G * 587 + B * 114) / 1000

  if (hexValue > 180) {
    return '#242b33'
  }

  return '#ffffff'
}

export default luminosity
