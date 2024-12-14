
function JuleMode() {
    //bakgrunnsmønster
    document.body.style.backgroundColor = "red"
    document.body.style.backgroundImage = "linear-gradient(45deg, white 25%, transparent 25.5%, transparent 50%, white 50.5%, white 75%, transparent 75.5%, transparent)"
    document.body.style.backgroundSize = "50px 50px"

    //container farge
    document.getElementById("container").style.backgroundColor = "rgb(183, 4, 4)"

    //kort mønster
    const memoryKortelmt = document.getElementById("memoryKort")

    document.memoryKortelmt.style.backgroundColor = "red"
    document.memoryKortelmt.style.backgroundImage = "linear-gradient(45deg, white 25%, transparent 25.5%, transparent 50%, white 50.5%, white 75%, transparent 75.5%, transparent)"
    document.memoryKortelmt.style.backgroundSize = "50px 50px"
    document.memoryKortelmt.style.boxShadow = "rgb(123, 4, 4)"
}