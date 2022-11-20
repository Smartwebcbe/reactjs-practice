import React from "react";

export class Cards extends React.Component {

    render() {
        return (
            <div>
                <div class="card">
                    <img src={this.props.data.img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{this.props.data.title}</h5>
                        <p class="card-text">{this.props.data.desc}</p>
                        <a href="#" class="btn btn-primary" onClick={this.props.clickcount}>Click Here</a>
                    </div>
                </div>
            </div>
        )
    }
}