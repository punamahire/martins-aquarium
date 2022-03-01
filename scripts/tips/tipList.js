/**
 *  tipList renders individual tip objects as HTML
 */
 import { getTip } from "./tipData.js"
 import { tip } from "./tip.js"
 
 export const tipList = () => {
 
     // Get a reference to the `<section class="tipList">` element
     const contentElement = document.querySelector(".tipList")
     const tips = getTip()
 
     // make sure we provided a valid html selector above
     if (contentElement) {
 
         // Declare a variable to hold on to the tip HTML representation
         let tipHTMLRepresentation = "";
 
         // loop over the array of tip
         for (const eachtip of tips) {
             console.log(eachtip);
             tipHTMLRepresentation += `${tip(eachtip)}`    
         }
         // Set the dom equal to the variable containing the tip html representations
         // Add to the existing HTML in the content element
         contentElement.innerHTML += `${tipHTMLRepresentation}`
         
         // return contentElement
     }
 }