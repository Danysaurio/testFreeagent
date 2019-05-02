import React from 'react';
import logo from '../assets/img/logotipo.png';


const Header = props=>{
    return(
        <header className="header">
            <div className="header__box d-flex">
                <figure className="header__logo">
                    <img src={logo} alt="logo" className="header__logo__img"/>
                </figure>
                <div className="d-flex">
                    <ul className="header__list d-flex">
                        <li className="header__list__item active">
                            Leads
                        </li>
                        <li className="header__list__item">
                            Accounts
                        </li>
                        <li className="header__list__item">
                            Deals
                        </li>
                        <li className="header__list__item">
                            Next Steps
                        </li>
                        <li className="header__list__item">
                            Reports
                        </li>
                        <li className="header__list__item header__list__item--bell">
                            <img src="" alt=""/>
                        </li>
                    </ul>
                    <div className="header__avatar d-flex">
                        <div className="avatar"></div>

                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;