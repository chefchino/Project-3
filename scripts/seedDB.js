const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/productlist"
);

const productSeed = [
    
        {
            "id":1,
            "title":"Fire TV Stick 4K streaming device",
            "image":"https://images-na.ssl-images-amazon.com/images/I/61mAA2BB-FL._AC_SL1000_.jpg",
            "category":"Electronics",
            "rating":"4.5/5",
            "price":34.99,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":2,
            "title":"Apple AirPods with Charging Case",
            "image":"https://images-na.ssl-images-amazon.com/images/I/41g4Idd4y9L._AC_SL1024_.jpg",
            "category":"Electronics",
            "rating":"4.5/5",
            "price":128.99,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":3,
            "title":"Toshiba 32LF221U19 32-inch 720p HD Smart LED TV - Fire TV Edition",
            "image":"https://images-na.ssl-images-amazon.com/images/I/41Xq5BKakFL._AC_.jpg",
            "category":"Electronics",
            "rating":"4/5",
            "price":129.99,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":4,
            "title":"Bose QuietComfort 35 II Wireless Bluetooth Headphones",
            "image":"https://images-na.ssl-images-amazon.com/images/I/71-UPisBswL._AC_SL1500_.jpg",
            "category":"Electronics",
            "rating":"5/5",
            "price":220.01,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":5,
            "title":"12x42 Powerful Binoculars with Clear Weak Light Vision",
            "image":"https://images-na.ssl-images-amazon.com/images/I/61UTdRzKB-L._AC_SL1196_.jpg",
            "category":"Electronics",
            "rating":"4/5",
            "price":33.88,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":6,
            "title":"Victure 1080P FHD Pet Camera with WiFi",
            "image":"https://images-na.ssl-images-amazon.com/images/I/61ykeQBzDJL._AC_SL1001_.jpg",
            "category":"Electronics",
            "rating":"5/5",
            "price":25.49,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":7,
            "title":"Power Strip with USB",
            "image":"https://images-na.ssl-images-amazon.com/images/I/61jiA0r71ZL._AC_SL1500_.jpg",
            "category":"Electronics",
            "rating":"4/5",
            "price":19.99,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":8,
            "title":"Projector, YABER Native 1920x 1080P Projector 6800",
            "image":"https://images-na.ssl-images-amazon.com/images/I/71K1%2Bn-9rdL._AC_SL1500_.jpg",
            "category":"Electronics",
            "rating":"4/5",
            "price":237.99,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":9,
            "title":"Reolink 4MP 8CH PoE Video Surveillance System",
            "image":"https://images-na.ssl-images-amazon.com/images/I/51wUN9oD8OL._AC_SL1000_.jpg",
            "category":"Electronics",
            "rating":"4/5",
            "price":297.49,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":10,
            "title":"Pritom 7 inch Kids Tablet",
            "image":"https://images-na.ssl-images-amazon.com/images/I/61Jpa%2BFATbL._AC_SL1100_.jpg",
            "category":"Electronics",
            "rating":"5/5",
            "price":46.74,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":11,
            "title":"Anker USB C Hub Adapter, 5-in-1 USB C Adapter, with 4K USB C to HDMI",
            "image":"https://images-na.ssl-images-amazon.com/images/I/61s0sSMVZBL._AC_SL1500_.jpg",
            "category":"Electronics",
            "rating":"5/5",
            "price":17.99,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":12,
            "title":"Aura Digital Photo Frame, 10” HD Display, 2048 x 1536 Resolution with Free Cloud Storage",
            "image":"https://images-na.ssl-images-amazon.com/images/I/71Uo7nT0dUL._AC_SL1500_.jpg",
            "category":"Electronics",
            "rating":"4/5",
            "price":220.15,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":13,
            "title":"Rohent Digital Wireless Backup Camera High-Speed ​​Observation System",
            "image":"https://images-na.ssl-images-amazon.com/images/I/71OCOuTmDAL._AC_SL1500_.jpg",
            "category":"Electronics",
            "rating":"5/5",
            "price":111.99,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":14,
            "title":"GVM Video Lighting Kits with APP Control",
            "image":"https://images-na.ssl-images-amazon.com/images/I/51NbiGCnBlL._AC_.jpg",
            "category":"Electronics",
            "rating":"5/5",
            "price":339.73,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":15,
            "title":"TaoTronics Active Noise Cancelling Headphones [Upgraded] Bluetooth Headphones SoundSurge 60",
            "image":"https://images-na.ssl-images-amazon.com/images/I/519Ioqk1qFL._AC_SL1000_.jpg",
            "category":"Electronics",
            "rating":"5/5",
            "price":49.99,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":16,
            "title":"iPhone Charger, Anker 6ft Premium Nylon Lightning Cable [2-Pack], Apple MFi Certified for iPhone Chargers",
            "image":"https://images-na.ssl-images-amazon.com/images/I/71zoEPs1mdL._AC_SL1500_.jpg",
            "category":"Electronics",
            "rating":"5/5",
            "price":16.99,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":17,
            "title":"Zamkol Bluetooth Speaker 30W Waterproof Bluetooth Speakers Portable Wireless Loud Stereo Sound",
            "image":"https://images-na.ssl-images-amazon.com/images/I/71kIhlNtYWL._AC_SL1500_.jpg",
            "category":"Electronics",
            "rating":"4/5",
            "price":47.59,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":18,
            "title":"Wireless Digital Microscope Handheld USB Microscope Camera",
            "image":"https://images-na.ssl-images-amazon.com/images/I/61aQRoc2l6L._AC_SL1300_.jpg",
            "category":"Electronics",
            "rating":"1/5",
            "price":27.71,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":19,
            "title":"RAVPower FileHub, Travel Router AC750, Wireless SD Card Reader",
            "image":"https://images-na.ssl-images-amazon.com/images/I/511ct1yZJnL._AC_SL1000_.jpg",
            "category":"Electronics",
            "rating":"4/5",
            "price":47.59,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":20,
            "title":"TKSTAR GPS Tracker,GPS Tracker for Vehicles Waterproof Real Time Car GPS Tracker Strong Magnet Tracking Device",
            "image":"https://images-na.ssl-images-amazon.com/images/I/51B0RFlqLEL._AC_SL1000_.jpg",
            "category":"Electronics",
            "rating":"2/5",
            "price":40.78,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":21,
            "title":"Inateck 13-13.3 Inch Sleeve Case Briefcase Cover Protective Bag Ultrabook Netbook Carrying Protector Handbag",
            "image":"https://images-na.ssl-images-amazon.com/images/I/61fu8eLh%2BnL._AC_SL1300_.jpg",
            "category":"Electronics",
            "rating":"4/5",
            "price":16.14,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":22,
            "title":"NETGEAR Wifi Range Extender EX3700 - Coverage Up to 1000 Sq.ft.",
            "image":"https://images-na.ssl-images-amazon.com/images/I/61z5oOk5fzL._AC_SL1350_.jpg",
            "category":"Electronics",
            "rating":"4/5",
            "price":25.29,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":23,
            "title":"Wake- Up Light, LBell Alarm Clock 8 Colored Sunrise Simulation & Sleep Aid Feature",
            "image":"https://images-na.ssl-images-amazon.com/images/I/61mNvxmaTGL._AC_SL1500_.jpg",
            "category":"Electronics",
            "rating":"3/5",
            "price":33.90,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":24,
            "title":"True Workout Wireless Earbuds 12 Hours Battery on Single Charge, Bluetooth 5.0 Stereo Sound Sport Headphones with Volume Control",
            "image":"https://images-na.ssl-images-amazon.com/images/I/51klYOI9F2L._AC_SL1000_.jpg",
            "category":"Electronics",
            "rating":"5/5",
            "price":29.99,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id":25,
            "title":"Certified Refurbished Fire HD 8 Tablet 8  HD Display 32 GB - Black",
            "image":"https://images-na.ssl-images-amazon.com/images/I/61H5OaLY-0L._AC_SL1000_.jpg",
            "category":"Electronics",
            "rating":"4/5",
            "price":79.99,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    
];

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
