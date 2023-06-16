import memesData from "../memesData.js"
import React from "react"

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(url)
    }
    return (
        <main>
            <div className="form" id="form1">
                <div className="input--wrapper">
                    <input
                        type="text"
                        id="firstinput"
                        name="firstinput"
                        placeholder="Top text" />

                    <input
                        type="text"
                        id="secondinput"
                        name="secondinput"
                        placeholder="Bottom text" />
                </div>
                <button onClick={getMemeImage}>
                    Get a new meme image
                    <img src="./src/assets/frame.png" width="25px" height="25px" />
                </button>
            </div>
            <img className="memeImage" src={memeImage} />
        </main>
    )
}




// useState, déstructuration de la variable et bonne pratique d'utilisation pour les fonctions.
// On utilise prevCount avec une fonction fléchée pour s'assurer du fonctionnement de notre fonction
// const [count, setCount] = React.useState(100)

// function add() {
//     setCount(prevCount => prevCount + 1)
// }
// function subtract() {
//     setCount(prevCount => prevCount - 1)
// }

// TERNAIRE
// const isGoingOut = true
// let answer = isGoingOut === true ? "Yes" : "No"
// let answer = isGoingOut ? "Yes" : "No"
// if (isGoingOut === true) {
//     answer = "Yes"
// } else {
//     answer = "No"
// }

// const [isGoingOut, setIsGoingOut] = React.useState(false)
// function handleClick() {
//     setIsGoingOut(prevValue => prevValue ? false : true)
// }

// ENCORE PLUS BEAU

// function handleClick() {
//     setIsGoingOut(prevValue => !prevValue)
// }