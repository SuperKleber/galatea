import React, { Component } from "react";
import "../../../static/styles/lamp.css";

// Este componente simplemente muestra una lámpara que se enciende cuando
// haces scroll y llegas a los 100px desde top (este número se modifica en la función "hanldeScroll").

// PROPS:
// "description": es el texto que se mostrará encima de la lámpara al encenderse

export default class Lamp extends Component {
  state = { on: false };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroll > 100) {
      this.Switch();
    }
  };
  Switch = (scroll) => {
    this.setState({
      on: true,
    });
  };
  render() {
    const { description } = this.props;
    return (
      <div className="container-fluid p-0" id="lamp">
        <div onClick={this.Switch} className="lamp">
          <div className="gonna-give-light"></div>
        </div>
        {this.state.on && (
          // <img className="aparition" src="../../static/images/edificios.jpg" alt=""/>

          <p className="aparition text-center container">{description}</p>
        )}
        {this.state.on && (
          <style jsx="true">{`
            .lamp:before {
              background: rgba(255, 255, 255, 1);

              box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.8),
                0px 5px 50px rgba(255, 255, 255, 0.8),
                0px 8px 80px rgba(255, 255, 255, 0.6),
                0px 8px 120px rgba(255, 255, 255, 0.6);
            }
          `}</style>
        )}
      </div>
    );
  }
}
