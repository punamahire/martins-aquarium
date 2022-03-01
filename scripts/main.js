import { getFish } from "./fishes/fishData.js";
import { fish } from "./fishes/fish.js"
import { fishList } from "./fishes/fishList.js"
import { tipList } from "./tips/tipList.js";
import { locationList } from "./locations/locationList.js"

// get all the fishes and log them on terminal
const allTheFish = getFish()
for (const eachFish of allTheFish) {
    console.log(eachFish)

    // log html representation of fish on terminal
    const articleString = fish(eachFish)
    console.log(articleString)
}

// invoke fishList() -> getFish() -> fish() 
fishList()
tipList()   
locationList()
