import { useState, useCallback } from 'react'
import { api, parseSearchProducts } from 'utils'

const useSearchProducts = () => {
  const [products, setProducts] = useState(null)
  const [crossSelling, setCrossSelling] = useState(null)

  const searchProducts = useCallback(async (productName) => {
    if (!productName) {
      setProducts(null)
      setCrossSelling(null)
      return false
    }

    await api.get(`/v2/products/search?q=${productName}`).then(({ data }) => {
      const { products: dataProducts, crossSelling: dataCrossSelling } = parseSearchProducts(data, 3, 6)
      setProducts(dataProducts)
      setCrossSelling(dataCrossSelling)
    })
    return true
  }, [])

  return {
    searchProducts,
    products,
    crossSelling
  }
}

export default useSearchProducts
