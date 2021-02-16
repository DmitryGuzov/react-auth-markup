export function forgotPasswordValidate(values: any) {
  let errors: any = {};
  if (values.email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(values.email)) {
      if (!values.email.includes("@")) {
        errors.email = "Email must has a @";
      } else if (!values.email.includes(".")) {
        errors.email = "Email must has a dot(.)";
      } else {
        errors.email = "Email address is invalid";
      }
    } else {
      delete errors.email;
    }
  } else if (!values.email) {
    errors.email = "Email address is required";
  }

  return errors;
}
export function signinValidate(values: any) {
  let errors: any = {};
  if (values.email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(values.email)) {
      if (!values.email.includes("@")) {
        errors.email = "Email must has a @";
      } else if (!values.email.includes(".")) {
        errors.email = "Email must has a dot(.)";
      } else {
        errors.email = "Email address is invalid";
      }
    } else {
      delete errors.email;
    }
  } else if (!values.email) {
    errors.email = "Email address is required";
  }

  if (values.password) {
    if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{8,20})$/.test(
        values.password
      )
    ) {
      if (values.password.length < 8) {
        errors.password = "Password must be 8 or more characters";
      } else if (values.password.length > 20) {
        errors.password = "Password must be less then 20 characters";
      } else if (!/\d/gi.test(values.password)) {
        errors.password = "Password don't has a number";
      } else if (!/[A-Z]/g.test(values.password)) {
        errors.password =
          "Password must has a not less then one uppercase letter";
      } else {
        errors.password = "Incorrect password. Perhaps you have a space";
      }
    } else {
      delete errors.password;
    }
  } else if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
}
export function signupValidate(values: any) {
  let errors: any = {};

  if (values.name) {
    if (
      !/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(
        values.name
      )
    ) {
      errors.name = "Name is invalid";
    } else {
      delete errors.name;
    }
  } else if (!values.name) {
    errors.name = "Name is required";
  }

  if (values.email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(values.email)) {
      if (!values.email.includes("@")) {
        errors.email = "Email must has a @";
      } else if (!values.email.includes(".")) {
        errors.email = "Email must has a dot(.)";
      } else {
        errors.email = "Email address is invalid";
      }
    } else {
      delete errors.email;
    }
  } else if (!values.email) {
    errors.email = "Email address is required";
  }

  if (values.password) {
    if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{8,20})$/.test(
        values.password
      )
    ) {
      if (values.password.length < 8) {
        errors.password = "Password must be 8 or more characters";
      } else if (values.password.length > 20) {
        errors.password = "Password must be less then 20 characters";
      } else if (!/\d/g.test(values.password)) {
        errors.password = "Password don't has a number";
      } else if (!/[A-Z]/g.test(values.password)) {
        errors.password =
          "Password must has a not less then one uppercase letter";
      } else {
        errors.password = "Incorrect password. Perhaps you have a space";
      }
    } else {
      delete errors.password;
    }
  } else if (!values.password) {
    errors.password = "Password is required";
  }
  if (values.repeatPassword) {
    if (values.password != values.repeatPassword) {
      errors.repeatPassword = "Passwords mismatch";
    } else if (values.repeatPassword.length < 8) {
      errors.repeatPassword = "Password must be 8 or more characters";
    } else {
      delete errors.repeatPassword;
    }
  } else if (!values.repeatPassword) {
    errors.repeatPassword = "Confirm password is required";
  }
  return errors;
}
