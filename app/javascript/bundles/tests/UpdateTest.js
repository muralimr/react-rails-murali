import React from 'react';

export default class UpdateTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      is_published: true
    }
    this.state = {
            planets: [],
            mappings: [],
        };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/tests/${id}`).
      then((response) => response.json()).
      then((test) => this.setState({ ...test }));


      let initialPlanets = [];
    fetch('/api/v1/tests/1/get_roles')
        .then(response => {
            return response.json();
        }).then(data => {
        initialPlanets = data.map((planet) => {
            return planet
        });
        console.log(initialPlanets);
        this.setState({
            planets: initialPlanets,
        });
    });

        let initialMappings = [];
    fetch('/api/v1/tests/1/get_mappings')
        .then(response => {
            return response.json();
        }).then(data => {
        initialMappings = data.map((map) => {
            return map
        });
        console.log(initialMappings);
        this.setState({
            mappings: initialMappings,
        });
    });

  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updateTestRequest = (event) => {
    fetch(`/api/v1/tests/${this.state.id}`, {
      method: 'put',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      // alert('Test updated successfully');
      // location.href = '/';
      this.props.history.push("");
    });
  }

  render() {
    const {pri, question, team_stages, appears_day, frequency, types, role, required, conditions, mapping} = this.state;
     let planets = this.state.planets;
      let mappings = this.state.mappings;
    let optionItemsMap = mappings.map((map) =>
                <option key={map.name}>{map.name}</option>
            );
        let optionItems = planets.map((planet) =>
                <option key={planet.name}>{planet.name}</option>
            );
    return (
      <div>
        <h3>Edit Test</h3>
        <div>
          <label>Pri: </label>
          <input
            type='number'
            name='pri'
            value={pri}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Question: </label>
          <input
            type='text'
            name='question'
            value={question}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Team stages: </label>
          <input
            type='text'
            name='team_stages'
            value={team_stages}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Appears day: </label>
          <input
            type='text'
            name='appears_day'
            value={appears_day}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Frequency: </label>
          <input
            type='text'
            name='frequency'
            value={frequency}
            onChange={this.handleInputChange}
            />
        </div>
         <div>
          <label>Type: </label>
          <input
            type='text'
            name='types'
            value={types}
            onChange={this.handleInputChange}
            />
        </div>
         <div>
          <label>Role: </label>
             <select name='role' value={role}   onChange={this.handleInputChange}>
                {optionItems}
             </select>
        </div>
         <div>
          <label>required: </label>
          <input
            type='text'
            name='required'
            value={required}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>conditions: </label>
          <input
            type='text'
            name='conditions'
            value={conditions}
            onChange={this.handleInputChange}
            />
        </div>
         <div>
          <label>Mapping: </label>
           <select name='mapping' value={mapping}   onChange={this.handleInputChange}>
                {optionItemsMap}
             </select>
        </div>
        <button onClick={this.updateTestRequest}>Update</button>
      </div>
    );
  }
}