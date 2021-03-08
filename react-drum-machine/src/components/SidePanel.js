import React from "react";

export class SidePanel extends React.Component {
  render() {
    const style = this.props.power
      ? { background: "red" }
      : { background: "#3b070a", boxShadow: "none" };

    return (
      <div className="side-panel">
        <div className="label">Drum Machine </div>
        <div style={this.props.colorStyle} className="display" id="display">
          {this.props.currentSound}
        </div>
        <div>
          <p>Power</p>
          <button style={style} onClick={this.props.togglePower}></button>
        </div>
        <div>
          <p>Volume</p>
          <input
            value={this.props.volumeInput}
            type="range"
            min="1"
            max="100"
            onChange={this.props.changeVolume}
          ></input>
        </div>
        <div className="speakers">
          <img
            src="https://i.pinimg.com/originals/2e/b2/38/2eb2387330d02fc3525114aa044c7a3f.png"
            alt="band"
          />
        </div>
      </div>
    );
  }
}
