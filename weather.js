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
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
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
class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }
  componentDidMount() {
    const cityName = "Kyiv";
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Текущая: {weatherData.main.temp}°</p>
        <p>Максимальная: {weatherData.main.temp_max}°</p>
        <p>Минимальная: {weatherData.main.temp_min}°</p>
        <p>Скорость ветра: {weatherData.wind.speed} м/с</p>
        <p>Влажность: {weatherData.main.humidity} %</p>
        <p>Давление: {weatherData.main.pressure} гПа</p>
      </div>
    );
  }
}
ReactDOM.render(
  <WeatherDisplay />,
  document.getElementById('root')
);
