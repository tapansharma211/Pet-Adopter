import { combineReducers } from "redux";
import location from "./location";
import animal from "./animal";
import theme from "./theme";
import breed from "./breed";
export default combineReducers({
  location: location,
  animal,
  breed,
  theme,
});
