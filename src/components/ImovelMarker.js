import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

class ImovelMarker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Marker position={[this.props.lat, this.props.lng]} ref={(marker) => {this.marker = marker;}} 
                    onMouseOver={() => {this.marker.leafletElement.openPopup();}}
                    onMouseOut={() => {this.marker.leafletElement.closePopup();}}>
                <Popup>
                    <div className="popup-container">
                        <div className="popup-header">
                            <h2> <b> {this.props.condominio ? this.props.condominio : this.props.rua} </b> </h2>
                            <h3> {this.props.rua + ", " + this.props.numero} </h3>
                        </div>
                        <div className="popup-body">
                            {this.props.condominio ? <div><b> Condominio </b> <div className="popup-body-condominio"> {this.props.condominio} </div></div> : null}
                            <b> Rua </b> <div className="popup-body-rua"> {this.props.rua} </div>
                            <b> Bairro </b> <div className="popup-body-bairro"> {this.props.bairro + ", " + this.props.numero} </div>
                        </div>
                    </div>
                </Popup>
            </Marker>
        ) 
    }
}

export default ImovelMarker;