const Joi = require('Joi');
const Subscription = require('../model/subscription');
const Plan = require('../model/plan');
const ValidationError = require("../error/validationError");


let validators = {
    "Subscription": {
        scopes: {
            default: Subscription.SubscriptionValidationSchema
        }
    },
    "Plan": Plan.PlanValidationSchema
}

function scopeExists(validator, scope) {
    return Object.keys(validator.scopes).find(key => key == scope) != undefined;
}

function getSchema(model, scope) {
    let validator = validators[model];

    if (!validator) {
        throw  new Error("Validator doesn't exists");
    }

    // Check if the given validator has multiple scopes
    if (validator.scopes) {

        //    If the caller has passed a value for 'scope'
        if (scope) {
            if (!scopeExists(validator, scope)) {
                throw new Error(`Scope ${scope} does not exist in ${model} validator`)
            } else {
                return validator.scopes[scope];
            }
        } else {
            return validator.scopes.default;
        }
    } else {
        return validator;

    }
}

function validate( object) {
    return Plan.PlanValidationSchema.validate(object)



}

// Actual middleware factory
module.exports = function ValidationMiddleware(model) {
    return (req, res, next) => {
        const validationResult = validate(req.body);
        if (validationResult.error) {
            throw  new ValidationError(validationResult.error.message,model)
        } else {
            next();
        }
    }
}


