import validator from 'validator';

class FormValidator {
    constructor(rules){
        this.rules = rules;
    };

    setValid(){
        const validation = {};
        this.rules.map( rule => (
            validation[rule.field] = {isValid: true, message: ''}
        ));
        return {isValid: true, ...validation};
    };

    validate(form){
        let validation = this.setValid();
        this.rules.forEach( rule => {
            if (validation[rule.field].isValid){
                const field = form[rule.field].toString();
                const args = rule.args || [];
                const validationMethod = typeof rule.method === 'string' ?
                    validator[rule.method] : rule.method;

                if (validationMethod(field, ...args, form) !== rule.validWhen){
                    validation[rule.field] = {isValid: false, message: rule.message};
                    validation.isValid = false;
                }
            }
        });
        return validation;
    };
};

export default FormValidator;