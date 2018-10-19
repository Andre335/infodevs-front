import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import ImovelMarkers from './ImovelMarkers';


class ImovelMaps extends Component {
    constructor(props) {
        super(props);
        this.state = {
          lat: -23.5489,
          lng:  -46.6388,
          zoom: 13,
          isHovering: false
        };
    }

    render() {
      const position = [this.state.lat, this.state.lng]
      return (
        <div className="main-container">
            <div className="imovel-map-container">
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <ImovelMarkers imoveisData={this.props.imoveisData}/>
                </Map>
            </div>
        </div>
      )
    }
}

export default ImovelMaps;