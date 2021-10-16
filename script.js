/***************/
/**POLE ČÍSEL**/
/*************/
let people = [{
    num: 731721507,
    popis: "Otrava, volal několikrát po sobě"
},{
    num: 158,
    popis: "Policie"
},{
    num: 155,
    popis: "Hasiči"
},{
    num: 741,
    popis: "Snažil se mi prodat hrnce"
},{
    num: +420666,
    popis: "Něco nabízel, moc mu nebylo rozumnět, má ruský přízvuk"
}]



/************/
/**ZVONĚNÍ**/
/**********/
let nokiaPicture = document.querySelector("img")
let nokiaMusic = document.getElementById("nokiaSound")



nokiaPicture.addEventListener("click", function(){
    nokiaMusic.play()
})

/*********************/
/**VYPISOVÍNÍ ČÍSEL**/
/*******************/
document.querySelector("h1").addEventListener("click",function(){
    let input = document.querySelector("input").value
    let check = document.querySelector("#check")
    let select = document.querySelector("select");
    let option = select.options[select.selectedIndex];
    let arr1 = []
    let arr2 = []
    document.querySelector("#button").style.display = "none"

    if(input.length >= 1){
    if(isNaN(input)){
        document.querySelector("#vypsatCislo").textContent = "Tato aplikace je udělána pouze na desítkovou soustavu. Pokud nevíš co to je, odkazuji na zajímavé video na youtube z kanálu Vědecké kladivo, je to zajímavá problematika. https://www.youtube.com/watch?v=dQw4w9WgXcQ"
     }else{
        if(check.checked === true){
            document.querySelector("select").style.display = "inline"
            people.filter(function(person){
                if(person.num == option.value + input){
                    arr1.push(person.num)
                    arr1.push(person.popis)
                }else{
                    arr2.push(person.num)
                }
            })
            if(arr1.length > 1 ){
                document.querySelector("#vypsatCislo").textContent = "O čísle " + arr1[0] + " se u nás píše: " + arr1[1]
            }else{
                document.querySelector("#vypsatCislo").textContent = "O čísle " + option.value + input + " se u nás  nic nepíše." 
                document.querySelector("#button").style.display = "block"
            }
        }else{
            document.querySelector("select").style.display = "none"
            people.filter(function(person){
                if(person.num == input){
                    arr1.push(person.num)
                    arr1.push(person.popis)
                }else{
                    arr2.push(person.num)
                }
            })
            if(arr1.length > 1 ){
                document.querySelector("#vypsatCislo").textContent = "O čísle " + arr1[0] + " se u nás píše: " + arr1[1]
            }else{
                document.querySelector("#vypsatCislo").textContent = "O čísle " + input + " se u nás  nic nepíše."
                document.querySelector("#button").style.display = "block"
            }

            
        }
    }
}else{
    document.querySelector("#vypsatCislo").textContent = "Abys mohl hledat v naší databázi, je potřeba něco napsat :D"
}

let button = document.querySelector("#button")
let form = document.querySelector("#formular")
let inputCislo = document.querySelector("#inputCislo")
button.addEventListener("click",function(){
    form.style.display = "block"
    inputCislo.value = input
})

})


            