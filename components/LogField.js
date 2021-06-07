import React from "react";
import { Text } from "react-native";

import DefaultStyle from "../styles/Default";

const LogField = (props) => {
  return <Text style={DefaultStyle.logMessage}>{props.message}</Text>;
};

export default LogField;
