import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

//child_removed
database.ref("expenses").on("child_removed", (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref("expenses").on("child_changed", (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref("expenses").on("child_added", (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});


// database.ref("expenses")
//     .on("value", (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     }, (error) => {
//         console.log("Error: ", error);
//     });

// database.ref("expenses").once("value").then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref("expenses").push({
//     description: "Cleaning stuff",
//     note: "Tesco buying",
//     amount: "7.22",
//     createdAt: "10252085"
// })

// database.ref("notes").push({
//     title: "Course Topics",
//     body: "React Native, Angular, Vue"
// });

// database.ref().on("value", (snapshot) => {
//     const { name, job, location } = snapshot.val();
//     console.log(`${name} is a ${job.title} at ${location.city}`)
// }, (e) => {
//     console.log("Error with data fetching", e);
// });

// database.ref("location/city").set("Valencia");

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
