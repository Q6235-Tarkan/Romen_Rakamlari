import { sayilar } from "../../helper/data"
import { roman_harf } from "../../helper/data"

import React, { useState } from "react";
import "./Main.css"

const Main = () => {
    let romanNumeral = "";
    // const sonuc=document.querySelector(".sonuc");
    

        const [inputValue,setInputValue]= useState([]);

        const handleInputChange = (e)=>{
            const sonuc=document.querySelector(".sonuc");
            const spanm=document.querySelector(".spanm");
            // console.log(e.target.value);
            let inputdeger=Number(e.target.value);
            if(inputdeger){
            sayilar.forEach((r,i)=>{
                while(inputdeger>=r){
                    romanNumeral +=roman_harf[i];
                    inputdeger-=r;
                }
                return romanNumeral;
            })
            setInputValue(romanNumeral);
            console.log(e.target.value);
            if(e.target.value>3000){
                sonuc.style.display="none";
                alert("3000 den büyük sayı girmeyiniz.")
                // sonuc.textContent="3000 den büyük sayu girmeyiniz."
            }else{
                // sonuc.textContent=inputValue;
                sonuc.style.display="block";
            }
        }else{
            console.log("else girdi")
            spanm.textContent="";
        }
            
        }
        
    


  return (
    <div className="root">
        <form action="" className="form">
        <input type="number" className="input" onChange={handleInputChange} min="0" max="3000"/>
        
        </form>
        <p className="sonuc">Sonuçlar <br></br><br /><span className="spanm">{inputValue}</span> </p>
    </div>
  )
}

export default Main
