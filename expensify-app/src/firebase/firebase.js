import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-database";

const firebaseConfig = {
    apiKey: "AIzaSyBeBqPorhQbFoKJs5brgbHC7dayVSxytS4",
    authDomain: "expensify-appdb.firebaseapp.com",
    databaseURL: "https://expensify-appdb.firebaseio.com",
    projectId: "expensify-appdb",
    storageBucket: "expensify-appdb.appspot.com",
    messagingSenderId: "756607002644",
    appId: "1:756607002644:web:6032daf4c5262e8e581f01"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

const onDataChange = database.ref().on("value", (snapshot) => {
    const { name, job, location } = snapshot.val();
    console.log(`${name} is a ${job.title} at ${location.city}`)
}, (e) => {
    console.log("Error with data fetching", e);
});

database.ref("location/city").set("valencia");


// database.ref()
//     .once("value")
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log("Fetching data", e)
//     });

// database.ref().set({
//     name: "Luigi Derson",
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: "Software developer",
//         company: "Google"
//     },
//     location: {
//         city: "Manchester",
//         country: "United Kingdom"
//     }
// }).then(() => {
//     console.log("Data is saved!");
// }).catch((e) => {
//     console.log("This failed.", e);
// });

// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "London"
// });

// database.ref("isSingle").remove().then(() => {
//     console.log("Data was removed");
// }).catch((e) => {
//     console.log(e);
// });
