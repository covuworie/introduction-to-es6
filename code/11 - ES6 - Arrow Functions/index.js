function add(...nums) {
    // arrow functions replace callbacks like these
    // let total = nums.reduce(function (x, y) {
    //     return x + y;
    // });
    let total = nums.reduce((x, y) => x + y);
    console.log(total);
}

add(4, 5, 7, 8, 12);