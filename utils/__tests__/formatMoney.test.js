import formatMoney from '../formatMoney';

describe('Get formatted money', () => {
  it('With a valid money', () => {
    expect(formatMoney(22.99)).toEqual('R$ 22,99');
    expect(formatMoney(33.9)).toEqual('R$ 33,90');
    expect(formatMoney('22,99')).toEqual('R$ 22,99');
    expect(formatMoney('33')).toEqual('R$ 33,00');
  });

  it('With a wrong value', () => {
    expect(formatMoney(null)).toEqual('R$ 0,00');
    expect(formatMoney(undefined)).toEqual('R$ 0,00');
    expect(formatMoney(2)).toEqual('R$ 2,00');
    expect(formatMoney('')).toEqual('R$ 0,00');
    expect(formatMoney([])).toEqual('R$ 0,00');
    expect(formatMoney({})).toEqual('R$ 0,00');
  });
});

