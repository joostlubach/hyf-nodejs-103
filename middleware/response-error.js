/**
 * This middleware function adds a new function to the response object, called `error`.
 * It allows us to send an error object with a status 500 to the client.
 */
function responseError(request, response, next) {
  response.error = response$error;
  next();
}

function response$error(error) {
  // Set the status to HTTP 500, but only if it was not already set to some error code.
  // For instance, someone may want to send an error using code 512, or 401.
  if (this.statusCode < 400) {
    this.status(500);
  }

  if (!error) {
    // If there is no error specified, we just stop.
    return;
  }

  if (typeof error.message == 'string') {
    this.json({error: error.message});
  } else {
    this.json({error: error.toString()});
  }
}

module.exports = responseError;