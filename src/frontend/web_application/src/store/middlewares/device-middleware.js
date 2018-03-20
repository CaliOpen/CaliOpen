import * as module from '../modules/device';

// TODO: refactor, drop this and move it into an action
export default store => next => (action) => {
  const result = next(action);

  if (action.type === module.VERIFY_DEVICE) {
    const { device: original } = action.payload;
    const device = {
      ...original,
      status: 'verified',
    };

    store.dispatch(module.updateDevice({ device, original }));
  }

  return result;
};
