export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case "increment":
      return state + action.number;
    default:
      return state;
  }
}
