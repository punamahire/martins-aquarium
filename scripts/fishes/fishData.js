const fishCollection = [
    {
        species: "Yellow Tang",
        length: 15,
        location: "Honolulu, HI",
        saltwater: true,
        image: "bluefish.jpg",
        name: "Frodo",
        food: "insects"
    },
    {
        species: "Sword Fish",
        length: 2.5,
        location: "Florida",
        saltwater: true,
        image: "sf.jpg",
        name: "Sharpy",
        food: "insects"
    },
    {
        species: "Shark",
        length: 27,
        location: "Florida",
        saltwater: true,
        image: "shark.jpg",
        name: "Bruce",
        food: "Yellow Tang"
    },
    {
        species: "Clown Fish",
        length: 4.3,
        location: "California",
        saltwater: false,
        image: "clownfish.jpg",
        name: "Mike",
        food: "algae and insects"
    },
    {
        species: "Betta Fish",
        length: 2.8,
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

// filter the array to return fishes whose length is in multiple of 3
export const getMostHolyFish = () => {
    let holyFishes = []
    fishCollection.forEach(fish => {
        if (fish.length % 3 === 0) {
            holyFishes.push(fish)
        }
    });
    return holyFishes
}

// filter the array to return fishes whose length is in multiple of 5
export const getSoldierFish = () => {
    let soldierFishes = []
    fishCollection.forEach(fish => {
        if (fish.length % 5 === 0) {
            soldierFishes.push(fish)
        }
    });
    return soldierFishes
}

// fishes that don't have length in multiples of 3 or 5 are unworthy
export const getUnworthyFish = () => {
    let unworthyFishes = []
    fishCollection.forEach(fish => {
        if (fish.length % 3 !== 0 && 
            fish.length % 5 !== 0) {
                unworthyFishes.push(fish)
            }
    });
    return unworthyFishes
}