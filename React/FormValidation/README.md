# React JS Form Validation using validator.js
  Here's a react form validation method that i choose to use in my project and it helped me a lot because of its reusability, flexibility. Also it was fun to use. The method is entirely based on Validator.js package which contains nearly everything i needed to validate my forms.

## validator.js
  - A library of string validators and sanitizers. 
  - https://www.npmjs.com/package/validator
  - via cmd: ```npm install validator```
  - via package.json: ```"validator": "^10.11.0"```


## invoke FormValidator into form component

### Initialize
```
        this.validator = new FormValidator([{rule},{rule},...]);
```

### Validation
```
        const validation = this.validator.validate(this.state.formFields);
```

## Rules

### isEmpty
```
    field: 'input_field',
    method: 'isEmpty',
    validWhen: false,
    message: 'input_field is required'
```

### equals
```
    field: 'input_field',
    method: 'equals',
    args: ['abcde'],
    validWhen: true,
    message: 'input_field does not match'
```

### isLength
```
    field: 'input_field',
    method: 'isLength',
    args: [{min:5, max:10}],
    validWhen: true,
    message: 'input_field length must be between 5 to 10'
```

### isInt
```
    field: 'input_field',
    method: 'isInt',
    args: [{min:1, max:99, allow_leading_zeroes:false}],
    validWhen: true,
    message: 'input_field must be between 1 to 99'
```

### matches (regex)
```
    field: 'input_field',
    method: 'matches',
    args: [/(?=.*[@])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@]{8,}$/],
    validWhen: true,
    message: 'input_field must contain at least one of a-z, A-Z, 0-9 and @ with minimum length 8 digits'
```

### isEmail
```
    field: 'input_field',
    method: 'isEmail',
    validWhen: true,
    message: 'not email'
```                

### Custom Validation Method
```
    field: 'input_field',
    method: this.customValidationMethod,
    validWhen: true,
    message: 'message'
```


@BS23
