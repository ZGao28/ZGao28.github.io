const validate = (type, value) => {
  let regex;
  switch(type) {
    case 'email':
      regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      break;
    case 'phone':
      regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
      break;
    case 'budget':
      regex = /^[0-9]+(\.[0-9]{1,2})?$/;
      break;
    default:
      return false;
  }
  return regex.test(value);
};

const validateAccount = (form) => {
  if (!validate('email', form.email)) {
    return 'Please enter a valid email address';
  }
  if (!validate('phone', form.phone)) {
    return 'Please enter a valid phone number';
  }
  if (form.firstName === '') {
    return 'Please enter a valid first name';
  }
  if (form.lastName === '') {
    return 'Please enter a valid last name';
  }
  return false;
};

const validateAddress = (form) => {
  if (form.street === '') {
    return 'Please enter a valid address';
  }
  if (form.country === '') {
    return 'Please enter a valid country';
  }
  if (form.state === '') {
    return 'Please enter a valid state';
  }
  if (form.city === '') {
    return 'Please enter a valid state';
  }
  if (form.postal_code === '') {
    return 'Please enter a valid state';
  }
  if (form.firstName === '') {
    return 'Please enter a valid first name';
  }
  if (form.lastName === '') {
    return 'Please enter a valid last name';
  }
  return false;
};

const validatePayment = (form) => {
  if (form.street === '') {
    return 'Please enter a valid address';
  }
  if (form.country === '') {
    return 'Please enter a valid country';
  }
  if (form.state === '') {
    return 'Please enter a valid state';
  }
  if (form.city === '') {
    return 'Please enter a valid state';
  }
  if (form.postal_code === '') {
    return 'Please enter a valid state';
  }
  if (form.name === '') {
    return 'Please enter a valid name';
  }
  return false;
};

const validateBudget = (form) => {
  if (!validate('budget', form.budgetValue)) {
    return 'Please enter a valid budget value';
  }
  return false;
};

const validatePassword = (form) => {
  if (form.newPassword.length < 5) {
    return 'Passwords must have a length greater than 5!';
  }
  if (form.newPassword != form.newPasswordConfirm) {
    return 'New passwords do not match!';
  }
  return false;
}

export { validate, validateAccount, validateAddress, validatePayment, validateBudget, validatePassword };