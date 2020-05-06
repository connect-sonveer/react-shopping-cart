const sortByKey = (array, key, type) => {
  return array.sort((a, b) => {
    let x = a[key];
    let y = b[key];
    if (type === 'asc') {
      return x < y ? -1 : x > y ? 1 : 0;
    }
    return x < y ? 1 : x > y ? -1 : 0;
  });
};

const lookup = (payload, productId) => {
  for (let i = 0, len = payload.length; i < len; i++) {
    if (payload[i].id === productId) return true;
  }
  return false;
};

export { sortByKey, lookup };
