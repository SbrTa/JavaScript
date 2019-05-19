# React JS Form Validation using validator.js
  Here's a react form validation method that i choose to use in my project and it helped me a lot because of its reusability, flexibility. Also it was fun to use. The method is entirely based on Validator.js package which contains nearly everything i needed to validate my forms.

## validator.js
  - A library of string validators and sanitizers. 
  - https://www.npmjs.com/package/validator
  - via cmd: ```npm install validator```
  - via package.json: ```validator": "^10.11.0```

## Rules

### isEmpty
```
    field: 'confirmNewPassword',
    method: 'isEmpty',
    validWhen: false,
    message: 'Confirm New Password is required'
```

### Equals
```
                field: 'confirmNewPassword',
                // method: this.isPasswordMatched,
                method: 'equals',
                args: ['55'],
                validWhen: true,
                message: 'New password does not match'
```




@BS23
