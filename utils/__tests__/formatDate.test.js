import formatDate from '../formatDate';

describe('Get formatted date in BR mode', () => {
  it('With a valid date', () => {
    expect(formatDate('2021-01-13')).toEqual('13/01/2021');
  });

  it('With wrong value', () => {
    expect(formatDate(null)).toEqual('');
    expect(formatDate(undefined, 'id')).toEqual('');
    expect(formatDate(2, 'id')).toEqual('');
    expect(formatDate('', 'id')).toEqual('');
    expect(formatDate([], 'id')).toEqual('');
    expect(formatDate({}, 'id')).toEqual('');
  });
});

