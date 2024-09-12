

let oriCurr = document.querySelector("#oriCurr")
let conCurr = document.querySelector("#conCurr")
let btn = document.querySelector("button")
let exchangeRate = document.querySelector(".result .rate")




for (const key in countryList) {
    let newOpt = document.createElement("option")
    newOpt.innerText = key
    newOpt.value = key
    oriCurr.append(newOpt)
    if (newOpt.value == "USD") {
        newOpt.selected = "selected"
    }

}

for (const key in countryList) {
    let newOpt = document.createElement("option")
    newOpt.innerText = key
    newOpt.value = key
    conCurr.append(newOpt)
    if (newOpt.value == "PKR") {
        newOpt.selected = "selected"
    }
}
window.addEventListener("load", (e) = {

})

function currencyFinder(amount) {
    let selected = oriCurr.value;
    let selected2 = conCurr.value;
    selected = selected.toLowerCase()
    selected2 = selected2.toLowerCase()

    let apiLink = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/pkr.json`;

    // Data fatching... 
    (async function () {
        let receive = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${selected.toLowerCase()}.json`)
        let data = await receive.json()
        rate = (data[`${selected}`][`${selected2}`])

        let amountval = amount.value
        let finalRate = amountval * rate
        exchangeRate.innerText = Math.round(finalRate * 100000) / 100000;

        console.log(amountval);
    })()
}

let amount = document.querySelector("#amount")
amount.addEventListener('input', function () {
    // Replace any non-numeric characters
    amount.value = amount.value.replace(/\D/g, '');
});

btn.addEventListener("click", (evt) => {
    evt.preventDefault()
    currencyFinder(amount);


})
