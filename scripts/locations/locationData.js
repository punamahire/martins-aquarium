const locationData = [
    {   
        name: "Pets Warehouse",
        address: `4601 Sunrise Hwy
                  Bohemia, NY 11716`,
        website: "www.petswarehouse.com/"
    },
    {
        name: "North Waco Tropical Fish",
        address: `1521 N 15th St
                  Waco, TX 76707`,
        website: "www.northwacotropicalfish.com/"
    },
    {
        name: "J & F Aquatic & Exotic",
        address: `506 Terry Pkwy Ste E
                  Terrytown, LA 70056`,
        website: "www.jandfaquaticsandexotics.com/"
    },
    {
        name: "Exotic Tropical Pet World LLC",
        address: `1716 W Hackberry Ave
                  McAllen, TX 78501`,
        website: "www.exotictropicalpetworld.com/"
    },
    {
        name: "Woof Meow – Dover",
        address: `825 Central Ave
                  Dover, NH 03820`,
        website: "woofmeownh.com/"
    }
]

export const getLocation = () => {
    return locationData
}