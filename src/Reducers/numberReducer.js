export default function numberReducer(state = 100, action) {
  switch (action.type) {
    case "decrement":
      return state - action.number;
    default:
      return state;
  }
}
