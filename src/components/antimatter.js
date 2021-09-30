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
                        <div className="logo logo-jitsu"></div>
                        <div className="logo logo-clickHouse"></div>
                </div>

                <div className="btn-group">
                <div class="btn-box">
                    <p class="about">Centralize data with Jitsu</p>
                    <button type = 'submit' class="btn">Start Now</button>
                </div>
                  <div class="btn-box">
                    <p class="about">Connect to your Data Warehouse</p>
                    <button type = 'submit' class="btn">Start Now</button>
                </div>
              </div>
            </section>
        </>
    )
}

export default Antimatter
