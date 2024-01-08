function countdown(num){
    console.log("hi")
    num--
    document.getElementById("countdown").innerText = num
    setTimeout(countdown,1000,num);
}

// function precount(num){
//     while(num>0){
//         setTimeout(countdown, 1000, num)
//         num--
//     }
 

// }

countdown(10);
// const timeout = setTimeout(precount(), 3000)