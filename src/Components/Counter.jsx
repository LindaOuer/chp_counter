import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseCount, decreaseCount } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    increaseCount: count => dispatch(increaseCount(count)),
    decreaseCount: count => dispatch(decreaseCount(count))
  };
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

class ConnectedCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    console.log("tapped");
    let { id } = event.target;
    let value = this.state.count;

    if (id === "Inc") {
      this.props.increaseCount(value);
    }

    if (id === "Dec") {
      this.props.decreaseCount(value);
    }

    this.setState({ count: value });
  }

  render() {
    let { count } = this.props;

    return (
      <div>
        <p> Counter</p>
        <button
          className="btn btn-outline-primary"
          id="Inc"
          onClick={this.handleClick}
        >
          +
        </button>
        <br />
        <p> {count} </p>
        <button
          className="btn btn-outline-primary"
          id="Dec"
          onClick={this.handleClick}
        >
          -
        </button>
      </div>
    );
  }
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedCounter);

export default Counter;
