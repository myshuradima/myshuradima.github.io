class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
    this.state = {value: 'Kyiv'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
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
      <form>
        <label>
          Pick your favorite flavor:
          <select>
            <option value="Kyiv">Kyiv</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
            <option value="Toronto">Toronto</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
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

ReactDOM.render(<App />, document.getElementById("root"));
