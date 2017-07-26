import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleClick = () => {
    this.setState({open: !this.state.open});
    this.props.actions.getJson();
  }

  render() {
    return (
      <div className="container-fluid">
        
        <div className="row">
          <div className="col-xs-offset-3 col-xs-9 home">
            <span>Vendedores</span>
            <span>Compradores</span>
            <span>Regístrate</span>
            <span>Iniciar Sesión</span>
            <button className="home__button" onClick={this.handleClick}>Contacto</button>
          </div>
          
           {this.state.open ? 
              <ul className="home__modal">
                <li><span className="home__modal__text">Nombre:</span>{this.props.json.json.name}</li>
                <li><span className="home__modal__text">Email:</span>{this.props.json.json.email}</li>
              </ul>: null
           }
            
        </div>

        <div className="row home-back-image">
          <div className="col-xs-12">
            <h1 className="home__title">Vende o compra propiedades <br /> <span className="home__title home__title--second">¡Sin comisión de corredores!</span></h1>
          </div>
        </div>

      </div>
    );
  }
}

Header.propTypes = {
  json: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    json: state.json
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
