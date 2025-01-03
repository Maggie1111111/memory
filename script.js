
//flippe kortene

    const kort = document.querySelectorAll('.memoryKort')

    let harFlippetKort = false
    let førsteKort, andreKort

    function flipKort() { 
        this.classList.add('flip')
    

    if (!harFlippetKort){
        harFlippetKort = true
        førsteKort = this
        return;
    }
 
    andreKort = this;
    harFlippetKort = false;
 
    checkForMatch();
  }
 
  function checkForMatch() {
    if (førsteKort.dataset.framework === andreKort.dataset.framework) {
      disableKort();
      return;
    }
 
    unflipKort();
  }
 
  function disableKort() {
    førsteKort.removeEventListener('click', flipKort);
    andreKort.removeEventListener('click', flipKort);
  }
 
  function unflipKort() {
    setTimeout(() => {
      førsteKort.classList.remove('flip');
      andreKort.classList.remove('flip');
    }, 900);
  }

    kort.forEach(kortet => kortet.addEventListener('click', flipKort))

    function shuffle() {
        kort.forEach(kortet => {
          let ramdomPos = Math.floor(Math.random() * 12)
          kortet.style.order = ramdomPos
        })
      }

      shuffle()

      document.getElementById('restart').addEventListener('click', () => {
        shuffle()

        kort.forEach(kortet => kortet.classList.remove('flip'))
    })



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
