import React from "react";
import { Cards } from "../../components/pages/cards";

export class Home extends React.Component {

    state = {
        text: "",
        count: 0
    }

    handlePrint = (event) => {
        console.log(this.state.text);
        this.setState({ text: "Vijay Anand" });
    }
    getclickcount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    // handleAlert=()=>{
    //     alert("User added");
    // }
    render() {
        return (
            <div class="container mt-5">
                {/* <h1>HOME PAGE</h1> */}

                {/* <div>
           <button type="button" class="btn btn-primary" onClick={this.handlePrint}>Print Text</button>
            <h4>Printed Text: {this.state.text}</h4>
           </div> */}
                <h4>Click count: {this.state.count}</h4>
                <div class="row">
                    <div class="col-4"><Cards title="User 01" clickcount={this.getclickcount} /></div>
                    <div class="col-4"><Cards title="User 02" clickcount={this.getclickcount} /></div>
                    <div class="col-4"><Cards title="User 03" clickcount={this.getclickcount} /></div>
                </div>
            </div>
        );
    }
}