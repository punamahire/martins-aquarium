const fishCollection = [
    {
        species: "Yellow Tang",
        measurement: 15,
        location: "Honolulu, HI",
        saltwater: true,
        image: "bluefish.jpg",
        name: "Frodo",
        food: "insects"
    },
    {
        species: "Sword Fish",
        measurement: 2.5,
        location: "Florida",
        saltwater: true,
        image: "sf.jpg",
        name: "Sharpy",
        food: "insects"
    },
    {
        species: "Shark",
        measurement: 27,
        location: "Florida",
        saltwater: true,
        image: "shark.jpg",
        name: "Bruce",
        food: "Yellow Tang"
    },
    {
        species: "Clown Fish",
        measurement: 4.3,
        location: "California",
        saltwater: false,
        image: "clownfish.jpg",
        name: "Mike",
        food: "algae and insects"
    },
    {
        species: "Betta Fish",
        measurement: 25,
        location: "Thailand",
        saltwater: true,
        image: "bettafish.jpg",
        name: "Noodle",
        food: "bloodworm, brine shrimp"
    }
]

export const getFish = () => {
    return fishCollection
}

// filter the array to return fishes whose measurement is in multiple of 3
export const getMostHolyFish = () => {
    let holyFishes = []
    fishCollection.forEach(fish => {
        if (fish.measurement % 3 === 0) {
            holyFishes.push(fish)
        }
    });
    return holyFishes
}

// filter the array to return fishes whose measurement is in multiple of 5
export const getSoldierFish = () => {

    let soldierFishes = getFish().filter(fish => fish.measurement % 5 === 0 && fish.measurement % 3 !== 0)
    return soldierFishes
}

// fishes that don't have measurement in multiples of 3 or 5 are unworthy
export const getUnworthyFish = () => {
    let unworthyFishes = []
    fishCollection.forEach(fish => {          
        if (fish.measurement % 3 !== 0 && 
            fish.measurement % 5 !== 0) {
                unworthyFishes.push(fish)
            }
    });
    return unworthyFishes
}

