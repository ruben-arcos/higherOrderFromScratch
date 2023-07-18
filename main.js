//map()
    // .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.

let arr = [1, 2, 3, 4, 5];
const mapArr = arr.map((x) => x * 5);

console.log(mapArr);

//reduce()
    // .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.

const food = [
  {
    food: "pasta",
    price: 10.0,
  },
  {
    food: 'sushi',
    price: 14.99
  },
  {
    food: 'tacos',
    price: 5.00
  },
  {
    food: 'fish N chips',
    price: 20.00
  }
];

const totalPrice = food.reduce((acc, curr) => acc + curr.price, 0)

console.log(totalPrice);

//filter()
    // .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.

let countriesCloserToMe = [
    {
        country: 'Spain',
        distanceInMiles: 4937
    },
    {
        country: 'Argentina',
        distanceInMiles: 5357
    },
    {
        country: 'Japan',
        distanceInMiles: 6487
    },
    {
        country: 'Thailand',
        distanceInMiles: 8870
    },
    {
        country: 'Israel',
        distanceInMiles: 7009
    },
    {
        country: 'Peru',
        distanceInMiles: 3233
    },
    {
        country: 'Iceland',
        distanceInMiles: 3835
    },
    {
        country: 'Portugal',
        distanceInMiles: 3835
    }   
]

let closer = countriesCloserToMe.filter(country => country.distanceInMiles <= 5000)

console.log(closer)