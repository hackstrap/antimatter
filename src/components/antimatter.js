import React from 'react'
import './antimatter.css';
import { BiHome } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { BiGrid } from "react-icons/bi";
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
                <p>Set Up Your ELT and Analytical infrastructure</p>
                <div class="cards">
                    <div className="card">
                        <div className="main1">
                        </div>
                    </div>


                    <div className="card">
                        <div className="main2">
                        </div>
                    </div>
                </div>
                <div class="main3">
                    <p class="jitsu">Centralize data with Jitsu</p>
                    <button type = 'submit' class="btn"><a href="https://jitsu.com/" target="_blank">Start Now</a></button>
                </div>
                <div class="main4">
                    <p class="click">Connect to your Data Warehouse</p>
                    <button type = 'submit' class="butn"><a href="https://clickhouse.com/" target="_blank">Start Now</a></button>
                </div>
            </section>
        </>
    )
}

export default Antimatter
