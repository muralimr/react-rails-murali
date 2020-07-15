import React from 'react';
import { Link } from 'react-router-dom';

import Pagination from "react-js-pagination";

export default class TestsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tests: [] , activePage: 10};
  }

  componentDidMount() {
    this.fetchTestsList();
  }

  fetchTestsList = () => {
    fetch('/api/v1/tests').
      then((response) => response.json()).
      then((tests) =>  this.setState({ tests }));
  };

  handleDelete = (testId) => {
    fetch(`/api/v1/tests/${testId}`, { method: 'delete' }).
      then((response) => {
        // alert('test deleted successfully')
        this.fetchTestsList();
        this.props.history.push("");
      });
  }

  render() {
    const { tests } = this.state;
    return (
      <div>
        <h3>All questions</h3>
        <Link to={`/tests/new`}>
          New
        </Link>
        <table>
          <thead>
            <tr>
              <th>Pri</th>
              <th>question</th>
              <th>team_stages</th>
              <th>appears_day</th>
              <th>frequency</th>
              <th>type</th>
              <th>role</th>
              <th>required</th>
              <th>conditions</th>
              <th>mapping</th>
            </tr>
          </thead>
          <tbody>
          {
            tests.map((test) => {
              return (
                <tr key={test.id}>
                  <td>{test.pri}</td>
                  <td>
                    <Link to={`/tests/${test.id}`}>
                      {test.question}
                    </Link>
                  </td>
                  <td>{test.team_stages}</td>
                  <td>{test.appears_day}</td>
                  <td>{test.frequency}</td>
                  <td>{test.types}</td>
                  <td>{test.role}</td>
                  <td>{test.required}</td>
                  <td>{test.conditions}</td>
                  <td>{test.mapping}</td>
                  <td>
                    <button onClick={() => this.handleDelete(test.id) }>
                      Delete
                    </button>
                    <Link to={`/tests/${test.id}/edit`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
         <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={tests.length}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />

      </div>
    );
  }
}
