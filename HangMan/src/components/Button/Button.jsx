import React from "react";

function Button(){
    return (
        <React.Fragment>
        <button className="border-2 border-red-500 px-2 w-38 bg-slate-100" >Show the entered text</button>
        <button id="btn" className=" border-solid border-2 border-sky-500  px-2 w-28 bg-slate-100 hover:bg-sky-700  ">Submit !</button>
        </React.Fragment>
    );
}

export default Button;