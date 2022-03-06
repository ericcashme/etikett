const formatEmail = (name, value) => {
  let newValue = value;

  if (typeof name !== 'string' || typeof value !== 'string') {
    return '';
  }

  if (!name || !value) {
    return '';
  }

  if (name === 'email' || name === 'email_confirmation') {
    newValue = newValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    newValue = newValue.replace(/[,():<>]/g, '');
  }

  return newValue;
};

export default formatEmail;
