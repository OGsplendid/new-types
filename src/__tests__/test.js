import GameSavingLoader from '../GameSavingLoader';

jest.setTimeout(10000);

test('should return correct object', async (done) => {
  const data = await GameSavingLoader.load().then();
  expect(data).toEqual(
    {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    },
  );
  done();
});
