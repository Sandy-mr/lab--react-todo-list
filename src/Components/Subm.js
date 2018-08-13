import React, { Component } from "react";

export default class Subm extends Component{

_handleClick = () =>{
  let i = this.props.index;
  this.props.removeItem(i);
}

    render(){
      return(
        <div className="submit-item">
              <div>
                <input type="checkbox" value="" />
                <span>{this.props.value}</span>
              </div>
            <button>
              <i className="fa fa-remove fa-2x" onClick={this._handleClick}></i>
            </button>
        </div>
      )
  }
}
