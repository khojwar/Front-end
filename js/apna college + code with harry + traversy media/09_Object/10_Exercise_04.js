function matchHouses(house) {
    if (house <= 0) {
        return 0
    } else {
        return house * 6 - house + 1
    }   
}

console.log(matchHouses(0));
console.log(matchHouses(4));
console.log(matchHouses(87));