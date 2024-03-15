import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    useEffect(() => {
        console.log("Resume component rendered");
    });
    return (
        <div className="App">
            <div>
                <header className="bg-zinc-50">
                    <div className="flex justify-between items-center ml-4">
                        <img className="h-28" src="/pink_linenbg copy.png" alt="Dorahely Logo" />

                        <div className="mr-4">
                            <NavLink to={'/'} className="bg-rose-500/50 hover:bg-neutral-50 text-black text-sky-600 rounded px-4 py-4" style={{ fontFamily: 'Parisienne' }}>home</NavLink>
                        </div>
                    </div>
                </header>
            </div>

            <div className="border-double border-4 rounded-lg border-rose-100">
                <div className="flex justify-center items-center">
                    <Document
                        file="/Dorahely_Sanchez_Resume.pdf"
                        className="border border-black mt-4 mb-4"
                    >
                        <Page pageIndex={0} />
                    </Document>
                </div>
            </div>

        </div>
    );
}


export default Resume;