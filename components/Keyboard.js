import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

import DefaultStyle from "../styles/Default";
import * as ConstantsValues from "../constants/ConstantsValues";
import * as Colors from "../constants/Colors";

import Key from "../components/Key";

const Keyboard = (props) => {
  const divideIcon = <Feather name="divide" size={26} color={Colors.WHITE} />;
  const xIcon = <Feather name="x" size={26} color={Colors.WHITE} />;
  const minusIcon = <Feather name="minus" size={26} color={Colors.WHITE} />;
  const plusIcon = <Feather name="plus" size={26} color={Colors.WHITE} />;

  return (
    <View style={DefaultStyle.keyboardContainer}>
      <View style={DefaultStyle.keyContainer}>
        <Key
          type={ConstantsValues.RESET}
          style={DefaultStyle.secondaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
        <Key
          type={ConstantsValues.DELETE}
          style={DefaultStyle.deleteKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
        <Key
          type={ConstantsValues.OPERATOR}
          value="/"
          icon={divideIcon}
          style={DefaultStyle.secondaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
      </View>

      <View style={DefaultStyle.keyContainer}>
        <Key
          type={ConstantsValues.NUMERIC}
          value="7"
          style={DefaultStyle.primaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
        <Key
          type={ConstantsValues.NUMERIC}
          value="8"
          style={DefaultStyle.primaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
        <Key
          type={ConstantsValues.NUMERIC}
          value="9"
          style={DefaultStyle.primaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
        <Key
          type={ConstantsValues.OPERATOR}
          value="*"
          icon={xIcon}
          style={DefaultStyle.secondaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
      </View>

      <View style={DefaultStyle.keyContainer}>
        <Key
          type={ConstantsValues.NUMERIC}
          value="4"
          style={DefaultStyle.primaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
        <Key
          type={ConstantsValues.NUMERIC}
          value="5"
          style={DefaultStyle.primaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
        <Key
          type={ConstantsValues.NUMERIC}
          value="6"
          style={DefaultStyle.primaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
        <Key
          type={ConstantsValues.OPERATOR}
          value="-"
          icon={minusIcon}
          style={DefaultStyle.secondaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
      </View>

      <View style={DefaultStyle.keyContainer}>
        <Key
          type={ConstantsValues.NUMERIC}
          value="1"
          style={DefaultStyle.primaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
        <Key
          type={ConstantsValues.NUMERIC}
          value="2"
          style={DefaultStyle.primaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
        <Key
          type={ConstantsValues.NUMERIC}
          value="3"
          style={DefaultStyle.primaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
        <Key
          type={ConstantsValues.OPERATOR}
          value="+"
          icon={plusIcon}
          style={DefaultStyle.secondaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
      </View>

      <View style={DefaultStyle.keyContainer}>
        <Key
          type={ConstantsValues.DOT}
          value="."
          style={DefaultStyle.secondaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
        <Key
          type={ConstantsValues.NUMERIC}
          value="0"
          style={DefaultStyle.primaryKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
        <Key
          type={ConstantsValues.EQUALS}
          style={DefaultStyle.equalsKey}
          onKeyPressed={(key) => props.onKeyPressed(key)}
        />
      </View>
    </View>
  );
};

export default Keyboard;
