//use HotelRes

db.createCollection("Restaurant");

db.Restaurant.insertMany([
  {
    address: {
      building: "1007",
      coord: [-73.856077, 40.848447],
      street: "jaynagar",
      zipcode: "10462",
    },
    cuisine: "Bakery",
    grades: [
      { date: { $date: 1393804800000 }, grade: "A", score: 2 },
      { date: { $date: 1378857600000 }, grade: "A", score: 6 },
      { date: { $date: 1358985600000 }, grade: "A", score: 10 },
      { date: { $date: 1322006400000 }, grade: "A", score: 9 },
      { date: { $date: 1299715200000 }, grade: "B", score: 14 },
    ],
    name: "Morris Bake Shop",
    restaurant_id: "30075445",
  },
  {
    address: {
      building: "1009",
      coord: [-64.856077, 38.848447],
      street: "gandinagar",
      zipcode: "400001",
    },
    cuisine: "chinese",
    grades: [
      { date: { $date: 1393154800000 }, grade: "A", score: 81 },
      { date: { $date: 1378357600000 }, grade: "A", score: 90 },
      { date: { $date: 1353655600000 }, grade: "A", score: 90 },
      { date: { $date: 1322546400000 }, grade: "A", score: 95 },
      { date: { $date: 1236545200000 }, grade: "B", score: 85 },
    ],
    name: "Cafeteria yo china",
    restaurant_id: "30075451",
  },
  {
    address: {
      building: "1010",
      coord: [-65.856077, 41.848447],
      street: "shivaji nagar",
      zipcode: "400002",
    },
    cuisine: "Pizza",
    grades: [
      { date: { $date: 1564144800000 }, grade: "A", score: 92 },
      { date: { $date: 1228357600000 }, grade: "A", score: 96 },
      { date: { $date: 1543655600000 }, grade: "A", score: 100 },
      { date: { $date: 1323546400000 }, grade: "A", score: 91 },
      { date: { $date: 1235645200000 }, grade: "B", score: 94 },
    ],
    name: "Cafeteria Dominos",
    restaurant_id: "30075455",
  },
  {
    address: {
      building: "1009",
      coord: [-64.856077, 38.848447],
      street: "GTB nagar Delhi",
      zipcode: "400024",
    },
    cuisine: "Burger",
    grades: [
      { date: { $date: 1393254800000 }, grade: "A", score: 22 },
      { date: { $date: 1373217600000 }, grade: "A", score: 62 },
      { date: { $date: 1352145600000 }, grade: "A", score: 70 },
      { date: { $date: 1323216400000 }, grade: "A", score: 92 },
      { date: { $date: 1236325200000 }, grade: "B", score: 94 },
    ],
    name: "Cafeteria macD",
    restaurant_id: "30075456",
  },
  {
    address: {
      building: "1008",
      coord: [-102.856077, 38.848447],
      street: "Gachibowli Hyderabad",
      zipcode: "500032",
    },
    cuisine: "Biryani",
    grades: [
      { date: { $date: 1393136510000 }, grade: "A", score: 28 },
      { date: { $date: 1378331200000 }, grade: "A", score: 68 },
      { date: { $date: 1353653220000 }, grade: "A", score: 18 },
      { date: { $date: 1322532160000 }, grade: "A", score: 98 },
      { date: { $date: 1236543210000 }, grade: "B", score: 99 },
    ],
    name: "Hyderabad Biryani",
    restaurant_id: "30075461",
  },
  {
    address: {
      building: "23/12",
      coord: [-75.856077, 38.848447],
      street: "French Colony Pondicherry",
      zipcode: "521991",
    },
    cuisine: "Latte",
    grades: [
      { date: { $date: 1393254800000 }, grade: "A", score: 51 },
      { date: { $date: 1373657600000 }, grade: "A", score: 61 },
      { date: { $date: 1351455600000 }, grade: "A", score: 71 },
      { date: { $date: 1325646400000 }, grade: "A", score: 91 },
      { date: { $date: 1236445200000 }, grade: "B", score: 81 },
    ],
    name: "La Cafe",
    restaurant_id: "30075463",
  },
  {
    address: {
      building: "108",
      coord: [-64.856077, 138.848447],
      street: "MIG Hanuman nagar Patna",
      zipcode: "800020",
    },
    cuisine: "South Indian",
    grades: [
      { date: { $date: 1393124800000 }, grade: "A", score: 25 },
      { date: { $date: 1378237600000 }, grade: "A", score: 65 },
      { date: { $date: 1353345600000 }, grade: "A", score: 10 },
      { date: { $date: 1322456400000 }, grade: "A", score: 95 },
      { date: { $date: 1236565200000 }, grade: "B", score: 94 },
    ],
    name: "Dosa Station",
    restaurant_id: "30075465",
  },
  {
    address: {
      building: "111",
      coord: [-164.856077, 18.848447],
      street: "DackBunglow Patna",
      zipcode: "800001",
    },
    cuisine: "Italian",
    grades: [
      { date: { $date: 1123154800000 }, grade: "A", score: 92 },
      { date: { $date: 1238357600000 }, grade: "A", score: 96 },
      { date: { $date: 1453655600000 }, grade: "A", score: 100 },
      { date: { $date: 1562546400000 }, grade: "A", score: 97 },
      { date: { $date: 1786545200000 }, grade: "B", score: 99 },
    ],
    name: "Maurya Lok",
    restaurant_id: "30075471",
  },
  {
    address: {
      building: "2001",
      coord: [-114.856077, 38.848447],
      street: "Assi Ghat Varanasi",
      zipcode: "600080",
    },
    cuisine: "Street Food",
    grades: [
      { date: { $date: 1345654800000 }, grade: "A", score: 82 },
      { date: { $date: 1375647600000 }, grade: "A", score: 86 },
      { date: { $date: 1332155600000 }, grade: "A", score: 90 },
      { date: { $date: 1355454400000 }, grade: "A", score: 92 },
      { date: { $date: 1231212200000 }, grade: "B", score: 94 },
    ],
    name: "Samosa Chat",
    restaurant_id: "30075472",
  },
  {
    address: {
      building: "901",
      coord: [-111.856077, 318.848447],
      street: "Howrah Kolcuta",
      zipcode: "445566",
    },
    cuisine: "chinese",
    grades: [
      { date: { $date: 1312354800000 }, grade: "A", score: 82 },
      { date: { $date: 1345657600000 }, grade: "A", score: 56 },
      { date: { $date: 1378955600000 }, grade: "A", score: 70 },
      { date: { $date: 1123546400000 }, grade: "A", score: 91 },
      { date: { $date: 1456545200000 }, grade: "B", score: 64 },
    ],
    name: "Yo China",
    restaurant_id: "30075481",
  },
  {
    address: {
      building: "1111",
      coord: [-173.856077, 410.848447],
      street: "Jungle Road Mussorrie",
      zipcode: "104620",
    },
    cuisine: "Bakery",
    grades: [
      { date: { $date: 1393804800000 }, grade: "A", score: 29 },
      { date: { $date: 1378857600000 }, grade: "A", score: 69 },
      { date: { $date: 1358985600000 }, grade: "A", score: 19 },
      { date: { $date: 1322006400000 }, grade: "A", score: 99 },
      { date: { $date: 1299715200000 }, grade: "B", score: 79 },
    ],
    name: "Natin Bake Shop",
    restaurant_id: "30075545",
  },
  {
    address: {
      building: "222",
      coord: [-641.856077, 381.848447],
      street: "Kalkaji Delhi",
      zipcode: "400020",
    },
    cuisine: "chinese",
    grades: [
      { date: { $date: 1393154800000 }, grade: "A", score: 81 },
      { date: { $date: 1378357600000 }, grade: "A", score: 90 },
      { date: { $date: 1353655600000 }, grade: "A", score: 90 },
      { date: { $date: 1322546400000 }, grade: "A", score: 95 },
      { date: { $date: 1236545200000 }, grade: "B", score: 85 },
    ],
    name: "China China",
    restaurant_id: "30075551",
  },
  {
    address: {
      building: "10/10",
      coord: [-165.856077, 141.848447],
      street: "Raja Bazar Patna",
      zipcode: "800004",
    },
    cuisine: "Pizza",
    grades: [
      { date: { $date: 1564144800000 }, grade: "A", score: 92 },
      { date: { $date: 1228357600000 }, grade: "A", score: 96 },
      { date: { $date: 1543655600000 }, grade: "A", score: 100 },
      { date: { $date: 1323546400000 }, grade: "A", score: 91 },
      { date: { $date: 1235645200000 }, grade: "B", score: 94 },
    ],
    name: "Dominos",
    restaurant_id: "30075555",
  },
  {
    address: {
      building: "10/09",
      coord: [-164.856077, 318.848447],
      street: "GTB Bangalore",
      zipcode: "600001",
    },
    cuisine: "Burger",
    grades: [
      { date: { $date: 1393254800000 }, grade: "A", score: 22 },
      { date: { $date: 1373217600000 }, grade: "A", score: 62 },
      { date: { $date: 1352145600000 }, grade: "A", score: 70 },
      { date: { $date: 1323216400000 }, grade: "A", score: 92 },
      { date: { $date: 1236325200000 }, grade: "B", score: 94 },
    ],
    name: "MacDonald's",
    restaurant_id: "30075556",
  },
  {
    address: {
      building: "10/08",
      coord: [-12.856077, 38.848447],
      street: "Shamsabad Hyderabad",
      zipcode: "500030",
    },
    cuisine: "Biryani",
    grades: [
      { date: { $date: 1393136510000 }, grade: "A", score: 28 },
      { date: { $date: 1378331200000 }, grade: "A", score: 68 },
      { date: { $date: 1353653220000 }, grade: "A", score: 18 },
      { date: { $date: 1322532160000 }, grade: "A", score: 98 },
      { date: { $date: 1236543210000 }, grade: "B", score: 99 },
    ],
    name: "Behrouj Biryani",
    restaurant_id: "30075561",
  },
  {
    address: {
      building: "2312",
      coord: [-125.856077, 31.848447],
      street: "Rue Pondicherry",
      zipcode: "521991",
    },
    cuisine: "Paratha",
    grades: [
      { date: { $date: 1393254800000 }, grade: "A", score: 51 },
      { date: { $date: 1373657600000 }, grade: "A", score: 61 },
      { date: { $date: 1351455600000 }, grade: "A", score: 71 },
      { date: { $date: 1325646400000 }, grade: "A", score: 91 },
      { date: { $date: 1236445200000 }, grade: "B", score: 81 },
    ],
    name: "Just Paratha",
    restaurant_id: "30075563",
  },
  {
    address: {
      building: "10/8",
      coord: [-54.856077, 38.848447],
      street: "Navi Mumbai",
      zipcode: "500001",
    },
    cuisine: "Vada Pau",
    grades: [
      { date: { $date: 1393124800000 }, grade: "A", score: 25 },
      { date: { $date: 1378237600000 }, grade: "A", score: 65 },
      { date: { $date: 1353345600000 }, grade: "A", score: 10 },
      { date: { $date: 1322456400000 }, grade: "A", score: 95 },
      { date: { $date: 1236565200000 }, grade: "B", score: 94 },
    ],
    name: "Vada Pau wala",
    restaurant_id: "30075565",
  },
  {
    address: {
      building: "1/11",
      coord: [-16.856077, 18.848447],
      street: "Paonta Sahib Amritsar",
      zipcode: "800101",
    },
    cuisine: "Amritsari Chhole",
    grades: [
      { date: { $date: 1123154800000 }, grade: "A", score: 92 },
      { date: { $date: 1238357600000 }, grade: "A", score: 96 },
      { date: { $date: 1453655600000 }, grade: "A", score: 100 },
      { date: { $date: 1562546400000 }, grade: "A", score: 97 },
      { date: { $date: 1786545200000 }, grade: "B", score: 99 },
    ],
    name: "Amritsar kulchawala",
    restaurant_id: "30075571",
  },
  {
    address: {
      building: "200/1",
      coord: [-74.856077, 38.848447],
      street: "Kanpur",
      zipcode: "600080",
    },
    cuisine: "Pan Masala",
    grades: [
      { date: { $date: 1345654800000 }, grade: "A", score: 82 },
      { date: { $date: 1375647600000 }, grade: "A", score: 86 },
      { date: { $date: 1332155600000 }, grade: "A", score: 90 },
      { date: { $date: 1355454400000 }, grade: "A", score: 92 },
      { date: { $date: 1231212200000 }, grade: "B", score: 94 },
    ],
    name: "Murari Pan Bhandar",
    restaurant_id: "30075572",
  },
  {
    address: {
      building: "124",
      coord: [-51.856077, 38.848447],
      street: "Trichy",
      zipcode: "445006",
    },
    cuisine: "Dosa",
    grades: [
      { date: { $date: 1312354800000 }, grade: "A", score: 2 },
      { date: { $date: 1345657600000 }, grade: "A", score: 6 },
      { date: { $date: 1378955600000 }, grade: "A", score: 10 },
      { date: { $date: 1123546400000 }, grade: "A", score: 9 },
      { date: { $date: 1456545200000 }, grade: "B", score: 14 },
    ],
    name: "Banana Leaf",
    restaurant_id: "30075581",
  },
]);

