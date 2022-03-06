const parseSearchProducts = (data, maxProducts, maxCrossSelling) => {
  let products = [];
  let crossSelling = [];

  if (data && data.data) {
    products = data.data.products.items;
    crossSelling = data.data.cross_selling.items;
    if (maxProducts) {
      products = products.slice(0, maxProducts);
    }

    if (maxCrossSelling) {
      crossSelling = crossSelling.slice(0, maxCrossSelling);
    }
  }

  if (data && Array.isArray(data)) {
    products = data.slice(0, maxProducts);
  }

  return {
    products,
    crossSelling,
  };
};

export default parseSearchProducts;
