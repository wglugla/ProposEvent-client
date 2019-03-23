const initialState = {
  myArray: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      const { el } = action;
      return {
        myArray: [...state.myArray, el],
      };
    default:
      return state;
  }
}
