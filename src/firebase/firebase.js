import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.database()

export { firebase, db as default }

// db.ref('expenses').on('child_removed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
    
// })
// db.ref('expenses').on('child_changed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
    
// })
// db.ref('expenses')
//     .once('value')
//     .then(snapshot => {
//         const expenses = []
//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//         })
//         })        
//         console.log(expenses)
//     })

// db.ref('expenses').on('value', snapshot => {
//     const expenses = []
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot
//         })
//     })
//     console.log(expenses);
    
// })
// db.ref('expenses').push({
//     title: 'Ford Fusion',
//     body: 'Buy Fusion'
// })


// const firebaseNotes = {
//     notes: {

//     }
// }
// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'this is my first note'
// },
// {
//     id: '14',
//     title: 'Another note!',
//     body: 'this is my note'
// }]
// db.ref('notes').set(notes)

// const sub = db.ref().on('value', snapshot => {
//     const val = snapshot.val()
//     console.log(`${val.name} is ${val.job.title} at ${val.job.company}`);
    
// }, e => {
//     console.log('Something went wrong');
    
// })
// db.ref().set({
//       name: 'John Doe',
//       age: 25,
//       stresslevel: 6,
//       job: {
//         title: 'Software developer',
//         company: 'Google'
//       },
//       location: {
//           planet: 'Mars',
//           city: 'Marsopole'
//       },
//   }).then(() => {
//     console.log('Data is saved');    
//   }).catch(e =>{
//     console.log('This is failed', e);
//   })

// db.ref('attributes/weight').remove()
// .then(() => {
//   console.log('data removed');
  
// })
// db.ref().update({
//     stresslevel: 9,
//     'job/company': 'Area 22',
//     'location/city': 'Marsopole'
// })

// db.ref('location/city')
    // .once('value')
    // .then(snapshot => {
    //     const val = snapshot.val()
    //     console.log(val)
    // })
    // .catch(e => {
    //     console.log('error fetching data: ', e);
        
    // })

// const onValueChange = db.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })

// setTimeout(() => {
//     db.ref('age').set(22)
// }, 3500)

// setTimeout(() => {
//     db.ref('age').set(26)
// }, 5500)

// setTimeout(() => {
//     db.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//     db.ref('age').set(50)
// }, 10500)