  import React, { Component } from "react";
  import Subm from "./Subm";

  export default class Submi extends Component{
  render(){
   var removeItem = this.props.removeItem;
   console.log(this.props.value);
   var elements = this.props.values.map(function(value, index){
     return <Subm value={value} key={index}  index={index} removeItem={removeItem} />
   })
   return(
   <div className="submi">
    {elements}
   </div>
   )
  }
}
