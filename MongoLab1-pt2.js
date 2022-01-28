// 1. db.people.insertOne({first_name:"Sonic", last_name:"Hedgehog",email:'chilidoglover@gmail.com',gender:'male',age:30,state:'Florida',children:[{}]});
// { acknowledged: true,
//   insertedId: ObjectId("61f40048579567902ed7aabb") }

// 2. db.people.insertOne({first_name:'Bobby', last_name:'Schmerda',email:'bobbyisking@gmail.com',gender:'Male',age:28,state:'Florida',Children:[{name:'Doug',age:12},{name:'Tommy',age:35}]});
// { acknowledged: true,
//   insertedId: ObjectId("61f403dc579567902ed7aabc") }

// 3. db.people.updateOne({first_name:'Clarence'},{$set:{state:'South Dakota'}});
// { acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0 }

// 4. db.people.updateOne({first_name:'Rebecca',last_name:'Hayes'},{$set:{email:''}});
// { acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0 }

// 5. db.people.updateMany({state:'Missouri'},{$inc:{age:1}});
// { acknowledged: true,
//   insertedId: null,
//   matchedCount: 4,
//   modifiedCount: 4,
//   upsertedCount: 0 }

// 6. db.people.updateOne({first_name:'Jerry',last_name:'Baker'},{$set:{first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}]}});
// { acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0 }

// 7. db.people.deleteOne({first_name:'Wanda',last_name:'Bowman'});
// { acknowledged: true, deletedCount: 1 }

// 8. db.people.deleteMany({email:null});
// { acknowledged: true, deletedCount: 35 } I got 35. When I updated a person I did email as an empty string.

// 9. db.submissions.insertMany([{title: "The River Bend", upvotes: 10, downvotes: 2, artist:ObjectId('61f3fdcb579567902ed7a9fb')},{title: "Nine Lives", upvotes: 7, downvotes: 0, artist:ObjectId('61f3fdcb579567902ed7aa29')},{title: "Star Bright", upvotes: 19, downvotes: 3, artist:ObjectId('61f3fdcb579567902ed7aaac')},{title: "Why Like This?", upvotes: 1, downvotes: 5, artist:ObjectId('61f3fdcb579567902ed7aa32')},{title: "Non Sequitur", upvotes: 11, downvotes: 1, artist:ObjectId('61f3fdcb579567902ed7a9f9')}]);
// { acknowledged: true,
//   insertedIds:
//    { '0': ObjectId("61f4188d579567902ed7aabd"),
//      '1': ObjectId("61f4188d579567902ed7aabe"),
//      '2': ObjectId("61f4188d579567902ed7aabf"),
//      '3': ObjectId("61f4188d579567902ed7aac0"),
//      '4': ObjectId("61f4188d579567902ed7aac1") } }

// 10. db.submissions.updateOne({title:'The River Bend'},{$inc:{upvotes:2}});
// { acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0 }

// 11. db.submissions.findOne({title:'The River Bend'});
// { _id: ObjectId("61f4188d579567902ed7aabd"),
//   title: 'The River Bend',
//   upvotes: 10,
//   downvotes: 2,
//   artist: ObjectId("61f3fdcb579567902ed7a9fb"),
//   round2: true }

//I did this one by one but here is one submission.
