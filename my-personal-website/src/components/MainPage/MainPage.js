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
function MainPage() {
    return (
        <div className="App">
            <header className="bg-zinc-50">
                <div className="flex justify-between items-center ml-4">
                    {/* Top left: Dorahely Logo */}
                    <img className="h-28" src="/pink_linenbg copy.png" alt="Dorahely Logo" />

                    {/* Top center: UpdatingText */}
                    <div className="flex-grow flex justify-center items-center" style={{ fontFamily: 'Parisienne', fontSize: '50px', marginLeft: '120px' }}>
                        <UpdatingText />
                    </div>

                    {/* Top right: NavLinks */}
                    <div className="mr-4">
                        <NavLink to={'/about'} className="bg-neutral-50 hover:bg-rose-500/50 text-black text-sky-600 rounded px-4 py-4" style={{ fontFamily: 'Parisienne' }}> about</NavLink>
                        <NavLink to={'https://medium.com/@dorahelys'} className="bg-neutral-50 hover:bg-rose-500/50 text-black text-sky-600 rounded px-4 py-4" style={{ fontFamily: 'Parisienne' }}> blogs</NavLink>
                        <NavLink to={'/resume'} className="bg-neutral-50 hover:bg-rose-500/50 text-black text-sky-600 rounded px-4 py-4" style={{ fontFamily: 'Parisienne' }}> resume</NavLink>
                    </div>
                </div>
            </header>

            <div className="border-double border-4 rounded-lg border-rose-100 bg-neutral-50">

                <div >
                    <a href="https://www.loom.com/share/30e0d9ff62204ed0b14b66921b65a567">

                        <img src="/UBUNTU.png" alt="UBUNTU screenshot" />
                    </a>
                    <a href="https://www.loom.com/share/20e63a37141646cc9f7f54c235272a2a">
                    
                        <img src="/UNITE.png" alt="UNITE screenshot" />
                    </a>
                </div>
            </div>

            <footer className="bg-zinc-50 py-4 text-center" style={{ fontSize: 'small', fontFamily: 'Parisienne', marginTop: "auto" }}>made with React and  ☕ 🌸</footer>
        </div>
    );
}

export default MainPage;
/* remember using src attribute for an image - it is relative to the public directory of my project  / means I am starting from the root directory 
/* // remember . represents current directory - this location & .. representsthe parent directory - one level up 
/*<button key={index} class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" style={{ marginTop: '30px', marginBottom: '30px', marginLeft: '20px' }}>{label}</button> */ 