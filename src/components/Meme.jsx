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
        console.log(randomNumber)
        const url = memesArray[randomNumber].url
        setMeme(
            prevState => ({ ...prevState, randomImage: url })
        )
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevState => ({
            ...prevState, [name]: value
        }))
    }

    return (
        <main>
            <div className="form" id="form1">
                <div className="input--wrapper">
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top text"
                        onChange={handleChange}
                        value={meme.topText}
                    />

                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom text"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                <button onClick={getMemeImage}>
                    Get a new meme image
                    <img src="./src/assets/frame.png" width="25px" height="25px" />
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
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
