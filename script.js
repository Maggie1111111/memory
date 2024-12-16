
function JuleMode() {
    //bakgrunnsmønster
    document.body.style.backgroundColor = "red"
    document.body.style.backgroundImage = "linear-gradient(45deg, white 25%, transparent 25.5%, transparent 50%, white 50.5%, white 75%, transparent 75.5%, transparent)"
    document.body.style.backgroundSize = "50px 50px"

    //container farge
    document.getElementById("container").style.backgroundColor = "rgb(183, 4, 4)"

    //kort mønster


    //queryselector velger en selector slik som nav
    document.querySelector('nav').style.backgroundColor = "rgb(183, 4, 4)"

    //home knapp
    const hjemknappelmt = document.getElementById('hjemknapp')

    hjemknappelmt.style.color = "red"

    hjemknappelmt.addEventListener('mouseover', () => {
        hjemknappelmt.style.backgroundColor = 'red'
        hjemknappelmt.style.color = 'white'
      })

      hjemknappelmt.addEventListener('mouseout', () => {
        hjemknappelmt.style.backgroundColor = 'white'
        hjemknappelmt.style.color = "red"
      })

      //prøv på nytt knapp
      const prøvpånyttknapp = document.getElementById('restart')

      prøvpånyttknapp.style.color = "red"

      prøvpånyttknapp.addEventListener('mouseover', () => {
        prøvpånyttknapp.style.backgroundColor = 'red'
        prøvpånyttknapp.style.color = 'white'
      })

      prøvpånyttknapp.addEventListener('mouseout', () => {
        prøvpånyttknapp.style.backgroundColor = 'white'
        prøvpånyttknapp.style.color = "red"
      })
}

 //flippe kortene

 const kort = document.querySelectorAll('.memoryKort');

 function flipKort() {
 this.classList.toggle('flip');
 }

 kort.forEach(kortet => kortet.addEventListener('click', flipKort));