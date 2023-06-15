/*const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://foodexpress:foodexpress@cluster0.neobh2u.mongodb.net/foodexpress?retryWrites=true&w=majority'
const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    if (err) console.log("...", err)
    else {
      console.log("connected");
      const fetched_data = await mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(async function (err, data) {
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        foodCategory.find({}).toArray(function (err, catData) {
          if (err) console.log(err);
          else {
            global.food_items = data;

            global.foodCategory = catData;
          }
        })
        //if(err) console.log(err);
        // else {
        // global.food_items=data;
        //}
      })
    }
  });
}
module.exports = mongoDB;*/
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://foodexpress:foodexpress@cluster0.neobh2u.mongodb.net/foodexpress?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    //console.log(global.food_items)
    global.foodCategory = catData;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = mongoDB;


/*const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://foodexpress:foodexpress@cluster0.neobh2u.mongodb.net/foodexpress?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');

    const fetchend_data = mongoose.connection.db.collection('food_items');
    fetchend_data.find({}).toArray(function (err, data) {
      if (err) {
        console.error(err);
      } else {
        global.food_items = data;
        console.log(global.food_items)

        const foodCategory = mongoose.connection.db.collection('foodCategory');
        foodCategory.find({}).toArray(function (err, catData) {
          if (err) {
            console.error(err);
          } else {
            global.foodCategory = catData;
          }
        });
      }
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
  console.log(global.food_items)
};

module.exports = mongoDB;

/*const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
const mongoURI = 'mongodb+srv://foodexpress:foodexpress@cluster0.neobh2u.mongodb.net/foodexpress?retryWrites=true&w=majority' // Customer change url to your db you created in atlas
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("Categories");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
            // listCollections({name: 'food_items'}).toArray(function (err, database) {
            // });
            //     module.exports.Collection = database;
            // });
        }
    })
};*/

/*const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://foodexpress:foodexpress@cluster0.neobh2u.mongodb.net/foodexpress?retryWrites=true&w=majority';

module.exports = async function () {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');
    
    const foodCollection = mongoose.connection.db.collection('food_items');
    const foodData = await foodCollection.find({}).toArray();
    
    const categoryCollection = mongoose.connection.db.collection('foodCategory');
    const categoryData = await categoryCollection.find({}).toArray();
    //console.log(foodData)
    //console.log(categoryData)
    return { foodData, categoryData };
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
};*/