//1) Write a MongoDB query to display the fields restaurant_id, name, and zip code but exclude the field _id for all the documents in the collection restaurant.



db.Restaurant.find({}, { _id: 0, restaurant_id: 1, name: 1, "address.zipcode": 1 })


//2) Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.

db.Restaurant.find().sort({ name: 1 }).pretty();


//3) Write a MongoDB query to display the first 5 restaurant in ascending order of name field.

db.Restaurant.find().sort({ name: 1 }).limit(5)


//4) Write a MongoDB query to display the next 5 restaurants after skipping first 5.

db.Restaurant.find().skip(5).limit(5);


//5) Write a MongoDB query to find the restaurants who achieved a score more than 90.


db.Restaurant.find({ "grades.score": { $gt: 90 } })


//6) Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.


db.Restaurant.find({"grades.score": {$gt: 80,$lt: 100}})
  

//7) Write a MongoDB query to find the restaurant name, longitude and latitude and cuisine for those restaurants which contain 'Caf' as first three letters of its name.



db.Restaurant.find(
    { name: { $regex: /^Caf/i } },
    { name: 1, "address.coord": 1, cuisine: 1, _id: 0 }
  )
  

//8) Write a MongoDb query to update grade B to A in all documents.

db.Restaurant.updateMany(
  { "grades.grade": "B" },
  { $set: { "grades.$.grade": "A" } }
);
