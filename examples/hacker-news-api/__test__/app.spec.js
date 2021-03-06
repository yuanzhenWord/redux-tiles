import app from '../index';
// 10 second timeout – might take a whie!
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

test('wait Tiles should wait until we load all stories', async () => {
  app.store.dispatch(app.actions.hn_api.pages({ type: 'topstories' }));
  await app.waitTiles();

  const state = app.store.getState();
  const { isPending } = app.selectors.hn_api.pages(state, { type: 'topstories' });
  expect(isPending).toBe(false);
});

test('top stories should be populated', async () => {
  app.store.dispatch(app.actions.hn_api.pages({ type: 'topstories' }));
  await app.waitTiles();

  const state = app.store.getState();
  const { data } = app.selectors.hn_api.pages(state, { type: 'topstories' });
  expect(data.filter(Boolean).length).toBe(30);
});