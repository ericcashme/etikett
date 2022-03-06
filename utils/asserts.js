export const assertValidEmail = (value) => {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !regexEmail.test(String(value).toLowerCase()) ? 'Endereço de email inválido' : '';
};

export const assertMatchFields = (value, matchValue) => (value !== matchValue ? 'Os dois campos devem ser iguais' : '');

export const assertMinlength = (value, min) =>
  value.length < Number(min) ? `Deve conter no mínimo ${min} caracteres` : '';

export const assertMaxlength = (value, max) =>
  value.length > Number(max) ? `Deve conter no máximo ${max} caracteres` : '';

export const assertRequiredField = (value) => (!value ? 'Este campo é obrigatório' : '');

export const assertStrongPassword = (value) => {
  const hasUpperCase = /[A-Z]/.test(value); // Checks if any upper-case letter/alphabhet [A-Z] is present
  const hasLowerCase = /[a-z]/.test(value); // Checks if any lower-case letter/alphabhet [a-z] is present
  const hasNumbers = /\d/.test(value); // Checks if any digit [0-9] is present
  const hasNonAlphaNumeric = /\W/.test(value); // Checks characters other than [A-Za-z0-9_] i.e. Special Characters

  return hasUpperCase + hasLowerCase + hasNumbers + hasNonAlphaNumeric < 4
    ? 'A senha deve conter no mínimo um letra maiúscula, uma minúscula, um número e um caracter especial'
    : '';
};

export const assertCpf = (cpf) => {
  let add;
  let i;
  let rev;
  const cleanValue = cpf.replace(/[^\d]+/g, '');
  const invalidList = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
  ];

  if (cleanValue === '' || cleanValue.length !== 11 || invalidList.indexOf(cleanValue) !== -1) {
    return 'Este CPF é inválido';
  }
  // Elimina CPFs invalidos conhecidos
  // Valida 1o digito
  add = 0;
  for (i = 0; i < 9; i += 1) {
    add += parseInt(cleanValue.charAt(i), 10) * (10 - i);
  }

  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }

  if (rev !== parseInt(cleanValue.charAt(9), 10)) {
    return 'Este CPF é inválido';
  }
  // Valida 2o digito
  add = 0;
  for (i = 0; i < 10; i += 1) {
    add += parseInt(cleanValue.charAt(i), 10) * (11 - i);
  }

  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }

  if (rev !== parseInt(cleanValue.charAt(10), 10)) {
    return 'Este CPF é inválido';
  }

  return false;
};

export const assertCnpj = (cnpj) => {
  const cleanValue = cnpj.replace(/[^\d]+/g, '');
  if (cleanValue.length < 14 && cleanValue.length < 15) {
    return 'Este CNPJ é inválido';
  }

  let i;
  let digitos_iguais = 1;

  for (i = 0; i < cleanValue.length - 1; i += 1) {
    if (cleanValue.charAt(i) !== cleanValue.charAt(i + 1)) {
      digitos_iguais = 0;
      break;
    }
  }
  if (digitos_iguais) {
    return 'Este CNPJ é inválido';
  }

  let tamanho = cleanValue.length - 2;
  let numeros = cleanValue.substring(0, tamanho);
  const digitos = cleanValue.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (i = tamanho; i >= 1; i -= 1) {
    soma += numeros.charAt(tamanho - i) * pos;
    pos -= 1;

    if (pos < 2) {
      pos = 9;
    }
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(0), 10)) {
    return 'Este CNPJ é inválido';
  }

  tamanho += 1;
  numeros = cleanValue.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (i = tamanho; i >= 1; i -= 1) {
    soma += numeros.charAt(tamanho - i) * pos;
    pos -= 1;

    if (pos < 2) {
      pos = 9;
    }
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (resultado !== parseInt(digitos.charAt(1), 10)) {
    return 'Este CNPJ é inválido';
  }

  return false;
};
