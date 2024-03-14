import React from "react";
import { NavLink } from "react-router-dom";

function About() {
    return (
        <div className="App">
            <div>
                <header className="bg-zinc-50">
                    <div className="flex justify-left ml-4">
                        <img className="h-28" src="/pink_linenbg copy.png" alt="Dorahely Logo" />
                    </div>
                </header>
            </div>

            <div className="flex items-center justify-center" >
                <NavLink to={'/'} className="bg-rose-500/50 hover:bg-neutral-50 text-black text-sky-600 rounded px-4 py-4 font-Parisienne" style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: '24px', marginRight: '18px' }} > home</NavLink>

            </div>
        </div>
    );
}

export default About;