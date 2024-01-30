import './style.css'
let answer = []
let theWord1 = ""
document.querySelector('#app').innerHTML = `


  <button id="easy"> Easy Mode </button>
  <button id="medium"> Medium Mode </button>
  <button id="hard"> Hard Mode </button>
  <form action=""id="forum">
    <input type="text" id="input">
    <label for="text">What letter are you guessing?</label>
    </form>
    <button id="theirguessbutton"> Click to submit your guess.. </button>

  <div id="box"></div>
`

let URL = `https://random-word-api.herokuapp.com/word`


let Domselectors = {
  easymode:document.querySelector("#easy"),
  mediummode:document.querySelector("#medium"),
  hardmode:document.querySelector("#hard"),
  theirguess:document.querySelector("#input"),
  theirguessbutton:document.querySelector("#theirguessbutton"),

}















Domselectors.easymode.addEventListener("click",async function(){
  URL =  `https://random-word-api.herokuapp.com/word?length=5`
  let fetching = await fetch(URL);
  let RealUrl = await fetching.json();
  let theWord = RealUrl.forEach((something)=> theWord1 = something)
  console.log(theWord1)
  for (let i = 0; i < theWord1.length; i++){
    answer[i] = "_"
  }

})

Domselectors.mediummode.addEventListener("click", async function(){
  URL = `https://random-word-api.herokuapp.com/word?length=7`
  let fetching = await fetch(URL);
  let RealUrl = await fetching.json();
  RealUrl.forEach((something)=>theWord1 = something)
  console.log(theWord1)
})

Domselectors.hardmode.addEventListener("click",async function(){
  URL = `https://random-word-api.herokuapp.com/word?length=15`
  let fetching = await fetch(URL);
  let RealUrl = await fetching.json();
  RealUrl.forEach((something)=>theWord1 = something)
  console.log(theWord1)
})

Domselectors.theirguessbutton.addEventListener("click",async function(){


  for (let i = 0; i <theWord1.length; i++){
    if (Domselectors.theirguess.value[0]===theWord1[i]){
      answer[i] = Domselectors.theirguess.value[0]
    }
  }
  if(!answer.includes("_")){
    console.log("u win")
  }
  console.log(answer)
  /* for (let i=0; i<theWord1.length; i++){
    if (Domselectors.theirguess.value[0]===theWord1[i]){
      console.log(Domselectors.theirguess.value[0],theWord1[i])
    }

  } */
  


  }
)







