import uniqBy from '../uniqBy';

const list = [
  {
    id: 1,
    name: 'Eric',
  },
  {
    id: 1,
    name: 'Eric',
  },
  {
    id: 2,
    name: 'Ana',
  },
];

describe('Get uniq objects inside array', () => {
  it('With a valid array and valid objects', () => {
    const result = [
      {
        id: 1,
        name: 'Eric',
      },
      {
        id: 2,
        name: 'Ana',
      }
    ];

    expect(uniqBy(list, 'id')).toEqual(result);
  });

  it('With akaward array value', () => {
    expect(uniqBy(null, 'id')).toEqual([]);
    expect(uniqBy(undefined, 'id')).toEqual([]);
    expect(uniqBy(2, 'id')).toEqual([]);
    expect(uniqBy('', 'id')).toEqual([]);
    expect(uniqBy([], 'id')).toEqual([]);
    expect(uniqBy({}, 'id')).toEqual([]);
  });

  it('With akaward key value', () => {
    expect(uniqBy(list, null)).toEqual([]);
    expect(uniqBy(list, undefined)).toEqual([]);
    expect(uniqBy(list, 2)).toEqual([]);
    expect(uniqBy(list, '')).toEqual([]);
    expect(uniqBy(list, [])).toEqual([]);
    expect(uniqBy(list, {})).toEqual([]);
  });
});

