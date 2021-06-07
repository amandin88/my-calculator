import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Feather, Entypo, FontAwesome5 } from "@expo/vector-icons";

import DefaultStyle from "../styles/Default";
import * as ConstantsValues from "../constants/ConstantsValues";
import * as Colors from "../constants/Colors";

const Key = (props) => {
  // JSX element to display
  let keyContent;
  // key Object to send to the Parent container
  let keyProperties = { type: null, value: "" };

  // check the type of key to set the properties to dieplay
  // and the properties to send when the key is pressed
  if (props.type === ConstantsValues.NUMERIC) {
    keyProperties.type = props.type;
    keyProperties.value = props.value;

    keyContent = <Text style={DefaultStyle.keyContent}>{props.value}</Text>;
  } else if (props.type === ConstantsValues.OPERATOR) {
    keyProperties.type = props.type;
    keyProperties.value = props.value;

    keyContent = <Text style={DefaultStyle.keyContent}>{props.icon}</Text>;
  } else if (props.type === ConstantsValues.RESET) {
    keyProperties.type = props.type;

    keyContent = <Text style={DefaultStyle.resetKeyContent}>CE</Text>;
  } else if (props.type === ConstantsValues.DELETE) {
    keyProperties.type = props.type;

    keyContent = (
      <Text style={DefaultStyle.keyContent}>
        <Feather name="delete" size={26} color={Colors.WHITE} />
      </Text>
    );
  } else if (props.type === ConstantsValues.DOT) {
    keyProperties.type = props.type;
    keyProperties.value = props.value;

    keyContent = (
      <Text style={DefaultStyle.keyContent}>
        <Entypo name="dot-single" size={26} color={Colors.WHITE} />
      </Text>
    );
  } else {
    keyProperties.type = props.type;

    keyContent = (
      <Text style={DefaultStyle.keyContent}>
        <FontAwesome5 name="equals" size={22} color={Colors.WHITE} />
      </Text>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.onKeyPressed(keyProperties)}
      style={{ ...DefaultStyle.key, ...props.style }}
    >
      {keyContent}
    </TouchableOpacity>
  );
};

export default Key;
