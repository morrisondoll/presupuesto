import React, { Component } from 'react';
import '../css/style.css';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {
  render() {
    return (
      <div className="bit-container-full">
        <Header 
          titulo="Gastos Semanales"
        />

        <div className="bit-col-100 bg-blue-grey flex justify-center">
          <div className="modal-content bit-col-100 lg">
            <div className="header">
              <h3>Menú de gastos</h3>
            </div>
            <div className="body">
              <Formulario />
            </div>
            <div className="footer">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
