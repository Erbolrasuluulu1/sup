import React from 'react';

const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <h1>Первый курс <br/>
                        по компьютерной сборке</h1>
                    <div className="hero--block">
                        <div className="hero--block__kv">
                            <h2>18</h2>
                            <h3>Дней</h3>
                        </div>
                        <div className="hero--block__kv">
                            <h2>18</h2>
                            <h3>Дней</h3>
                        </div>
                        <div className="hero--block__kv">
                            <h2>18</h2>
                            <h3>Часов</h3>
                        </div>
                        <div className="hero--block__kv">
                            <h2>18</h2>
                            <h3>Минут</h3>
                        </div>
                        <div className="hero--block__kv">
                            <h2>18</h2>
                            <h3>Секунд</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;