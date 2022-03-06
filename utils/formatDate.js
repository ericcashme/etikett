const formatDate = (rawDate, options = {}) => {
  if (!rawDate || typeof rawDate !== 'string') {
    return '';
  }

  let newDate = rawDate;
  if (typeof rawDate === 'string') {
    newDate = rawDate.replace(/-/g, '/');
  }
  const standardDate = new Date(newDate);
  return new Intl.DateTimeFormat('pt-BR', options).format(new Date(standardDate.getTime()));
};

export default formatDate;
