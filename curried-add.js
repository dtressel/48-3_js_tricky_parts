function curriedAdd(total = null) {
  if (total === null) return 0;
  function add(number = null) {
    if (number === null) return total;
    total += number;
    return add;
  }
  return add;
}

module.exports = { curriedAdd };
