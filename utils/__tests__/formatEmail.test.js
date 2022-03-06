import formatEmail from '../formatEmail';

describe('Get formatted email', () => {
  it('With a valid email', () => {
    expect(formatEmail('email', 'eric@gmail.com')).toEqual('eric@gmail.com');
    expect(formatEmail('email', 'éri<>cvascon@gmail.com')).toEqual('ericvascon@gmail.com');
  });

  it('With wrong name', () => {
    expect(formatEmail(null, 'eric@gmail.com')).toEqual('');
    expect(formatEmail(undefined, 'eric@gmail.com')).toEqual('');
    expect(formatEmail(2, 'eric@gmail.com')).toEqual('');
    expect(formatEmail('', 'eric@gmail.com')).toEqual('');
    expect(formatEmail([], 'eric@gmail.com')).toEqual('');
    expect(formatEmail({}, 'eric@gmail.com')).toEqual('');
  });

  it('With wrong value', () => {
    expect(formatEmail('email', null)).toEqual('');
    expect(formatEmail('email', undefined)).toEqual('');
    expect(formatEmail('email', 2)).toEqual('');
    expect(formatEmail('email', '')).toEqual('');
    expect(formatEmail('email', [])).toEqual('');
    expect(formatEmail('email', {})).toEqual('');
    expect(formatEmail('email_confirmation', null)).toEqual('');
    expect(formatEmail('email_confirmation', undefined)).toEqual('');
    expect(formatEmail('email_confirmation', 2)).toEqual('');
    expect(formatEmail('email_confirmation', '')).toEqual('');
    expect(formatEmail('email_confirmation', [])).toEqual('');
    expect(formatEmail('email_confirmation', {})).toEqual('');
  });
});

