import React from 'react';
import './App.css';
import SimpsonList from './Components/SimpsonList'
import Button from './Components/Button'

// const sampleQuote = {
//   "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
//    "character": "Nelson Muntz",
//    "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
//    "characterDirection" : "Left"
// }

class App extends React.Component {

  state = {
    quote: {}
  };

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          quote:  data[0],
        });
    });
}
componentDidMount=() => {
  this.getQuote()
}

  render() {
  return (
    <div className="App">
      <SimpsonList quote={this.state.quote} />
      <Button selectQuote={() => this.getQuote() }/>
    </div>
  );
}
}

export default App;
