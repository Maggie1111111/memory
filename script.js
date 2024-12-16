
function JuleMode() {
    //bakgrunnsmønster
    document.body.style.backgroundColor = "red"
    document.body.style.backgroundImage = "linear-gradient(45deg, white 25%, transparent 25.5%, transparent 50%, white 50.5%, white 75%, transparent 75.5%, transparent)"
    document.body.style.backgroundSize = "50px 50px"

    //container farge
    document.getElementById("container").style.backgroundColor = "rgb(183, 4, 4)"

    //kort mønster
    

    document.getElementById("memoryKort").style.backgroundColor = "red"
    document.getElementById("memoryKort").style.backgroundImage = "linear-gradient(45deg, white 25%, transparent 25.5%, transparent 50%, white 50.5%, white 75%, transparent 75.5%, transparent)"
    document.getElementById("memoryKort").style.backgroundSize = "50px 50px"
    document.getElementById("memoryKort").style.boxShadow = "rgb(123, 4, 4)"

    //nav, fungerer ikke?
    document.getElementsById("myNav").style.backgroundColor = "rgb(183, 4, 4)"
}