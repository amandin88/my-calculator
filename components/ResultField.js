import React from "react";
import { View, Text } from "react-native";

import DefaultStyle from "../styles/Default";

const ResultField = (props) => {
  return <Text style={DefaultStyle.result}>{props.calculationResult}</Text>;
};

export default ResultField;
