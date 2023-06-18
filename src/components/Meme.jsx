import React from "react"

export default function Meme() {
    /**
         * Challenge: 
         * As soon as the Meme component loads the first time,
         * make an API call to "https://api.imgflip.com/get_memes".
         * 
         * When the data comes in, save just the memes array part
         * of that data to the `allMemes` state
         * 
         * Think about if there are any dependencies that, if they
         * changed, you'd want to cause to re-run this function.
         * 
         * Hint: for now, don't try to use an async/await function.
         * Instead, use `.then()` blocks to resolve the promises
         * from using `fetch`. We'll learn why after this challenge.
         */

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    const [allMemes, setAllMemes] = React.useState()

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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


// useEffect ET fonction de CLEANUP 

    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

// AVEC ASYNC ET AWAIT ET SANS CLEANUP

    // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     getMemes()
    // }, [])

// AVEC .THEN ET AVEC CLEANUP

// React.useEffect(() => {
//     function watchWidth() { 
//         console.log("Setting up...")
//         setWindowWidth(window.innerWidth)
//     }
    
//     window.addEventListener("resize", watchWidth)
    
//     return () => {
//         console.log("Cleaning up...")
//         window.removeEventListener("resize", watchWidth)
//     }
// }, [])