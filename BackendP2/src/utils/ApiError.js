class ApiError extends Error {
  constructor(
    statusCode,
    message = "something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    ((this.data = null), (this.message = message));
    this.success = false;
    this.error = errors;

    if (this.stack) {
      this.stack = stack;
    } else {
      this.Error.captureStakTrace(this, this.constructor);
    }
  }
}

export {ApiError}
