import React, { Component } from 'react';
import './App.css';
import ImovelMaps from './components/ImovelMaps';
import CSVReader from 'react-csv-reader';

class App extends Component {
  constructor() {
    super();
    this.imoveisLoaded = this.imoveisLoaded.bind(this);
    this.imoveisError = this.imoveisError.bind(this);
    this.state = {
        imoveis: null
    }
  }

  imoveisError(error) {
      console.log(error);
  }

  imoveisLoaded(csvdata) {
      this.setState({
          imoveis: csvdata
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Mapa dos Imoveis</h1>
        </header>
        <div className="csv-reader">
          <CSVReader
            cssClass="csv-input"
            label="Selecione um arquivo no formato CSV"
            onFileLoaded={this.imoveisLoaded}
            onError={this.imoveisError}
            inputId="csvfile"
            inputStyle={{color: 'red'}}
          />
        </div>
        {
          this.state.imoveis ? 
          <div id="imoveis-map">
              <ImovelMaps imoveisData={this.state.imoveis}/>
          </div>
          : null
        }
      </div>
    );
  }
}

export default App;
