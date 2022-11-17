import React from "react";

export class User extends React.Component{

state={
    username:""
}

    handleInput=(event)=>{
        // console.log(event.target.value);
        this.setState({username:event.target.value})
    }
    render(){
        return(
            <div>
                {/* <h2>USER PAGE</h2> */}
            <input onChange={this.handleInput}/>
            <h4>Typed value:{this.state.username}</h4>
            </div>
        )
    }
}