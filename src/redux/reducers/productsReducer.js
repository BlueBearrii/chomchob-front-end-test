var initializeState = {
  data: null,
  load: false,
};

function productsReducer(state = initializeState, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, load: true };
    case "FETCHED_DATA":
      return { data: action.payload, load: false };
    default:
      return state;
  }
}

export default productsReducer;
