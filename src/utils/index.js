export const getFormData = (form) => {
  const data = new FormData(form);
  const obj = {};
  for (let [key, value] of data.entries()) {
    obj[key] = value;
  }

  return obj;
};
