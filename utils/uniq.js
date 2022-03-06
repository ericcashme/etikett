const uniq = (list) => {
  if (!list) return [];
  if (list.constructor !== Array) return [];
  if (list.length === 0) return [];

  return list.filter((value, index, self) => self.indexOf(value) === index);
};

export default uniq;
