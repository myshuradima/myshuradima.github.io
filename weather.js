const PLACES = [
  { name: "Москваᅠ", cityName: "Moscow, RU" }, 
  { name: "Санкт-Петербургᅠ", cityName: "Saint Petersburg, RU" },
  { name: "Киевᅠ", cityName: "Kyiv, UA" },
  { name: "Одессаᅠ", cityName: "Odessa, UA" },
  { name: "Чикагоᅠ", cityName: "Chicago, US" },
  { name: "Лос Анджелесᅠ", cityName: "Los Angeles, US" },
  { name: "Mаямиᅠ", cityName: "Miami, US" },
  { name: "Санта Моникаᅠ", cityName: "Santa Monica, PH" },
  { name: "Сан Хосеᅠ", cityName: "San Jose, US" },
  { name: "Даунтаунᅠ", cityName: "Downton, GB" },
  { name: "Бучаᅠ", cityName: "Bucha, UA" },
  { name: "Нью-Йорк", cityName: "New York, US" }

];


class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }
  componentDidMount() {
    const cityName = this.props.cityName;
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
           
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Выберите город</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={activePlace} cityName={PLACES[activePlace].cityName} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
