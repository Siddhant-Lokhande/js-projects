console.log("generate otp");

let generateOtp  =() =>{

    const otpLength = 6;

    const otp = Math.floor(Math.random()*Math.pow(10,otpLength) );
    

    document.getElementById("displayOtp").innerText = otp;
}

document.getElementById("generateBtn").addEventListener("click",generateOtp);

window.addEventListener("load",generateOtp);