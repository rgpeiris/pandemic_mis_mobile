/**
 * Check whether the email is valid or not
 * @param {String} email
 * @returns Boolean
 */
export const checkEmailValidity = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

/**
 * Check whether the password is valid or not
 * @param {String} password
 * @returns Boolean
 */
export const checkPasswordValidity = (password) => {
  if (password.length > 8) {
    return true;
  }
  return false;
};

/**
 * Check whether the string is valid or not
 * @param {String} string
 * @param {Number} maxLength
 * @returns Boolean
 */
export const checkStringValidity = (string, maxLength) => {
  if (string && maxLength && string.length <= maxLength) {
    return true;
  } else if (string) {
    return true;
  } else {
    return false;
  }
};

/**
 * Check whether the contact is valid or not
 * @param {String} contact
 * @returns Boolean
 */
export const checkContactValidity = (contact) => {
  if (contact && contact.length === 10) {
    return true;
  }
  return false;
};

/**
 * Check whether the nic is valid or not
 * @param {String} nic
 * @returns Boolean
 */
export const checkNICValidity = (nic) => {
  if (
    (nic.length === 12 &&
      (nic.startsWith("20") || nic.startsWith("19")) &&
      nic.charAt(7) === "0" &&
      /^[0-9]+$/.test(nic)) ||
    (nic.length === 10 &&
      (nic.endsWith("v") ||
        nic.endsWith("V") ||
        nic.endsWith("x") ||
        nic.endsWith("X")) &&
      /^[0-9]+$/.test(nic.substring(0, 9)))
  ) {
    return true;
  }
  return false;
};
