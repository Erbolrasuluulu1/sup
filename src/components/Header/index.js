import React from 'react';
import LOGO from "../../img/Vector.svg"

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <img src={LOGO} alt="img"/>
                    <div className="header--nav">
                        <a href="#">Главная</a>
                        <a href="#">Курсы</a>
                        <a href="#">Расписание</a>
                        <a href="#">Преподаватели</a>
                        <a href="#">Рассылка</a>
                        <a href="#">Контакты</a>
                    </div>
                    <button>Зайти в кабинет</button>
                </div>
            </div>
        </div>
    );
};

export default Header;