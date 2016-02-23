var restify = require('restify');

var required = {
    create_user: ['uid','mail'],
    set_otp: ['uid', 'otp'],
    verify: ['uid', 'otp'],
    get_google_secret: ['uid'],
}

function validate(req, required) {
    var validate = true;
    for (i in required) {
        if (req.params[required[i]]);
        else validate = false;
    }
    return validate;
}

function check_parameters(req, required) {
    if (validate(req, required)) {
        return true
    } else {
        return false;
    }
}

exports.create_user = function(req, res, next) {
    if (check_parameters(req, required.create_user)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.set_otp = function(req, res, next) {
    if (check_parameters(req, required.set_otp)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.verify = function(req, res, next) {
    if (check_parameters(req, required.verify)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.get_google_secret = function(req, res, next) {
    if (check_parameters(req, required.get_google_secret)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}
