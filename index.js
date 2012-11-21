/**
 * component-user
 * Component user
 */

var request = require('request');
var querystring = require('querystring');
var format = require('format');

var none = function(password) {
  return password;
};

/**
 * Error codes and messages
 */

var errors = {
  missing_parameter: {
    status: '601',
    message: 'Mandatory parameter "%s" missing for <%s> method'
  }
};

var user = exports;

/**
 * crypto_method
 */

user.encryption_method = noop;

/**
 * is_logged
 */

user.is_logged = function(options, callback) {
  if (typeof options === 'function') {
    callback = options;
  }

  if (callback === undefined) {
    console.error('"user.is_logged" method must have a callback');
    return;
  }

  request
    .get('/api/0/user/is-logged')
    .end(function (res) {
      var data = res.body || res.text;
      var err = {};

      if (res.ok) {
        callback(null, data);
      } else {
        err.data = data;
        err.status = res.status;
        callback(err);
      }
    });
};

/**
 * signup
 */

user.signup = function(options, callback) {
  if (callback === undefined) {
    console.error('"user.signup" method must have a callback');
    return;
  }

  var body_params = {};
  var options = options || {};
  var error_missing_parameter_status = errors.missing_parameter.status;
  var error_missing_parameter_message = errors.missing_parameter.message;

  // mandatory params
  if (options.email !== undefined) {
    body_params.email = options.email;
  } else {
    callback({
      status: error_missing_parameter_status,
      message: printf(error_missing_parameter_message, 'email', 'user.signup')
    });
    return;
  }

  if (options.password !== undefined) {
    body_params.password = user.encryption_method(options.password);
  } else {
    callback({
      status: error_missing_parameter_status,
      message: format.printf(error_missing_parameter_message, 'password', 'user.signup')
    });
    return;
  }

  request
    .post('/api/0/user/signup')
    .send(body_params)
    .end(function (res) {
      var data = res.body || res.text;
      var err = {};

      if (res.ok) {
        callback(null, data);
      } else {
        err.data = data;
        err.status = res.status;
        callback(err);
      }
    });
};

/**
 * login
 */

user.login = function(options, callback) {
  if (callback === undefined) {
    console.error('"user.login" method must have a callback');
    return;
  }

  var body_params = {};
  var options = options || {};
  var error_missing_parameter_status = errors.missing_parameter.status;
  var error_missing_parameter_message = errors.missing_parameter.message;

  // mandatory params
  if (options.email !== undefined) {
    body_params.email = options.email;
  } else {
    callback({
      status: error_missing_parameter_status,
      message: printf(error_missing_parameter_message, 'email', 'user.login')
    });
    return;
  }

  if (options.password !== undefined) {
    body_params.password = user.encryption_method(options.password);
  } else {
    callback({
      status: error_missing_parameter_status,
      message: printf(error_missing_parameter_message, 'password', 'user.login')
    });
    return;
  }

  request
    .post('/api/0/user/login')
    .send(body_params)
    .end(function (res) {
      var data = res.body || res.text;
      var err = {};

      if (res.ok) {
        callback(null, data);
      } else {
        err.data = data;
        err.status = res.status;
        callback(err);
      }
    });
};


/**
 * logout
 */

user.logout = function(options, callback) {
  if (typeof options === 'function') {
    callback = options;
  }

  if (callback === undefined) {
    console.error('"user.logout" method must have a callback');
    return;
  }

  request
    .get('/api/0/user/logout')
    .end(function (res) {
      var data = res.body || res.text;
      var err = {};

      if (res.ok) {
        callback(null, data);
      } else {
        err.data = data;
        err.status = res.status;
        callback(err);
      }
    });

};

/**
 * info
 */

user.info = function(options, callback) {
  if (typeof options === 'function') {
    callback = options;
  }

  if (callback === undefined) {
    console.error('"user.info" method must have a callback');
    return;
  }

  request
    .get('/api/0/user/info')
    .end(function (res) {
      var data = res.body || res.text;
      var err = {};

      if (res.ok) {
        callback(null, data);
      } else {
        err.data = data;
        err.status = res.status;
        callback(err);
      }
    });
};

/**
 * set
 */

user.change_password = function(options, callback) {
  if (callback === undefined) {
    console.error('"user.change_password" method must have a callback');
    return;
  }

  var body_params = {};
  var options = options || {};
  var error_missing_parameter_status = errors.missing_parameter.status;
  var error_missing_parameter_message = errors.missing_parameter.message;

  // mandatory params
  if (options.password !== undefined) {
    body_params.password = user.encryption_method(options.password);
  } else {
    callback({
      status: error_missing_parameter_status,
      message: printf(error_missing_parameter_message, 'password', 'user.change_password')
    });
    return;
  }

  request
    .post('/api/0/user/change-password')
    .send(body_params)
    .end(function (res) {
      var data = res.body || res.text;
      var err = {};

      if (res.ok) {
        callback(null, data);
      } else {
        err.data = data;
        err.status = res.status;
        callback(err);
      }
    });
};

/**
 * stats
 */

user.stats= function(options, callback) {
  //...
};