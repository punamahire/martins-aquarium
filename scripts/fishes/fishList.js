/**
 *  FishList renders individual fish objects as HTML
 */
import { getFish, getMostHolyFish, getSoldierFish, getUnworthyFish } from "./fishData.js"
import { fish } from "./fish.js"

// export const fishList = () => {

//     const contentElement = document.querySelector(".fishList")
//     const fishes = getFish()

//     // make sure we provided a valid html selector above
//     if (contentElement) {

//         // Declare a variable to hold on to the fish HTML representation
// 	    let fishHTMLRepresentation = "";

//         for (const eachFish of fishes) {
//             console.log(eachFish);
//             fishHTMLRepresentation += `${fish(eachFish)}`    
//         }
//         // Set the dom equal to the variable containing the fish html representations
//         // Add to the existing HTML in the content element
//         contentElement.innerHTML += `${fishHTMLRepresentation}`
//     }
// }

export const fishList = () => {
    const contentElement = document.querySelector(".fishList")
    let fishHTMLRepresentation = "";

    if (contentElement) {
        const holyFishes = getMostHolyFish()
        const soldierFishes = getSoldierFish()
        const unworthyFishes = getUnworthyFish()

        for (let i = 0; i < holyFishes.length; i++) {
            fishHTMLRepresentation += `${fish(holyFishes[i])}`
        }

        for (let i = 0; i < soldierFishes.length; i++) {
            fishHTMLRepresentation += `${fish(soldierFishes[i])}`
        }

        for (let i = 0; i < unworthyFishes.length; i++) {
            fishHTMLRepresentation += `${fish(unworthyFishes[i])}`
        }
        contentElement.innerHTML += `${fishHTMLRepresentation}`
    }
}