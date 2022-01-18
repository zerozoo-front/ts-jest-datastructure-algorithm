test('object assignment', (): void => {
  const data: { one: number; [key: string]: number } = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
