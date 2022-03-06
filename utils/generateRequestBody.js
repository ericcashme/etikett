const generateRequestBody = (formData) =>
  Object.keys(formData).reduce((acc, field) => {
    if (formData[field].value !== '') {
      return { ...acc, [field]: formData[field].value };
    }
    return acc;
  }, {});
export default generateRequestBody;
