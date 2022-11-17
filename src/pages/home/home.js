import React from "react";
import {Cards} from "../../components/pages/cards";

export class Home extends React.Component{

    state={
        text:""
    }

    handlePrint=(event)=>{
        console.log(this.state.text);
        this.setState({text:"Vijay Anand"});
    }
    // handleAlert=()=>{
    //     alert("User added");
    // }
    render(){
        return(
           <div class="container mt-5">
            {/* <h1>HOME PAGE</h1> */}
            
           <div>
           <button type="button" class="btn btn-primary" onClick={this.handlePrint}>Print Text</button>
            <h4>Printed Text: {this.state.text}</h4>
           </div>
            <div class="row">
<div class="col-4"><Cards/></div>
            </div>
           </div>
        );
    }
}