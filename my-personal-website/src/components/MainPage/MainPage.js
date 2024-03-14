import React from "react";
import { NavLink } from "react-router-dom";

function MainPage() {
    //for mapping if I needed to
    //const buttonLabels = ["Projects", "About", "Resume", "Education", "Blogs", "Contact"]

    return (
        <div className="App">
            <div>
                <header className="bg-zinc-50">
                    <div className="flex justify-left ml-4">
                        <img className="h-28" src="/pink_linenbg copy.png" alt="Dorahely Logo" />
                    </div>
                </header>
            </div>
            <div className="border-double border-4 rounded-lg border-rose-100 h-screen flex justify-left background-color: bg-neutral-50">
                <img src="/dorahely.jpg" alt="Dorahely" width="auto" height="auto" style={{ marginTop: '30px', marginBottom: '30px', marginLeft: '30px' }}></img>
                <div  className="flex items-center" >
                    {/* instead of writing code for each button - too repetitive mapping over just one & only updating the label */}
                    {/*buttonLabels.map((label, index) => (
                        <button key={index} className="bg-rose-500/50 hover:bg-neutral-50 text-black text-sky-600 rounded px-4 py-4 font-Parisienne" style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: '24px', marginRight: '18px'}} >{label}</button>
                    ))*/}
                    <NavLink to={'/about'} className="bg-rose-500/50 hover:bg-neutral-50 text-black text-sky-600 rounded px-4 py-4" style={{fontFamily: 'Parisienne', marginLeft:'160px' }}> about</NavLink>
                    <NavLink to={'/projects'} className="bg-rose-500/50 hover:bg-neutral-50 text-black text-sky-600 rounded px-4 py-4 font-Parisienne" style={{fontFamily: 'Parisienne', marginLeft:'60px'}}> projects</NavLink>
                    <NavLink to={'/blogs'} className="bg-rose-500/50 hover:bg-neutral-50 text-black text-sky-600 rounded px-4 py-4 font-Parisienne" style={{fontFamily: 'Parisienne', marginLeft:'60px' }}> blogs</NavLink>
                    <NavLink to={'resume'} className="bg-rose-500/50 hover:bg-neutral-50 text-black text-sky-600 rounded px-4 py-4 font-Parisienne" style={{ fontFamily: 'Parisienne', marginLeft:'60px'}}> resume</NavLink>
            
                </div>
              
            </div>
            <footer className="bg-zinc-50 py-4 text-center " style={{ fontSize: 'small', fontFamily: 'Parisienne'}}>made with React and  ☕</footer>
        </div>
    );
}

export default MainPage;
/* remember using src attribute for an image - it is relative to the public directory of my project  / means I am starting from the root directory 
/* // remember . represents current directory - this location & .. representsthe parent directory - one level up 
/*<button key={index} class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" style={{ marginTop: '30px', marginBottom: '30px', marginLeft: '20px' }}>{label}</button> */ 