class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Kyiv'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    const cityName = this.props.cityName;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
    console.log(weatherData);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} id="ct" onChange={this.handleChange}>
            <option value="Kyiv">Kyiv</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
            <option value="Toronto">Toronto</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);
