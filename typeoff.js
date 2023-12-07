function typeValidation(v, t) {
    return typeof(v)===t;
  }

  console.log(typeValidation(42, 'number'))