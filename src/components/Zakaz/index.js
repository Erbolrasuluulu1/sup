import React from 'react';

const Zacaz = () => {
    return (
        <div id="zacaz">
            <div className="container">
                <div className="zacaz">
                    <button>Заказать курс</button>
                    <div className="zacaz--uch">
                        <div className="zacaz--uch__sos">
                            <h1>Учеников всего:</h1>
                            <h1>Успешно закончили курс:</h1>
                        </div>
                        <div className="zacaz--uch__san">
                            <h3>200</h3>
                            <h3>190</h3>
                        </div>
                    </div>
                    <div className="zacaz--zara">
                        <div className="zacaz--zara__tort">
                            <h1>Заработано учениками:</h1>
                            <h2>400 000₽</h2>
                        </div>
                        <div className="zacaz--zara__divs">
                            <div className="zacaz--zara__divs--bir">

                            </div>
                            <div className="zacaz--zara__divs--eki">

                            </div>
                        </div>
                        <div className="zacaz--zara__nol">
                            <h1>0</h1>
                            <h2>1 000 000₽</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Zacaz;