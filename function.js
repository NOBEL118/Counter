function inc_dec() {
    const button = document.querySelector(".button");
    let num = prompt("enter a no  ;) ");
    const number = document.getElementById("number"); 

    button.addEventListener('click', function (e) {
        if (e.target.id === "inc") {
            num += 1;
            number.innerText = num;        
        } else if (e.target.id === "dec") {
            num -= 1;
            number.innerText = num ;
        } else if (e.target.id === "reset") {
            num = 0 ;
            number.innerText = num ;
        } else{
            console.log("   PLS PRESS THE BUTTON ")
        }
    });
}

inc_dec();
