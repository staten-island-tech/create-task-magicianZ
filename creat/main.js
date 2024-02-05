import './style.css'
let answer = []
let theWord1 = ""
let count = 0
document.querySelector('#app').innerHTML = `

  <h1> hangman </h1>
  <button id="easy"> Easy Mode </button>
  <button id="medium"> Medium Mode </button>
  <button id="hard"> Hard Mode </button>
  <form action=""id="forum">
    <input type="text" id="input">
    <label for="text">What letter are you guessing?</label>
    </form>
    <button id="theirguessbutton"> Click to submit your guess.. </button>

  <div id="box"></div>
  <div id="box1"></div>
`
let URL = `https://random-word-api.herokuapp.com/word`
let Domselectors = {
  easymode:document.querySelector("#easy"),
  mediummode:document.querySelector("#medium"),
  hardmode:document.querySelector("#hard"),
  theirguess:document.querySelector("#input"),
  theirguessbutton:document.querySelector("#theirguessbutton"),
  box:document.querySelector("#box"),
  box1:document.querySelector("#box1")

}
async function difficulty(difficulty1){
  count = 0
  answer.pop()
  URL =  `https://random-word-api.herokuapp.com/word?length=${difficulty1}`
  let fetching = await fetch(URL);
  let RealUrl = await fetching.json();
  let theWord = RealUrl.forEach((something)=> theWord1 = something)
  console.log(theWord1)
  for (let i = 0; i < theWord1.length; i++){
    answer[i] = "_"
  }
}
Domselectors.easymode.addEventListener("click",async function(){
  difficulty(5)

})
Domselectors.mediummode.addEventListener("click", async function(){
  difficulty(8)
 
})
Domselectors.hardmode.addEventListener("click",async function(){
  difficulty(15)
})
Domselectors.theirguessbutton.addEventListener("click",async function(){
  count++
  for (let i = 0; i <theWord1.length; i++){
    if (Domselectors.theirguess.value[0]===theWord1[i]){
      answer[i] = Domselectors.theirguess.value[0]
    }
  }
  if(!answer.includes("_")){
    Domselectors.box1.innerHTML=`u win and you took ${count} tries`
    console.log("u win")
  }
  console.log(theWord1)
  Domselectors.box.innerHTML = answer
  }
)







