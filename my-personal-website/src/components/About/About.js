import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}


function UpdatingText() {
    //for mapping if I needed to
    //const buttonLabels = ["Projects", "About", "Resume", "Education", "Blogs", "Contact"]
    const [text, setText] = useState("");
    const texts = ["DEVELOPER", "CREATOR", "EXPLORER", "LATINA"];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Use headless UI's useInterval hook to update the text every second
    useInterval(() => {
        setText(texts[currentIndex]);
        setCurrentIndex((currentIndex + 1) % texts.length);
    }, 1000);

    return <p>{text}</p>;
}

function About() {
    return (
        <div className="App">
            <div>
                <header className="bg-zinc-50">
                     
                    <div className="flex justify-between items-center ml-4">
                    {/* Top center: UpdatingText */}
                    <UpdatingText /> 
                        <div className="mr-4">
                            <NavLink to={'/'} className="bg-neutral-50 hover:bg-rose-500/50 text-black text-sky-600 rounded px-4 py-4" style={{ fontFamily: 'Parisienne' }}>home</NavLink>
                        </div>
                    </div>
                </header>
            </div>
            <div className=" h-screen flex justify-left background-color: bg-neutral-50">
            <img src="/dorahely.jpg" alt="Dorahely" width="auto" height="auto" style={{ marginTop: '30px', marginBottom: '30px', marginLeft: '30px' }}></img>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', marginLeft: '20px', marginRight: '20px'  }}>
                    <h1 style={{ marginBottom: '20px' }}> ¡Hola! ¡Hola!  </h1>
                    <p style={{ marginBottom: '20px' }}>
                        
                        I'm Dorahely (pronounced Dora-Ellie), I was born in Mexico but raised in beautiful San Diego.
                        I'm a former Buyer at Levi Strauss & Co. transitioned into Software Engineering. Having already successfully managed two DTC
                        (Direct-to-Consumer) businesses in the US & CA, I made the switch into software engineering to further develop my skills and 
                        to solve more complex problems by diving deeper into the technical side. Coming from a non-traditional tech background,
                        I bring a unique perspective characterized by a distinctive blend of creative and analytical skills honed during my tenure at one
                        of the world's top fashion retailers.

                    </p>
                    <p style={{ marginBottom: '20px' }}>Outside of my professional career you can catch me surfing, searching for the best bagel, or attempting a recipe from Bon Appétit.</p>
                    {/*<p  style={{ fontSize: '2em' }}>  🌞 🏄🏽‍♀️ 🥯 🍅 🌼  </p>*/}
                </div>
            </div>


        </div>
    );
}

export default About;