import redux from 'redux';

const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}

const initialState = {
  numofCakes: 10,
};

const reducer = (state = initialSate, action) => {
  switch ((action, type)) {
    case BUY_CAKE:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };
    default:
      return state;
  }
};
