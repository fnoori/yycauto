exports.addCommaToPrice = (price) => {
  return (String(price).replace(/(.)(?=(\d{3})+$)/g,'$1,'))
}
