
import ServicesItem from './ServicesItem'

import React, { Component } from 'react'

export default class Serviceslist extends Component {
    servicesList = [
        {
            title: "Nhanh hơn ",
            content: "React Js giúp bạn code nhanh hơn",
        },
        {
            title: "Tái sử dụng",
            content: "Tái sử dụng và tối ưu code cực kỳ cao",
        },
        {
            title: "Cộng Đồng",
            content: "Có cộng động lớn, với nhiều Doc và Hỗ trợ",
        },
        {
            title: "Đa dạng",
            content: "Đa dạng với các thư viện, các hiệu ứng",
        },
        {
            title: "Sử dụng",
            content: "ReactJS được sử dụng rộng rãi ở các công ty, nên nhu cầu nhân lực rất cao",
        },
        {
            title: "An toàn và bảo mật",
            content: "Bảo mật XSS với dataBinDing",
        },

    ];
    renderServicesList()
    {
        return this.servicesList.map((item, index) => {
            return (
                <div className="col-lg-6 col-xxl-4 mb-5" key={index}>
                    <ServicesItem tieuDe={item.title} noiDung={item.content}></ServicesItem>
                </div>
            );
        });
    }
    render() 
    {
        return (
            <section className="pt-4">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        {this.renderServicesList()}
                    </div>
                </div>
            </section>

        );
    }

}

    
