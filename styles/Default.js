import { StyleSheet } from "react-native";

import * as Colors from "../constants/Colors";
import * as Dimensions from "../constants/Dimensions";
import * as FontSizes from "../constants/FontSizes";

export default styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 25,
    backgroundColor: "black",
  },
  inputResultContainer: {
    width: Dimensions.FULL_WITDH,
    height: Dimensions.INPUT_RESULT_CONTAINER_HEIGHT,
    backgroundColor: Colors.INPUT_RESULT_BG,
  },
  logContainer: {},
  logMessage: {
    width: Dimensions.FULL_WITDH,
    height: Dimensions.LOG_HEIGHT,
    textAlign: "center",
    textAlignVertical: "center",
    color: Colors.LOG_ERROR_MESSAGE,
    backgroundColor: Colors.LOG_BG,
    borderColor: Colors.WHITE,
    borderBottomWidth: 0.2,
    fontFamily: "open-sans-bold",
  },
  formula: {
    width: Dimensions.FULL_WITDH,
    height: Dimensions.INPUT_RESULT_HEIGHT,
    padding: Dimensions.PADDING,
    textAlign: "right",
    textAlignVertical: "center",
    fontSize: FontSizes.INPUT_FORMULA,
    color: Colors.INPUT_FORMULA,
    borderColor: "grey",
    borderBottomWidth: 0.2,
    borderStyle: "dotted",
  },
  result: {
    width: Dimensions.FULL_WITDH,
    height: Dimensions.INPUT_RESULT_HEIGHT,
    padding: Dimensions.PADDING,
    textAlign: "right",
    textAlignVertical: "center",
    fontSize: FontSizes.RESULT,
    color: Colors.CALCULATION_RESULT,
  },
  keyboardContainer: {
    width: Dimensions.FULL_WITDH,
    height: Dimensions.KEYBOARD_CONTAINER_HEIGHT,
    backgroundColor: "darkgrey",
  },
  keyContainer: {
    width: Dimensions.KEY_CONTAINER_WIDTH,
    height: Dimensions.KEY_CONTAINER_HEIGHT,
    flexDirection: "row",
    backgroundColor: "red",
  },
  key: {
    height: Dimensions.FULL_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 0.5,
    fontFamily: "open-sans-bold",
  },
  primaryKey: {
    width: Dimensions.KEY_WIDTH,
    backgroundColor: Colors.BG_DIGIT_BTN,
  },
  secondaryKey: {
    width: Dimensions.KEY_WIDTH,
    backgroundColor: Colors.BG_BTN,
  },
  deleteKey: {
    width: Dimensions.HALF_PARENT_WITH,
    backgroundColor: Colors.BG_BTN,
  },
  equalsKey: {
    width: Dimensions.HALF_PARENT_WITH,
    backgroundColor: Colors.BG_EQUALS_BTN,
  },
  keyContent: {
    color: Colors.TEXT_BTN,
    fontSize: FontSizes.KEYVBOARD_KEY,
  },
  resetKeyContent: {
    color: Colors.RESET_TEXT_BTN,
    fontSize: FontSizes.KEYVBOARD_KEY,
  },
});
