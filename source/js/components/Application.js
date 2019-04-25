import React, { Component } from 'react';
import Checkbox from './Checkbox';

const items = [
  'Question 1',
  'Question 2',
  'Question 3',
];

class Application extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
    this.state={value:""};
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
var jj=""

    for (const checkbox of this.selectedCheckboxes) {

    

      jj=jj+""+checkbox;
      console.log(checkbox, 'is selected.');
      this.setState({
        value: jj
      });


    }
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <button className="btn btn-default" type="submit">Save</button>
            </form>

          </div>
        </div>
     <text>{this.state.value}</text>
      </div>
    );
  }
}

export default Application;
