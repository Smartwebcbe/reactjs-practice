import React from "react";
import { Cards } from "../../components/pages/cards";

export class Home extends React.Component {

    state = {
        text: "",
        count: 0,
        cardlist: [
            {
                title: "Card 01",
                desc: "User Card 01",
                img: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
            },
            {
                title: "Card 02",
                desc: "User Card 02",
                img: "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
            },
            {
                title: "Card 03",
                desc: "User Card 03",
                img: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
            },
            {
                title: "Card 04",
                desc: "User Card 04",
                img: "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
            }
        ]
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
                {/* <h4>Click count: {this.state.count}</h4>
                <div class="row">
                    <div class="col-4"><Cards title="User 01" clickcount={this.getclickcount} /></div>
                    <div class="col-4"><Cards title="User 02" clickcount={this.getclickcount} /></div>
                    <div class="col-4"><Cards title="User 03" clickcount={this.getclickcount} /></div>
                </div> */}
                <div class="row">
                <h4>Click count: {this.state.count}</h4>
                    {
                        this.state.cardlist.map((data) =>
                        //you can map individual objects like data.name, data.desc, data.img
                            // <div class="col-3"><Cards title={data.title} clickcount={this.getclickcount} /></div>
                            //Or you can inclide everything as data like below & display individually in components/pages/cards/index.js
                            <div class="col-3"><Cards data={data} clickcount={this.getclickcount} /></div>
                        )
                    }
                </div>

            </div>
        );
    }
}