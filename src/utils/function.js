/**
 * Get Age and Birthday from NIC Number
 * @param {String} nic
 * @returns Object
 */
export const findInfoFromNic = (nic) => {
  var NICNo = nic;
  var dayText = 0;
  var year = "";
  var month = "";
  var day = "";
  var gender = "";
  var dob = "";
  var age = "";
  var info = null;

  // Year
  if (NICNo.length == 10) {
    year = "19" + NICNo.substring(0, 2);
    dayText = parseInt(NICNo.substring(2, 3));
  } else {
    year = NICNo.substring(0, 4);
    dayText = parseInt(NICNo.substring(4, 3));
  }

  // Gender
  if (dayText > 500) {
    gender = "Female";
    dayText = dayText - 500;
  } else {
    gender = "Male";
  }

  // Day Digit Validation
  if (dayText < 1 && dayText > 366) {
    return null;
  } else {
    //Month
    if (dayText > 335) {
      day = dayText - 335;
      month = "December";
    } else if (dayText > 305) {
      day = dayText - 305;
      month = "November";
    } else if (dayText > 274) {
      day = dayText - 274;
      month = "October";
    } else if (dayText > 244) {
      day = dayText - 244;
      month = "September";
    } else if (dayText > 213) {
      day = dayText - 213;
      month = "Auguest";
    } else if (dayText > 182) {
      day = dayText - 182;
      month = "July";
    } else if (dayText > 152) {
      day = dayText - 152;
      month = "June";
    } else if (dayText > 121) {
      day = dayText - 121;
      month = "May";
    } else if (dayText > 91) {
      day = dayText - 91;
      month = "April";
    } else if (dayText > 60) {
      day = dayText - 60;
      month = "March";
    } else if (dayText < 32) {
      month = "January";
      day = dayText;
    } else if (dayText > 31) {
      day = dayText - 31;
      month = "Febuary";
    }
    dob = year + "-" + month + "-" + day;

    // Age
    var today = new Date();
    var birthday = new Date(dob);
    var YearsOld =
      Number(today.getTime() - birthday.getTime()) / (365 * 24 * 3600 * 1000);
    var x = Math.trunc(YearsOld);
    age = x;

    // Show Details
    info = { age: age, dob: dob, gender: gender };
  }

  return info;
};
