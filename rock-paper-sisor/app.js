console.log("hello world")


const gameContainer = document.querySelector(".conatiner"),
userREsult = document.querySelector(".user_result img"),
cpuREsult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".opt_img");

optionImages.forEach((image,index)=>{
    image.addEventListener("click",(e) =>{
        image.classList.add("active");

        userREsult.src = cpuREsult.src= "assets/rock.png";
        result.textContent ="wait...."

        optionImages.forEach((image2,index2)=>{
           index != index2 &&  image2.classList.remove("active");

           
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {
             gameContainer.classList.remove("start");

        let imageSrc = e.target.querySelector("img").src;
             userREsult.src = imageSrc;
             // console.log(imageSrc);

        let randomNUM = Math.floor(Math.random()*3);
        let cpuImages =["assets/rock.png","assets/paper.png","assets/scissors.png"];
        cpuREsult.src = cpuImages[randomNUM ];



        let cpuValue =  ["R","P","S"][randomNUM];
        let userValue  =  ["R","P","S"][index];
        // console.log(cpuValue,userValue)

        let outComes = {

            RR:"Draw",
            RP:"Cpu",
            RS:"User",
            PP:"Draw",
            PR:"User",
            PS:"Cpu",
            SS:"Draw",
            SR:"Cpu",
            SP:"User",

        }
        let outComesValue = outComes[userValue + cpuValue];
        result.textContent = userValue === cpuValue ?  "Match Draw" :`${outComesValue} WON!!!`;
        },1000)
       
    });
});
