import React from "react";

function MainPage() {
    const buttonLabels = ["Projects", "About", "Resume", "Education", "Blogs", "Contact"]
    return (
        <div className="App">
            <div>
                <header className="bg-orange-50">
                    <div className="flex justify-left ml-4">
                        <img className="h-20" src="/pink_linenbg copy.png" alt="Dorahely Logo" />
                    </div>
                </header>
            </div>
            <div className="border-double border-4 border-rose-100 h-screen mt-2 mb-4 ml-2 mr-2 flex justify-left">
                <img src="/dorahely.jpg" alt="Dorahely Photo" width="auto" height="auto" style={{ marginTop: '30px', marginBottom: '30px', marginLeft: '20px' }}></img>
                <div>
                    {/* instead of writing code for each button - too repetitive mapping over just one & only updating the label */}
                    {buttonLabels.map((label, index) => (
                        <button key={index} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" style={{ marginTop: '30px', marginBottom: '30px', marginLeft: '20px' }}>{label}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainPage;

{/* remember using src attribute for an image - it is relative to the public directory of my project  / means I am starting from the root directory */ }
{/* // remember . represents current directory - this location & .. representsthe parent directory - one level up */ }
{/*<button key={index} class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" style={{ marginTop: '30px', marginBottom: '30px', marginLeft: '20px' }}>{label}</button> */ }