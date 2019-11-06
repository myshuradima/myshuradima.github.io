class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your city:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Kyiv">Kyiv</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
            <option value="Toronto">Toronto</option>
          </select>
        </label>
        <input type="submit" value="Show" />
      </form>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);
