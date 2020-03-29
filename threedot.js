
//Two Array together show output
const ages = [12, 25, 26, 12];
const ages2 = [25, 27, 24, 21];
const ages3 = [32, 23, 20, 12];
//concat allAges = ages.concat(ages2);
//const allAges = ages.concat(ages2).concat(ages3);
//const allAges = ages.concat(ages2).concat([53]).concat(ages3);
const allAges = [...ages, ...ages2, 5, ...ages3];
//console.log(allAges);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250]
//const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);

