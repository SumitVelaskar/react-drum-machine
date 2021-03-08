import React from "react";
import { SidePanel } from "./components/SidePanel";
import Pad from "./components/Pad";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSound: "",
      power: true,
      volumeInput: 50,
      volume: 0.5,
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.togglePower = this.togglePower.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
  }

  updateDisplay(id) {
    this.setState({ currentSound: id });
  }

  togglePower() {
    const message = !this.state.power && "Welcome";
    this.setState({ power: !this.state.power, currentSound: message });
    setTimeout(() => {
      this.setState({ currentSound: "" });
    }, 15000);
  }

  changeVolume(e) {
    const volume = e.target.value / 100;
    const message = "Volume: " + e.target.value;
    this.setState({
      volume: volume,
      volumeInput: e.target.value,
      currentSound: message,
    });
  }

  render() {
    const colorStyle = this.state.power
      ? { background: "#1ec8ce" }
      : { background: "#476b68" };

    const pads = this.props.data.map((pad, i) => {
      return (
        <Pad
          key={i}
          pad={pad}
          updateDisplay={this.updateDisplay}
          power={this.state.power}
          volume={this.state.volume}
          style={colorStyle}
        />
      );
    });

    return (
      <div className="container">
        <div className="machine">
          <div className="pads">{pads}</div>
          <SidePanel
            volumeInput={this.state.volumeInput}
            togglePower={this.togglePower}
            changeVolume={this.changeVolume}
            currentSound={this.state.currentSound}
            power={this.state.power}
            colorStyle={colorStyle}
          />
        </div>
      </div>
    );
  }
}

// const app = document.querySelector("#drum-machine");
// ReactDOM.render(<App data={DATA} />, app);

export default App;
