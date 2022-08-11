const moment = require('moment');

const isDate = (dateValue) => {
  if(!dateValue) {
    return false
  }

  const validDate = moment(dateValue);

  if(validDate.isValid()) {
    return true
  }
  
  return false;
}

module.exports = {
  isDate  
}