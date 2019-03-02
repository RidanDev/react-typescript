import * as React from "react";
import "./Hello.css";

interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class HelloStateful extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentEnthusiasm: props.enthusiasmLevel || 1
    };
  }

  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

  updateEnthusiasm = (currentEnthusiasm: number) =>
    this.setState({ currentEnthusiasm });

  getExclamationMark = (numChars: number) => Array(numChars + 1).join("!");

  render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className={"hello"}>
        <div>
          Hello {name + this.getExclamationMark(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}

export default HelloStateful;
