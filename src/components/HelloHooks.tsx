import * as React from "react";
import "./Hello.css";

interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const HelloHooks = ({ name, enthusiasmLevel = 1 }: Props) => {
  const [currentEnthusiasm, setEnthusiasm] = React.useState(enthusiasmLevel);

  if (currentEnthusiasm <= 0) {
    throw Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div className={"hello"}>
      <div>Hello {name + getExclamationMark(currentEnthusiasm)}</div>
      <button onClick={() => setEnthusiasm(currentEnthusiasm + 1)}>+</button>
      <button onClick={() => setEnthusiasm(currentEnthusiasm - 1)}>-</button>
    </div>
  );
};

const getExclamationMark = (numChars: number) => Array(numChars + 1).join("!");

export default HelloHooks;
