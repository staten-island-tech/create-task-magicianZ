import './style.css'
let mode = 0
document.querySelector('#app').innerHTML = `


  <button id="easy"> Easy Mode </button>
  <button id="medium"> Medium Code </button>
  <button id="hard"> Hard Mode </button>
`

const URL = "https://random-word-api.herokuapp.com/word"


let Domselectors = {
  easymode:document.querySelector("#easy"),
  mediummode:document.querySelector("#medium"),
  hardmode:document.querySelector("#hard"),

}

Domselectors.easymode.addEventListener("click",function(){
  mode = easymode
})










async function something(URL){
  try{
    let fetching = await fetch(URL);
    let RealUrl = await fetching.json();
    let theWord = RealUrl.forEach((something)=> console.log(something))

  }
  catch{
    console.log('catched')
  }
}
something(URL)