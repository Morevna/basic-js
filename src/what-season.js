const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    let val = date.getMonth() + 1;
    
    if (val == 1) {
      return 'winter'
    }
    if (val == 2) {
      return 'winter'
    }
    if (val == 3) {
      return 'spring'
    }
    if (val == 4) {
      return 'spring'
    }
    if (val == 5) {
      return 'spring'
    }
    if (val == 6) {
      return 'summer'
    }
    if (val == 7) {
      return 'summer'
    }
    if (val == 8) {
      return 'summer'
    }
    if (val == 9) {
      return 'autumn'
    }
    if (val == 10) {
      return 'autumn'
    }
    if (val == 11) {
      return 'autumn'
    }
    if (val == 12) {
      return 'winter'
    }
}


module.exports = {
  getSeason
};
