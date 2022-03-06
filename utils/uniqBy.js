const uniqBy = (list, key) => {
  if (!list) return [];
  if (list.constructor !== Array) return [];
  if (list.length === 0) return [];
  if (!key || typeof key !== 'string') return [];

  return list.filter((item, index, self) => index === self.findIndex((t) => t[key] === item[key]));
};

export default uniqBy;
