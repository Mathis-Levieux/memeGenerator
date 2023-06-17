import memesData from "../memesData.js"
import React from "react"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(
            prevState => ({ ...prevState, randomImage: url })
        )
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
            <img className="memeImage" src={meme.randomImage} />
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

// SPREAD OPERATOR POUR AJOUTER DES CHOSES DANS UN TABLEAU

// function addItem() {
//     setThingsArray(prevThingsArray => {
//         return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
//     })
// }

// SPREAD OPERATOR + TERNAIRE POUR MODIFIER LA PROPRIETE D'UN OBJET

// function toggleFavorite() {
//     setContact(prevContact => ({ ...prevContact, isFavorite: !prevContact.isFavorite }))
// }

// Mettre à jour l'état d'un objet bien précis à partir de son id 
// Ne pas oublier de passer l'id dans le composant 
/* <Box
    key={square.id}
    on={square.on}
    toggle={() => toggle(square.id)}
/> */


// function toggle(id) {
//     setSquares(
//         prevSquares => {
//             return prevSquares.map(square => {
//                 return square.id === id ? { ...square, on: !square.on } : square
//             })
//         })
// }
