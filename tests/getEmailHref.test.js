const { getEmailHref } = require('../scripts');

describe('getEmailHref', () => {
  test('returns mailto link for mobile widths', () => {
    expect(getEmailHref(500)).toBe('mailto:brandonwilson0279737@gmail.com');
  });

  test('returns gmail link for desktop widths', () => {
    expect(getEmailHref(1024)).toBe('https://mail.google.com/mail/?view=cm&fs=1&to=brandonwilson0279737@gmail.com');
  });
});
