import React from 'react';
import nol from "../../img/Ellipse 1 (Stroke).png"

const Start = () => {
    return (
        <div id="start">
            <div className="container">
                <div className="start">
                    <div className="start--be">
                        <img src={nol} alt=""/>
                        <h1>Быстрый старт</h1>
                    </div>
                    <p>Больше 90% учеников прошли полный курс и смогли <br/>
                        собрать свой первый компьютер</p>

                    <div className="start--pro">
                        <div className="start--pro__blo">
                            <div className="start--pro__blo--bir">
                                <h1>100%</h1>
                                <div className="start--pro__blo--bir--juz">

                                </div>
                            </div>
                            <div className="start--pro__blo--eki">
                                <h1>100%</h1>
                                <div className="start--pro__blo--bir--jeti">

                                </div>
                            </div>
                            <div className="start--pro__blo--eki">
                                <h1>100%</h1>
                                <div className="start--pro__blo--bir--jeti">

                                </div>
                            </div>
                            <div className="start--pro__blo--uch">
                                <h1>100%</h1>
                                <div className="start--pro__blo--bir--besh">

                                </div>
                            </div>
                            <div className="start--pro__blo--ito">
                                <h1>Итог</h1>
                                <div className="start--pro__blo--bir--line">

                                </div>
                            </div>


                        </div>
                        <div className="start--pro__par">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Start;