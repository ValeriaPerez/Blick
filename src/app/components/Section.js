import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

class Section extends Component {
  render() {
    return (
      <div className="container-fluid">
        
        <div className="row ">
          <div className="col-xs-12 center-xs">
            <h4>¿Como funciona?</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 center-xs">
            <table style={{width: '100%', marginLeft: '50px', marginRight: '70px'}}>
              <tr>
                <th></th>
                <th>
                  <img src="./app/assets/img3.png" style={{width: '50px'}}/>
                </th> 
                <th>
                  <img src="./app/assets/img1.png" style={{width: '50px'}}/>
                </th>
              </tr>
              <tr>
                <td>Conoce</td>
                <td>
                  Conoce y controla todos los pasos del proceso de compra o venta de tu propiedad
                </td> 
                <td>
                  Crecen de experiencia profesional y estructura de un proceso de compra-venta
                </td>
              </tr>
              <tr>
                <td>Determina</td>
                <td>Determina el precio de tu propiedad con ayuda de nuestros analisis de mercado cuatitativos</td> 
                <td>Su determinacion de precio no cuentan con sustento y existe un conflicto de interes por determinar un precio bajo con el fin de vender tu propiedad</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 center-xs">
            <h4>¡Regístrate!</h4>
            <div>
              <button className="home__button" style={{margin: '0 10px'}}>Comprar</button>
              <button className="home__button home__button--orange-light" style={{margin: '0 10px'}}>Vender</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Section;