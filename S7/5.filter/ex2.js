const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const filteredAges = ages.filter (function (age) {
    return age % 2 === 0;
})

console.log(filteredAges);