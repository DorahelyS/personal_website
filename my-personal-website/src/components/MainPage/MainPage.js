import React from "react";
import { NavLink } from "react-router-dom";


function MainPage() {
    return (
        <div className="App">
            <header className="bg-zinc-50">
                <div className="flex justify-between items-center ml-4">
            

                    {/* Top left: Dorahely Logo */}
                    <div className="flex-grow flex justify-center items-center" style={{ fontFamily: 'Parisienne', fontSize: '50px', marginLeft: '120px' }}>
                    <img className="h-28" src="/pink_linenbg copy.png" alt="Dorahely Logo" />

                    </div>

                    {/* Top right: NavLinks */}
                    <div className="mr-4">
                        <NavLink to={'/about'} className="bg-neutral-50 hover:bg-rose-500/50 text-black text-sky-600 rounded px-4 py-4" style={{ fontFamily: 'Parisienne' }}> about</NavLink>
                        <NavLink to={'https://medium.com/@dorahelys'} className="bg-neutral-50 hover:bg-rose-500/50 text-black text-sky-600 rounded px-4 py-4" style={{ fontFamily: 'Parisienne' }}> blogs</NavLink>
                        <NavLink to={'/resume'} className="bg-neutral-50 hover:bg-rose-500/50 text-black text-sky-600 rounded px-4 py-4" style={{ fontFamily: 'Parisienne' }}> resume</NavLink>
                    </div>
                </div>
            </header>

            <div className="bg-neutral-50">

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
// border-double border-4 rounded-lg border-rose-100