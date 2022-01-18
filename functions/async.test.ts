test('the data is peanut butter', async (): Promise<void> => {
  function fetchUser(id: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('wait 0.1 sec');
        const user = {
          id: id,
          name: `User ${id}`,
          email: `${id} @ test.mail.com`,
        };
        resolve(user);
      }, 100);
    });
  }
  const data = await fetchUser('koko');
  expect(data).toEqual({
    id: 'koko',
    name: `User koko`,
    email: `koko @ test.mail.com`,
  });
});
