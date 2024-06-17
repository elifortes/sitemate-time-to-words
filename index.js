// expecting time to be a string in the format like '8:15' or '12:30'

/*
- '0:00' > 'midnight'
- '12:00' > 'midday'
- '2:00' > 'two o'clock'
- '2:03' > 'three past two'
- '2:11' > 'eleven past two'
- '2:15' > 'quarter past two'
- '2:30' > 'half past two'
- '2:33' > 'twenty seven to three'
- '2:40' > 'twenty to three'
- '2:45' > 'quarter to three'
- '2:55' > 'five to three'
*/

// use split, separate string
// map - transform in number
// edge case - midnight and midday
// nexthour need increase 1
// use remaining minutes to handle the quarter to and to

const numberToWords = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
  'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine',
];

function convertTimeToWords(time) {
  const [hours, minutes] = time.split(':').map(Number);

  if (hours === 0 && minutes === 0) return 'midnight';
  if (hours === 12 && minutes === 0) return 'midday';
  if (minutes === 0) return `${numberToWords[hours]} o' clock`;

  const hourText = numberToWords[hours % 12];
  const nextHour = numberToWords[(hours + 1) % 12];
  const remainingMinutes = 60 - minutes;

  if (minutes === 15) return `quarter past ${hourText}`;
  if (minutes === 30) return `half past ${hourText}`;
  if (minutes === 45) return `quarter to ${nextHour}`;
  if (minutes < 30) return `${numberToWords[minutes]} past ${hourText}`;

  return `${numberToWords[remainingMinutes]} to ${nextHour}`;
}

module.exports = { convertTimeToWords };
