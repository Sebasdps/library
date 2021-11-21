import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        books: [
          {id:0, rating: 5, title: "Harry potter y la piedra filosofal", image: "libro01.jpg"},
          {id:1, rating: 4, title: "Harry Potter y la cámara secreta", image: "libro02.jpg"},
          {id:2, rating: 5, title: "Harry Potter y el prisionero de Azkaban", image: "libro03.jpg"},
          {id:3, rating: 4, title: "Harry Potter y el cáliz de fuego", image: "libro04.jpg"},
          {id:4, rating: 5, title: "Harry Potter y la orden del Fénix", image: "libro05.jpg"}
        ]

      };

    }

  render(){
    return (
        <div className="app">
          <Menu tittle="librería" />
          <List items={this.state.books} />
        </div>

    );
  }
}

export default App;
