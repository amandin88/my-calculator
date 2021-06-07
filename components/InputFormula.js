import React from "react";
import { Text } from "react-native";

import DefaultStyle from "../styles/Default";

const InputNumber = (props) => {
  return <Text style={DefaultStyle.formula}>{props.formula}</Text>;
};

export default InputNumber;
