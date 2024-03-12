import React from "react";

function MainPage() {
    return (
        <div class="App">
            <div>
                <header class="bg-orange-50">
                    <div class="flex justify-left ml-4">
                        <img class="h-20" src="/pink_linenbg copy.png" alt="Dorahely Logo" />
                    </div>
                </header>
            </div>
            <div class="border-double border-4 border-rose-100 h-screen mt-2 mb-4 ml-2 mr-2">
                <img src="/dorahely.jpg" alt="Dorahely Photo" width="400" height="auto"></img>
            </div>
        </div>
    );
}

export default MainPage;

{/* remember using src attribute for an image - it is relative to the public directory of my project  / means I am starting from the root directory */ }
{/* // remember . represents current directory - this location & .. representsthe parent directory - one level up */ }