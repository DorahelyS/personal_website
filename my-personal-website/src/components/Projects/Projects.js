import React from "react";
import { NavLink } from "react-router-dom";

function Projects() {
    return (
        <div className="App">
            <div>
                <header className="bg-zinc-50">
                    <div className="flex justify-between items-center ml-4">
                        <img className="h-28" src="/pink_linenbg copy.png" alt="Dorahely Logo" />

                        <div className="mr-4">
                            <NavLink to={'/'} className="bg-rose-500/50 hover:bg-neutral-50 text-black text-sky-600 rounded px-4 py-4" style={{fontFamily: 'Parisienne'}}>home</NavLink>
                        </div>
                    </div>
                </header>
            </div>
            <div className="border-double border-4 rounded-lg border-rose-100 h-screen flex justify-left background-color: bg-neutral-50">

            </div>


        </div>
    );
}

export default Projects;