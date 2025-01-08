let spillSlutt = false


//flippe kortene

    const kort = document.querySelectorAll('.memoryKort')

    let harFlippetKort = false
    let låsBrett = false
    let førsteKort, andreKort

    function flipKort() { 

        if (låsBrett) return
        if (this === førsteKort) return;

        this.classList.add('flip')
    

    if (!harFlippetKort){
        harFlippetKort = true
        førsteKort = this
        return;
    }
 
    andreKort = this;
    harFlippetKort = false
 
    checkForMatch()
  }
 
  function checkForMatch() {
    if (førsteKort.dataset.framework === andreKort.dataset.framework) {
      disableKort()
      return;
    }
 
    unflipKort() 
  }
 
  function disableKort() {
    førsteKort.removeEventListener('click', flipKort);
    andreKort.removeEventListener('click', flipKort);
  }
 
  function unflipKort() {
    låsBrett = true

    setTimeout(function () {
      førsteKort.classList.remove('flip')
      andreKort.classList.remove('flip')

      låsBrett = false

    }, 900)
  }

    kort.forEach(kortet => kortet.addEventListener('click', flipKort))

    function shuffle() {
        kort.forEach(kortet => {
          let ramdomPos = Math.floor(Math.random() * 12)
          kortet.style.order = ramdomPos
        })
      }

      shuffle()
              //restart knapp
              function restart(){

                kort.forEach(kortet => {
                    kortet.classList.remove('flip')
                    kortet.addEventListener('click', flipKort)
                    klokke = 75
                })
        
        
                harFlippetKort = false
                førsteKort = null
                andreKort = null
        
                shuffle()
                }


//julemodus
const julemodeElement = document.getElementById('juleMode')

if (julemodeElement) {
    julemodeElement.addEventListener('click', function () {
        document.body.classList.toggle('jule-modus')
    })
}
