/**
 *  locationList renders individual location objects as HTML
 */
 import { getLocation } from "./locationData.js"
 import { location } from "./location.js"
 
 export const locationList = () => {
 
     // Get a reference to the `<section class="locationList">` element
     const contentElement = document.querySelector(".locationList")
     const locations = getLocation()
 
     // make sure we provided a valid html selector above
     if (contentElement) {
 
         // Declare a variable to hold on to the location HTML representation
         let locationHTMLRepresentation = "";
 
         // loop over the array of location
         locations.forEach(eachLocation => {
            console.log(eachLocation);
             locationHTMLRepresentation += `${location(eachLocation)}`
         });
        
         // Set the dom equal to the variable containing the location html representations
         // Add to the existing HTML in the content element
         contentElement.innerHTML += `${locationHTMLRepresentation}`
         
         // return contentElement
     }
 }