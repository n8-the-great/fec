import React, {Component} from 'react';

export default function Hoc(component, data) {
  return class extends Component{
    constructor(props) {
      super(props);
      this.state = {
        data: data
      };
    }

    render() {
      return (
        <component data={this.state.data} {...this.props} />
      );
    }
  }
}