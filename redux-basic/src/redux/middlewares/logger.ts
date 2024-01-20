import { Middleware } from '@reduxjs/toolkit';

const logger: Middleware = store => next => action => {
  console.log('current action', store.getState());
  console.log('action', action);

  next(action);
  console.log('update state', store.getState());
};

export default logger;
