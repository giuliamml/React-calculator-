import React, { useState } from "react";
import { buttons } from "./buttons";
import "./Calculator.scss";

const Calculator = () => {
  const [action, setAction] = useState({
    symbol: "",
    firstNumber: 0,
    secondNumber: 0,
  });

  const calculate = (firstNumber, secondNumber, symbol) => {
    switch (action.symbol) {
      case "+":
        setAction({
          firstNumber: firstNumber + secondNumber,
          secondNumber: 0,
          symbol,
        });
        break;
      case "-":
        setAction({
          firstNumber: firstNumber - secondNumber,
          secondNumber: 0,
          symbol,
        });
        break;
      case "/":
        setAction({
          firstNumber: firstNumber / secondNumber,
          secondNumber: 0,
          symbol,
        });
        break;
      case "*":
        setAction({
          firstNumber: firstNumber * secondNumber,
          secondNumber: 0,
          symbol,
        });
        break;

      case "c":
        setAction({
          firstNumber: 0,
          secondNumber: 0,
          symbol: "",
        });
        break;
    }
  };

  const percentageCal = () => {
    action.secondNumber
      ? setAction({ ...action, secondNumber: action.secondNumber / 100 })
      : setAction({ ...action, secondNumber: action.firstNumber / 100 });
  };

  const plusMinusCal = () => {
    action.secondNumber
      ? setAction({ ...action, secondNumber: action.secondNumber * -1 })
      : setAction({ ...action, firstNumber: action.firstNumber * -1 });
  };

  const clickHandler = (event) => {
    const value = event.target.dataset.value;
    const type = event.target.dataset.type;

    if (type === "number" && action.symbol && action.firstNumber) {
      const newNumber = action.secondNumber + value;
      setAction({
        ...action,
        secondNumber: parseInt(newNumber),
      });
    } else if (type === "number") {
      const newNumber = action.firstNumber + value;
      setAction({
        ...action,
        firstNumber: parseInt(newNumber),
      });
    } else if (type === "symbol") {
      if (action.secondNumber && action.firstNumber) {
        calculate(action.firstNumber, action.secondNumber, value);
      } else {
        setAction({
          ...action,
          symbol: value,
        });
      }
    } else if (type === "percentage") {
      percentageCal();
    } else if (type === "plusMinus") {
      plusMinusCal();
    }
  };
  return (
    <div className={"layout"}>
      <header className={"result"}>
        {action.secondNumber || action.firstNumber}
      </header>
      <section className="pad">
        <ul>
          {buttons.map(({ label, type }) => {
            return (
              <li key={label}>
                <span
                  data-type={type}
                  data-value={label}
                  onClick={clickHandler}
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Calculator;
