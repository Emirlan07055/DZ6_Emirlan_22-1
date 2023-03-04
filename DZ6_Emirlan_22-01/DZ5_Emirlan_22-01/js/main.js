const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const euro = document.querySelector("#euro")

const convert = (elem, target, areTrue) => {
    elem.addEventListener("input", ()=>{
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                areTrue
                    ?target.value = (elem.value / data.euro).toFixed(2)
                    ?target.value = (elem.value / data.usd).toFixed(2)
                    :target.value = (elem.value * data.euro).toFixed(2)
                    :target.value = (elem.value * data.usd).toFixed(2)
                elem.value === "" ? (target.value = "") : null
                elem.value === "" ? (areTrue.value = "") : null
            })
    })
}

convert(som, usd, 57)
convert(usd, som, 57)
convert(euro, som, 57)
convert(som, euro, 57)
convert(usd, euro, 57)
convert(euro, usd,57)
convert(som, usd,  euro, "")

fetch('server.php')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    .finally((red) => console.log(red))