import { createActions, createTile } from '../src';
import { stub } from 'sinon';

test('createActions should populate actions with reset method', () => {
  const firstModule = createTile({
    type: ['some', 'module'],
    fn: () => Promise.resolve()
  });

  const actions = createActions([
    firstModule
  ]);

  expect(actions.some.module.reset).toBeInstanceOf(Function);
});
