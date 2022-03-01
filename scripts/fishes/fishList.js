/**
 *  FishList renders individual fish objects as HTML
 */
import { getFish } from "./fishData.js"
import { fish } from "./fish.js"

export const fishList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = getFish()

    // make sure we provided a valid html selector above
    if (contentElement) {

        // Declare a variable to hold on to the fish HTML representation
	    let fishHTMLRepresentation = "";

        // loop over the array of fish
        for (const eachFish of fishes) {
            console.log(eachFish);
            fishHTMLRepresentation += `${fish(eachFish)}`    
        }
        // Set the dom equal to the variable containing the fish html representations
        // Add to the existing HTML in the content element
        contentElement.innerHTML += `${fishHTMLRepresentation}`
        
        // return contentElement
    }
}