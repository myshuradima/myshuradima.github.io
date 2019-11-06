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
    function upload(){
      var sel=document.getElementById('ct').options.selectedIndex;
      city=document.getElementById('ct').options[sel].value;
      var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric"
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.responseType = 'json';
      request.send();
      request.onload = function(){
        var weather = request.response;
        console.log(weather);
        }
    }
    event.preventDefault();
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
