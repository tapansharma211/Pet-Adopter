export default function location(state = "Delhi", action) {
  switch (action.type) {
    case "CHANGE_LOCATION":
      return action.payload;

    default:
      return state;
  }
}
