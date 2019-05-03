import React from 'react';
import Card from "./Card"

const Container = props=>{
    const AllCards = [
        {
            name: 'Apple IT Deal',
            monay: 400,
            location: "Cupertino, CA",
            closed: "January 30, 2017",
            owner: "Me",
            porcent: "80%",
            type: "won"
        },
        {
            name: 'Apple IT Deal',
            monay: 400,
            location: "Cupertino, CA",
            closed: "January 30, 2017",
            owner: "Me",
            porcent: "80%",
            type: "lost"
        },
        {
            name: 'Apple IT Deal',
            monay: 400,
            location: "Cupertino, CA",
            closed: "January 30, 2017",
            owner: "Me",
            porcent: "80%",
            type: ""
        },
        {
            name: 'Apple IT Deal',
            monay: 400,
            location: "Cupertino, CA",
            closed: "January 30, 2017",
            owner: "Me",
            porcent: "80%",
            type: ""
        },
        {
            name: 'Apple IT Deal',
            monay: 400,
            location: "Cupertino, CA",
            closed: "January 30, 2017",
            owner: "Me",
            porcent: "80%",
            type: ""
        },
        {
            name: 'Apple IT Deal',
            monay: 400,
            location: "Cupertino, CA",
            closed: "January 30, 2017",
            owner: "Me",
            porcent: "80%",
            type: ""
        },
        {
            name: 'Apple IT Deal',
            monay: 400,
            location: "Cupertino, CA",
            closed: "January 30, 2017",
            owner: "Me",
            porcent: "80%",
            type: ""
        },
        {
            name: 'Apple IT Deal',
            monay: 400,
            location: "Cupertino, CA",
            closed: "January 30, 2017",
            owner: "Me",
            porcent: "80%",
            type: ""
        },
        {
            name: 'Apple IT Deal',
            monay: 400,
            location: "Cupertino, CA",
            closed: "January 30, 2017",
            owner: "Me",
            porcent: "80%",
            type: ""
        },
        {
            name: 'Apple IT Deal',
            monay: 400,
            location: "Cupertino, CA",
            closed: "January 30, 2017",
            owner: "Me",
            porcent: "80%",
            type: ""
        },
    ]

    return(
        <div className="container">
            <div className="row d-flex">
                {
                    AllCards.map(el => <Card data={el}></Card>)
                }
            </div>
            
        </div>
    )
}
export default Container;