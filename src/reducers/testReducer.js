export const testReducer = (state = 'test', { type, changedState }) => {
  switch (type) {
    case 'TEST_STORE':
      return changedState;
    default:
      return state;
  }
};
