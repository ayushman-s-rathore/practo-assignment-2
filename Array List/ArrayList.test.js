const ArrayList = require('./ArrayList');

describe('ArrayList operations', () => {
  let list;

  beforeEach(() => {
    list = new ArrayList();
  });

  test('should add elements and retrieve them', () => {
    list.add(10);
    list.add(20);
    list.add(30);

    expect(list.size()).toBe(3);
    expect(list.get(0)).toBe(10);
    expect(list.get(1)).toBe(20);
    expect(list.get(2)).toBe(30);
  });

  test('should throw an error when accessing an out-of-bounds index', () => {
    list.add(100);

    expect(list.size()).toBe(1);

    expect(() => list.get(1)).toThrow(RangeError);
    expect(() => list.get(-1)).toThrow(RangeError);
  });

  test('should clear all elements from the list', () => {
    list.add(5);
    list.add(15);

    expect(list.size()).toBe(2);

    list.clear();

    expect(list.size()).toBe(0);
  });
});
