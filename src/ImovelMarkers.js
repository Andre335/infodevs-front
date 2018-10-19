import React, { Component } from 'react';
import ImovelMarker from './ImovelMarker';

class ImovelMarkers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var renderImoveis = [];
        for (var i = 1; i < 1501; i++) {
            if (this.props.imoveisData[i][15] && this.props.imoveisData[i][15]) {
                renderImoveis.push(<ImovelMarker condominio={this.props.imoveisData[i][4]} rua={this.props.imoveisData[i][1]} 
                                                numero={this.props.imoveisData[i][2]} bairro={this.props.imoveisData[i][3]} 
                                                lat={parseFloat(this.props.imoveisData[i][15])} lng={parseFloat(this.props.imoveisData[i][16])}/>);
            }
        }

        return (
            <div> { renderImoveis } </div>
        );
    }
}

export default ImovelMarkers;