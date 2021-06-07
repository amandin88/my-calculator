import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";

import DefaultStyle from "../styles/Default";
import * as ConstantsValues from "../constants/ConstantsValues";

import LogField from "../components/LogField";
import InputFormula from "../components/InputFormula";
import ResultField from "../components/ResultField";
import Keyboard from "../components/Keyboard";

const MainScreen = (props) => {
  // current number of dots in the formula
  const [numberOfDots, setNumberOfDots] = useState(0);

  // current number of operators in the formula
  const [numberOfOperators, setNumberOfOperators] = useState(0);

  // current formula
  const [currentFormula, setCurrentFormula] = useState("");

  // result of the calculation
  const [result, setResult] = useState("0");

  // alloows to know if we deal with a new calculation
  const [isNewCalculation, setIsNewCalculation] = useState("true");

  // add the new number or operator to the current formula
  const appendToFormulaHandler = (newValue) => {
    // check the each number contains only 1 dot
    if (newValue === "." && !canDotBeAdded()) {
      return;
    } else {
      // if it's a new calculation, replace the previous formula with the new one
      // else we add the new value to the current formula
      if (isNewCalculation) {
        setCurrentFormula(newValue);
        setIsNewCalculation(false);
      } else {
        setCurrentFormula(currentFormula + newValue);
      }

      if (newValue === ".") {
        setNumberOfDots(numberOfDots + 1);
      }
    }
  };

  // delete the last number or operator from the current formula
  const deleteFromFormulaHandler = () => {
    const lastValueFromFormula = currentFormula.slice(-1);
    // remove the last character
    // if this character is a dot, re-allow the dot to be added
    if (lastValueFromFormula === ".") {
      if (numberOfDots > 0) setNumberOfDots(numberOfDots - 1);
    }

    if (
      lastValueFromFormula === "/" ||
      lastValueFromFormula === "*" ||
      lastValueFromFormula === "-" ||
      lastValueFromFormula === "+"
    ) {
      if (numberOfOperators > 0) setNumberOfOperators(numberOfOperators - 1);
    }

    setCurrentFormula(currentFormula.slice(0, -1));
  };

  // reset the formula
  const resetFormulaHandler = () => {
    setCurrentFormula("");
    setResult("0");

    setNumberOfDots(0);
    setNumberOfOperators(0);
  };

  // handle the key pressed and call the corresponding function
  const keyPressHandlerHandler = (keyPressed) => {
    if (
      keyPressed.type === ConstantsValues.NUMERIC ||
      keyPressed.type === ConstantsValues.DOT
    ) {
      appendToFormulaHandler(keyPressed.value);
    } else if (keyPressed.type === ConstantsValues.OPERATOR) {
      const lastValueFromFormula = currentFormula.slice(-1);

      // check if the last character is an operator
      if (
        lastValueFromFormula !== "/" &&
        lastValueFromFormula !== "*" &&
        lastValueFromFormula !== "-" &&
        lastValueFromFormula !== "+"
      ) {
        if (isNewCalculation && result !== "0") {
          appendToFormulaHandler(result + keyPressed.value);
          setNumberOfOperators(numberOfOperators + 1);
        } else if (currentFormula !== "" && lastValueFromFormula !== ".") {
          appendToFormulaHandler(keyPressed.value);
          setNumberOfOperators(numberOfOperators + 1);
        }
      }
    } else if (keyPressed.type === ConstantsValues.DELETE) {
      deleteFromFormulaHandler();
    } else if (keyPressed.type === ConstantsValues.RESET) {
      resetFormulaHandler();
    } else if (keyPressed.type === ConstantsValues.EQUALS) {
      setResult(executeCalculation(currentFormula));
      setIsNewCalculation(true);
    }
  };

  // dot can be added if the number of dots is <= number of operators
  const canDotBeAdded = () => {
    if (numberOfDots > numberOfOperators) {
      return false;
    }

    return true;
  };

  // execute the calculation from the String formula
  const executeCalculation = (formula) => {
    const lastValueFromFormula = currentFormula.slice(-1);

    // remove the last dot or operator from the formula if needed
    if (
      lastValueFromFormula === "." ||
      lastValueFromFormula === "/" ||
      lastValueFromFormula === "*" ||
      lastValueFromFormula === "-" ||
      lastValueFromFormula === "+"
    ) {
      return eval(formula.slice(0, -1));
    } else {
      return eval(formula);
    }
  };

  return (
    <SafeAreaView style={DefaultStyle.screen}>
      <View style={DefaultStyle.inputResultContainer}>
        <LogField
          message={
            result === Number.POSITIVE_INFINITY ? "Can't divide by 0" : "Ready"
          }
        />

        <InputFormula formula={currentFormula} />

        <ResultField
          calculationResult={result !== "0" ? "= " + result : result}
        />
      </View>

      <Keyboard onKeyPressed={keyPressHandlerHandler} />
    </SafeAreaView>
  );
};

export default MainScreen;
