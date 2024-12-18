
//flippe kortene

    const kort = document.querySelectorAll('.memoryKort')

    function flipKort() { 
        this.classList.toggle('flip')
    }

    kort.forEach(kortet => kortet.addEventListener('click', flipKort))



//klokke 
/*const klokkeElement = document.getElementById("klokke")

let timerValue = 5 * 60

function tikkKlokke() {
const minutter = Math.floor(timervalue / 60)
const sekunder = timerValue % 60

const minutterklokke = String(minutter).padStart(2, '0')
const sekunderklokke = String(sekunder).padStart(2, '0')

klokkeElement.textContent = `${minutterklokke}:${sekunderklokke}`

if (timerValue > 0){
    timerValue -= 1
}
    else{
        clearInterval(klokkeintervall)
        alert("tiden er ute!")
    }
}

tikkKlokke()
const klokkeintervall = setInterval(tikkKlokke, 1000)*/

const julemodeElement = document.getElementById('juleMode')

if (julemodeElement) {
    julemodeElement.addEventListener('click', function () {
        document.body.classList.toggle('jule-modus')
    })
}
