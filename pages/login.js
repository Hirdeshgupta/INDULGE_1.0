import React, { Component, useEffect, useState } from "react";
import './../assets/css/login.css'
export default function Login() {
        useEffect(()=>{
                alert("I m in	")
                let switchCtn = document.querySelector("#switch-cnt");
                let switchC1 = document.querySelector("#switch-c1");
                let switchC2 = document.querySelector("#switch-c2");
                let switchCircle = document.querySelectorAll(".switch__circle");
                let switchBtn = document.querySelectorAll(".switch-btn");
                let aContainer = document.querySelector("#a-container");
                let bContainer = document.querySelector("#b-container");
                let allButtons = document.querySelectorAll(".submit");
                let cont= document.getElementById("switch-cnt");
                let getButtons = (e) => e.preventDefault();
                
                let changeForm = (e) => {
                    if(cont.style.width != 'auto'){cont.style.width="auto";}
                    else{
                        cont.style.width="400px";
                    }
                    switchCtn.classList.add("is-gx");
                    setTimeout(function () {
                        switchCtn.classList.remove("is-gx");
                    }, 1500);
                
                    switchCtn.classList.toggle("is-txr");
                    switchCircle[0].classList.toggle("is-txr");
                    // switchCircle[1].classList.toggle("is-txr");
                
                    switchC1.classList.toggle("is-hidden");
                    switchC2.classList.toggle("is-hidden");
                    aContainer.classList.toggle("is-txl");
                    bContainer.classList.toggle("is-txl");
                    bContainer.classList.toggle("is-z200");
                };
                
                let mainF = (e) => {
                    for (var i = 0; i < allButtons.length; i++)
                        allButtons[i].addEventListener("click", getButtons);
                    for (var i = 0; i < switchBtn.length; i++)
                        switchBtn[i].addEventListener("click", changeForm);
                };
                
                window.addEventListener("load", mainF);
                
                // })
        },[])

      {
    return (
        <>
            <div className="main">
                <div className="container a-container" id="a-container">
                    <form className="form" id="a-form" >
                        <h2 className="form_title title">Create Account</h2>
                        <input className="form__input" type="text" placeholder="Name" />
                        <input className="form__input" type="text" placeholder="Email" />
                        <input className="form__input" type="password" placeholder="Password" />
                        <button  className="form__button button submit">SIGN UP</button>
                    </form>
                </div>
                <div className="container b-container" id="b-container">
                    <form className="form" id="b-form"  >
                        <h2 className="form_title title">Sign in to Website</h2>
                        <input className="form__input" type="text" placeholder="Email" />
                        <input className="form__input" type="password" placeholder="Password" />
                        <a className="form_link">Forget Your Password</a>
                        <button  className="form__button button submit">SIGN IN</button>
                    </form>
                </div>
                <div className="switch" id="switch-cnt">
                    <div className="switch_circle"></div>
                    <div className="switch__circle switch__circle--t"></div>
                    <div className="switch__container" id="switch-c1">
                        <h2 className="switch__title title">Welcome back!</h2>
                        <p className="switch__description description">To keep connected with us please login with your personal info</p>
                    <button  className="switch__button button switch-btn"> SIGN IN </button>
                    </div>
                    <div className="switch_container is-hidden" id="switch-c2">
                        <h2 className="switch__title title">Hello Friend!</h2>
                        <p className="switch__description description" >Enter your personal details and start journey with us </p>
                        <button className="switch__button button switch-btn">SIGN UP</button>
                    </div>
                </div>
            </div>
        </>

    );
}}