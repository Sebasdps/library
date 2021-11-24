import React from "react";
import Search from "./Search";
import PanelAdd from "./PanelAdd";
import './Menu.css';

class Menu extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);

      this.state = {newItemPanel: false};
      this.add = this.add.bind(this);
    }

    add(){
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state = {newItemPanel: true};
      console.log("New Book");
    }


      render() {
      return(
          <div className="container">
        <div className="subcontainer">
          <div className="logo">
                {this.props.tittle}
          </div>

          <div className="search">
              <Search />
          </div>

          <div className="actions">
              <button onClick={this.add} className="button btn-blue">Nuevo libro</button>
          </div>
        </div>
        {
          (this.state.newItemPanel)?
          <PanelAdd />
          :
          ""
        }

      </div>
      );

      }
}

export default Menu;