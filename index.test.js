const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });
  it('Handles times - 3:14', () => {
    const timeInWords = convertTimeToWords('3:14');
    expect(timeInWords).toBe('fourteen past three');
  });
  it('Handles times - 5:18', () => {
    const timeInWords = convertTimeToWords('5:18');
    expect(timeInWords).toBe('eighteen past five');
  });
  it('Handles times - 8:37', () => {
    const timeInWords = convertTimeToWords('8:37');
    expect(timeInWords).toBe('twenty three to nine');
  });
});
