'use client';
import React from "react";

export function Slider() {
    
    function inputValue() {
        var x = document.getElementById("slider").value;
        document.getElementById("inputValueText").innerHTML = x;
      }

    return (
        <div className="text-white p-24">
            <form>
               <input 
                type="range"
                min="0"
                max="100"
                step="1"
                className="appearance-none forced-colors:appearance-auto w-screen h-1 rounded-full"
                id="slider"
            /> 
            </form>
            <div className="px-24 mt-12 flex flex-col justify-center">
                <button type="submit" value="Volgende" onClick={inputValue}>Volgende</button>
                <p id="inputValueText"></p>  
            </div>
        </div>
    )
}