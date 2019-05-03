import React from 'react';



const SubMenu = props=>{
    return(
        <div className="SubMenu">
            <div className="SubMenu__box d-flex">
                <div className="SubMenu__filter">
                    <i className="icon-equalizer2 icon"></i>
                </div>
                <div className="SubMenu__counter">
                    <span className="SubMenu__counter__num">748</span>
                </div>
                <div className="SubMenu__name">
                    <span>Deals</span>
                </div>
                <ul className="SubMenu__views d-flex">
                    <li className="SubMenu__views__item active">
                        <i className="icon icon-card-view-icon"></i>
                    </li>
                    <li className="SubMenu__views__item">
                        <i className="icon icon-list-view-icon"></i>
                    </li>
                    <li className="SubMenu__views__item">
                        <i className="icon icon-kanban-view"></i>
                    </li>
                </ul>
                <div className="SubMenu__search d-flex">
                    <i className="SubMenu__search__icon icon icon-search"></i>
                    <input className="SubMenu__search__input" placeholder="Search Deals"/>
                </div>
                <div className="SubMenu__btn__box ">
                    <button className="SubMenu__btn d-flex">Things You Can Do <div className="arrow__down"></div></button>
                </div>
            </div>
        </div>
    )
}
export default SubMenu;