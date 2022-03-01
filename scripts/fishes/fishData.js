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
        length: 25,
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