import { Component } from "react";
class Home extends Component {
  constructor(props){
    super();
    this.state = {counter : 0};
    this.counterUp = this.counterUp.bind(this)
  }
  counterUp(){
    this.setState({counter:this.state.counter+1})
  }
  render() {
    return (
      <div>
        <h5> {this.props.fName}</h5>
        <button
          onClick={this.counterUp}
        >
          click
        </button>
        <h2>{this.state.counter}</h2>
      </div>
    );
  }
}

export default Home;
