import formatPhoneNumber from '../formatPhoneNumber';

describe('Get formatted phone number', () => {
  it('With a valid phone number', () => {
    expect(formatPhoneNumber('61992391848')).toEqual('(61) 99239-1848');
    expect(formatPhoneNumber('61992391')).toEqual('(61) 9923-91');
    expect(formatPhoneNumber('#619-9239$184|8')).toEqual('(61) 99239-1848');
    expect(formatPhoneNumber('nomequalquer')).toEqual('');
  });

  it('With a wrong value', () => {
    expect(formatPhoneNumber(null)).toEqual('');
    expect(formatPhoneNumber(undefined)).toEqual('');
    expect(formatPhoneNumber(2)).toEqual('');
    expect(formatPhoneNumber('')).toEqual('');
    expect(formatPhoneNumber([])).toEqual('');
    expect(formatPhoneNumber({})).toEqual('');
  });
});
