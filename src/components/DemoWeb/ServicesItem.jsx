import React, { Component } from 'react'

export default class Servicesitem extends Component {
  render() {
    console.log("title", this.props.tieuDe);
    console.log("title", this.props.noiDung);
    return (
        <div className="card bg-light border-0 h-100">
            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                </div>
                <h2 className="fs-4 fw-bold"> {this.props.tieuDe} </h2>
                <p className="mb-0"> {this.props.noiDung}</p>
            </div>
        </div>
    )
  }
}
