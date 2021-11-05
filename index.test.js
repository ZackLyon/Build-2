const getMethod = require('./index');

describe('parse method tests', () => {
  it('should accept an HTTP GET request as a parameter and parse the method from it', () => {
    const expected = 'GET';
    const actual = getMethod(
      `GET / HTTP / 1.1
      Host: something.com
      Accept-Language: us-en`
    );

    expect(actual).toEqual(expected);
  });

  it('should accept an HTTP POST request as a parameter and parse the method from it', () => {
    const expected = 'POST';
    const actual = getMethod(
      `POST / HTTP / 1.1
      Host: something.com
      Accept-Language: us-en`
    );

    expect(actual).toEqual(expected);
  });
});
