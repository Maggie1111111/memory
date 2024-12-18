
//flippe kortene
const kort = document.querySelectorAll('.memoryKort');

function flipKort() { this.classList.toggle('flip'); }

kort.forEach(kortet => kortet.addEventListener('click', flipKort));

//klokke const klokkeElement = document.getElementById("klokke")

let klokke = 300 
let klokkeref = null

function tikkKlokke(){ klokke -= 1 
    klokkeElement.innerHTML = klokke + "sek" 
    if (klokke <= 0){
    }
    if (!klokkeref){ klokkeref = setInterval (tikkKlokke, 1000) } }

    document.addEventListener('DOMContentLoaded', () => {
        const julemodeElement = document.getElementById('juleMode')

        if (julemodeElement) {
            julemodeElement.addEventListener('click', () => {
                document.body.classList.toggle('jule-modus')
            });
        }
    }); 