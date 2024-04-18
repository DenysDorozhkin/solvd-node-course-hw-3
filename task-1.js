function calculateDiscountedPrice(products, discountPercentage) {
  return products.map((product) => {
    const discountedPrice = product.price * (1 - discountPercentage / 100);
    return {
      ...product,
      discountedPrice: discountedPrice.toFixed(2),
    };
  });
}

function calculateTotalPrice(products) {
  return products.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );
}
