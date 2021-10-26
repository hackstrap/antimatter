import React from 'react';
import { BiCog, BiGrid, BiHome } from "react-icons/bi";
import './antimatter.css';
const Antimatter = () => {
    return (
        <>
            <section>
                <div class="main_icon">
                    <div class="icon1 icon_div">
                        <span class="icon"><BiHome /></span>
                    </div>
                        
                    <div class="icon2 icon_div">
                       <span class="icon"><BiGrid /></span>
                    </div>

                    <div class="icon3 icon_div">
                       <span class="icon"><BiCog /></span>
                    </div>
                </div>

                <h1>Welcome to Antimatter</h1>
                <p>Set Up Your ELT and Analytics Infrastructure</p>
                <div class="application">
                <div class="jitsue">
                        <p class="about"><span class="dot">1</span>Centralize data with Jitsu</p>
                        <div className="logo logo-jitsu"></div>
                        <button type = 'submit' class="btn"><a href="http://localhost:8001/configurator" target="_blank">Start Now</a></button>
                </div>
                <div class="clickHousee">
                        <p class="about"><span class="dot">2</span>Connect to your Data Warehouse</p>
                        <div className="logo logo-clickHouse"></div>
                        <button type = 'submit' class="btn"><a href="http://localhost:8123/play" target="_blank">Start Now</a></button>
                </div>
                <div class="Tabix">
                        <p class="about"><span class="dot">3</span>Run Queries with Web-based ClickHouse Editor</p>
                        <div className="logo logo-Tabix"></div>
                        <button type = 'submit' class="btn"><a href="http://localhost:8081/" target="_blank">Start Now</a></button>
                </div>
                <div class="SQLPad">
                        <p class="about"><span class="dot">4</span>Run Queries with Web-based SQL Editor</p>
                        <div className="logo logo-SQLPad"></div>
                        <button type = 'submit' class="btn"><a href="http://localhost:3002/" target="_blank">Start Now</a></button>
                </div>
                <div class="Trino">
                        <p class="about"><span class="dot">5</span>Run queries with Fast distributed SQL query engine</p>
                        <div className="logo logo-Trino"></div>
                        <button type = 'submit' class="btn"><a href="http://localhost:8080/ui/login.html" target="_blank">Start Now</a></button>
                </div>
                <div class="Jupyter">
                        <p class="about"><span class="dot">6</span>Open your Jupyter Data Science Notebook</p>
                        <div className="logo logo-Jupyter"></div>
                        <button type = 'submit' class="btn"><a href="http://localhost:8888/ui/login.html" target="_blank">Start Now</a></button>
                </div>
                <div class="Metabase">
                        <p class="about"><span class="dot">7</span>Connect with your Business Intelligence tool</p>
                        <div className="logo logo-Metabase"></div>
                        <button type = 'submit' class="btn"><a href="http://localhost:3001/" target="_blank">Start Now</a></button>
                </div>
                <div class="Cubejs">
                        <p class="about"><span class="dot">8</span>Setup an API layer to build data applications faster</p>
                        <div className="logo logo-Cubejs"></div>
                        <button type = 'submit' class="btn"><a href="http://localhost:4000/#/connection" target="_blank">Start Now</a></button>
                </div>
                </div>

            </section>
        </>
    )
}

export default Antimatter
