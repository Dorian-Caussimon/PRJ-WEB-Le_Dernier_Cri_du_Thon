function submitQuize(a){
    a.preventDefault()

    let score = 0;
    let radios = document.getElementsByName("q2");
    for (let radio of radios) {
        if (radio.checked && radio.value === "b") {
            score += 2;
        }
        if (radio.checked && (radio.value ==="a" || radio.value === "c")){
            score -= 4;
        }
    }
    let chekboxs = document.getElementsByName("q1");
    for (chekbox of chekboxs){
        if (chekbox.checked) {
            if (chekbox.value === "a" || chekbox.value === "c" || chekbox.value === "d"){
                score += 2
            }
            else{
                score -= 3
            }
        }
    }

}