function alertbigger(){
    document.getElementById("userInput").style.fontSize = "24pt"
}
function radioControl(){
    if(document.getElementById("FancyShmancy").checked){
        document.getElementById("userInput").style.fontWeight = "bold"
        document.getElementById("userInput").style.color = "blue"
        document.getElementById("userInput").style.textDecoration = "underline"
    }else{
        document.getElementById("userInput").style.fontWeight = "normal"
        document.getElementById("userInput").style.color = "black"
        document.getElementById("userInput").style.textDecoration = "none"
    }
}
function addMoo() {
    userInput = document.getElementById("userInput").value//.value.toUpperCase
    userInput = userInput.toUpperCase()
    str = userInput.split(".")
    for (i = 0; i < str.length - 1; i++) {
        sentence = str[i]
        parts = sentence.split(" ")
        parts[parts.length - 1] += "-Moo"
        str[i] = parts.join(" ") 
    }
    document.getElementById("userInput").value = str.join(".")
}