const stars = document.querySelectorAll(".stars i");

// console.log(stars)

stars.forEach((star,ind1)=>{
    star.addEventListener("click",()=>{
        console.log(ind1);

        stars.forEach((star,ind2)=>{
            console.log(ind2);

            ind1 >= ind2 ? star.classList.add("active") : star.classList.remove("active");
        })
    })
})