function addressMaker(city, state) {
    // same as:
    //const newAddress = { city: city, state: state };
    const newAddress = { city, state };

    console.log(newAddress);
}

addressMaker('Austin', 'Texas');