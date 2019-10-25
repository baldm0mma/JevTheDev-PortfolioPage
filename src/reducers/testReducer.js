export const testReducer = (state = 'test', action) => {
  const { type } = action;
  switch (type) {
    case 'TEST_STORE':
      return state;
    default:
      return state;
  }
};
