const formatPhoneNumber = (value) => {
  if (typeof value !== 'string') {
    return '';
  }

  const newValue = value.replace(/\D/g, '').substring(0, 11);
  let formattedValue;

  const size = newValue.length;
  if (size === 0) {
    formattedValue = newValue;
  }

  if (size > 0 && size < 3) {
    formattedValue = `(${newValue}`;
  }

  if (size >= 3 && size < 7) {
    formattedValue = `(${newValue.substring(0, 2)}) ${newValue.substring(2, 6)}`;
  }

  if (size >= 7 && size < 11) {
    formattedValue = `(${newValue.substring(0, 2)}) ${newValue.substring(2, 6)}-${newValue.substring(6, 10)}`;
  }

  if (size === 11) {
    formattedValue = `(${newValue.substring(0, 2)}) ${newValue.substring(2, 7)}-${newValue.substring(7, 11)}`;
  }

  return formattedValue;
};

export default formatPhoneNumber;
