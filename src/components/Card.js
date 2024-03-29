import React from 'react';
import apple from '../assets/img/logo-apple.png';  

const Card = props=>{
    return(
        <div className="col">
            <div className={props.card + " card"}>
                <div className="card__header" style={{backgroundImage:`url(${apple})`}}>
                </div>
                <div className="card__body">
                    <div className="card__body__box">
                        <div className="card__body__price">
                            <span>$400K</span>
                            
                        </div>
                        <div className="card__body__table d-flex">
                            <div className="card__body__row tar">
                                <p>Name</p>
                                <p>Location</p>
                                <p>Closed</p>
                                <p>Owner</p>
                            </div>
                            <div className="card__body__row">
                                <p>Apple IT Deal</p>
                                <p>Cupertino, CA</p>
                                <p>January 30, 2017</p>
                                <p>Me</p>
                            </div>
                        </div>
                        <div className="card__footer d-flex">
                            <div className="card__footer__num">
                                <span>80%</span>
                            </div>
                            <div className="card__footer__avatar">
                                <div className="avatar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;