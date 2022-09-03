const button= document.querySelector("#btn")
const jokes= document.querySelector("ul")
const getdadjoke= async ()=> {
    const config={headers:{accept:"application/json"}}
    const req=await axios.get("https://icanhazdadjoke.com/" ,config )
    console.log(req.data.joke)
    const newLI=document.createElement("li")
    newLI.append(req.data.joke)
    jokes.append(newLI)

}
button.addEventListener("click", getdadjoke)