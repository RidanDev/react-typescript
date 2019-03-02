import * as React from "react";
import "./Hello.css";

interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const HelloSFC = ({ name, enthusiasmLevel = 1 }: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error("You should be a little more enthusiastic. :D");
  }

  return (
    <div className={"hello"}>
      <div>Hello {name + getExclamationMark(enthusiasmLevel)}</div>
    </div>
  );
};

const getExclamationMark = (numChars: number) => Array(numChars + 1).join("!");

export default HelloSFC;
