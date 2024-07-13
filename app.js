//https://api.quotable.io/random
console.log("connected")
const apiKey = "J1ImNseRK+1gm+FSIktZYA==OPEKI8mvjO8DBXZx"

const myButton = document.getElementById("btn1")

const myQuote = document.getElementById("myquote")
const myAuthor = document.getElementById("myauthor")
const copy = document.getElementById("copy")
const volume = document.getElementById("volume")

 const myContainer = document.querySelector(".container")
 const myLoader = document.querySelector(".loader")

 
 function first(){
    //container should be visible-->loader should not be visible
    myContainer.hidden = false
    myLoader.hidden = true
 }
 function second(){
    //loader should be visible-->container should not be visible
    myLoader.hidden =false
    myContainer.hidden = true
}
first()
 myButton.addEventListener("click",async function(){
    //logic where container should be hidden , loader should be visible
    second()
    const response = await fetch("https://api.api-ninjas.com/v1/quotes",{
        method: "GET",
        headers : {
            "X-Api-Key": apiKey
        }
    })
    
 

    let quotes = await response.json()

    myQuote.innerText = quotes[0].quote
    myAuthor.innerText = quotes[0].author
    first()
})

    //logic to copy quote
    copy.addEventListener("click",function(){
        navigator.clipboard.writeText(myQuote.innerText)
    } )
 //logic to read out quote
volume.addEventListener("click",function(){
 let speech = new SpeechSynthesisUtterance(myQuote.innerText)
 speechSynthesis.speak(speech)
})


//container should be hidden - loader should not be visible
//loader should be hidden - container should not be visible