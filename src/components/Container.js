import React from 'react';
import Card from "./Card"

const Container = props=>{

    return(
        <div className="container">
            <div className="row d-flex">
                <Card card={"won"}></Card>
                <Card card={"lost"}></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            
        </div>
    )
}
export default Container;