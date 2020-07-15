// app/javascript/bundles/tests/TestDetails.js
import React from 'react';

export default class TestDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: {} };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/tests/${id}`).
      then((response) => response.json()).
      then((test) => this.setState({ test }));
  }

  render() {
    const { test } = this.state;
    return (
      <div>
        <div>
          <label> <b>Pri</b> </label>
          <p> {test.pri} </p>
        </div>

        <div>
          <label> <b>Question</b> </label>
          <p> {test.question} </p>
        </div>

        <div>
          <label> <b>Team stages</b> </label>
          <p> {test.team_stages} </p>
        </div>

         <div>
          <label> <b>Appears day</b> </label>
          <p> {test.appears_day} </p>
        </div>

        <div>
          <label> <b>Frequency</b> </label>
          <p> {test.frequency} </p>
        </div>

        <div>
          <label> <b>Type </b></label>
          <p> {test.types} </p>
        </div>

        <div>
          <label> <b>Role</b> </label>
          <p> {test.role} </p>
        </div>

        <div>
          <label> <b>Required </b></label>
          <p> {test.required} </p>
        </div>

        <div>
          <label> <b>Conditions</b> </label>
          <p> {test.conditions} </p>
        </div>

        <div>
          <label> <b>mapping </b></label>
          <p> {test.mapping} </p>
        </div>

      </div>
    );
  }
}

