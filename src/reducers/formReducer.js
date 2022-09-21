const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE INPUT":
      console.log(state);
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
};

export default formReducer;
