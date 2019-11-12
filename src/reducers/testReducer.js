export const testReducer = (state = 'test', { type, changedState }) => {
  const { type } = action;
  switch (type) {
    case 'TEST_STORE':
      return changedState;
    default:
      return state;
  }
};
