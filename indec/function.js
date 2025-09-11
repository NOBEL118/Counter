function inc_dec() {
    const button = document.querySelector(".button"); // fixed
    let num = 0;
    const number = document.getElementById("number"); // make sure this exists in HTML

    button.addEventListener('click', function (e) {
        if (e.target.tagName !== "BUTTON") return;

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
