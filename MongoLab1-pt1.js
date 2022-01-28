// 1. db.people.find(); Because of pagination  you only see a select amount of our data.

// 2. db.people.find().count(); Chaining using dot notation.

// 3. db.people.find({state:'Arizona'});
// { _id: ObjectId("61f3fdcb579567902ed7a9f3"),
//   first_name: 'Lawrence',
//   last_name: 'Watkins',
//   email: 'lwatkins0@uiuc.edu',
//   gender: 'Male',
//   age: 32,
//   state: 'Arizona',
//   children:
//    [ { name: 'Ruth', age: 17 },
//      { name: 'Catherine', age: 19 },
//      { name: 'David', age: 1 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa1e"),
//   first_name: 'Lillian',
//   last_name: 'Lynch',
//   email: 'llynch17@blogspot.com',
//   gender: 'Female',
//   age: 54,
//   state: 'Arizona',
//   children: [ { name: 'Nicholas', age: 19 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa42"),
//   first_name: 'Catherine',
//   last_name: 'Marshall',
//   email: 'cmarshall27@soundcloud.com',
//   gender: 'Female',
//   age: 41,
//   state: 'Arizona',
//   children: [] }
// { _id: ObjectId("61f3fdcb579567902ed7aa85"),
//   first_name: 'Cynthia',
//   last_name: 'Wheeler',
//   email: 'cwheeler42@friendfeed.com',
//   gender: 'Female',
//   age: 24,
//   state: 'Arizona',
//   children: [] }
// { _id: ObjectId("61f3fdcb579567902ed7aa96"),
//   first_name: 'Stephanie',
//   last_name: 'Burton',
//   email: 'sburton4j@berkeley.edu',
//   gender: 'Female',
//   age: 47,
//   state: 'Arizona',
//   children:
//    [ { name: 'Irene', age: 14 },
//      { name: 'Henry', age: 10 },
//      { name: 'Justin', age: 3 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa9f"),
//   first_name: 'Ryan',
//   last_name: 'Henry',
//   email: 'rhenry4s@amazon.co.jp',
//   gender: 'Male',
//   age: 29,
//   state: 'Arizona',
//   children: [] }

// 4. db.people.find({state:'Arizona', gender:'Male'});
// { _id: ObjectId("61f3fdcb579567902ed7a9f3"),
//   first_name: 'Lawrence',
//   last_name: 'Watkins',
//   email: 'lwatkins0@uiuc.edu',
//   gender: 'Male',
//   age: 32,
//   state: 'Arizona',
//   children:
//    [ { name: 'Ruth', age: 17 },
//      { name: 'Catherine', age: 19 },
//      { name: 'David', age: 1 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa9f"),
//   first_name: 'Ryan',
//   last_name: 'Henry',
//   email: 'rhenry4s@amazon.co.jp',
//   gender: 'Male',
//   age: 29,
//   state: 'Arizona',
//   children: [] }

// 5. db.people.find({$or:[{state:'Arizona'},{state:'New Mexico'}]});
// { _id: ObjectId("61f3fdcb579567902ed7a9f3"),
// first_name: 'Lawrence',
// last_name: 'Watkins',
// email: 'lwatkins0@uiuc.edu',
// gender: 'Male',
// age: 32,
// state: 'Arizona',
// children:
//  [ { name: 'Ruth', age: 17 },
//    { name: 'Catherine', age: 19 },
//    { name: 'David', age: 1 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa1e"),
// first_name: 'Lillian',
// last_name: 'Lynch',
// email: 'llynch17@blogspot.com',
// gender: 'Female',
// age: 54,
// state: 'Arizona',
// children: [ { name: 'Nicholas', age: 19 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa42"),
// first_name: 'Catherine',
// last_name: 'Marshall',
// email: 'cmarshall27@soundcloud.com',
// gender: 'Female',
// age: 41,
// state: 'Arizona',
// children: [] }
// { _id: ObjectId("61f3fdcb579567902ed7aa64"),
// first_name: 'Irene',
// last_name: 'Wood',
// email: 'iwood35@github.com',
// gender: 'Female',
// age: 27,
// state: 'New Mexico',
// children: [ { name: 'Doris', age: 12 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa85"),
// first_name: 'Cynthia',
// last_name: 'Wheeler',
// email: 'cwheeler42@friendfeed.com',
// gender: 'Female',
// age: 24,
// state: 'Arizona',
// children: [] }
// { _id: ObjectId("61f3fdcb579567902ed7aa96"),
// first_name: 'Stephanie',
// last_name: 'Burton',
// email: 'sburton4j@berkeley.edu',
// gender: 'Female',
// age: 47,
// state: 'Arizona',
// children:
//  [ { name: 'Irene', age: 14 },
//    { name: 'Henry', age: 10 },
//    { name: 'Justin', age: 3 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa9f"),
// first_name: 'Ryan',
// last_name: 'Henry',
// email: 'rhenry4s@amazon.co.jp',
// gender: 'Male',
// age: 29,
// state: 'Arizona',
// children: [] }
// { _id: ObjectId("61f3fdcb579567902ed7aaa6"),
// first_name: 'James',
// last_name: 'Oliver',
// email: 'joliver4z@hhs.gov',
// gender: 'Male',
// age: 40,
// state: 'New Mexico',
// children: [ { name: 'Kathy', age: 6 } ] }

// 6. db.people.find({age:{$lt:40}}); 90 people

// 7. db.people.find({gender:'Female',state:'Florida', age:{$lte:45, $gte:40}});
// { _id: ObjectId("61f3fdcb579567902ed7a9fa"),
//   first_name: 'Debra',
//   last_name: 'Ruiz',
//   email: 'druiz7@dagondesign.com',
//   gender: 'Female',
//   age: 45,
//   state: 'Florida',
//   children: [] }
// { _id: ObjectId("61f3fdcb579567902ed7aa7e"),
//   first_name: 'Lois',
//   last_name: 'Adams',
//   email: 'ladams3v@timesonline.co.uk',
//   gender: 'Female',
//   age: 42,
//   state: 'Florida',
//   children:
//    [ { name: 'Mark', age: 12 },
//      { name: 'Louise', age: 18 },
//      { name: 'Kathryn', age: 0 },
//      { name: 'Robert', age: 6 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa9c"),
//   first_name: 'Sharon',
//   last_name: 'Taylor',
//   email: 'staylor4p@skyrock.com',
//   gender: 'Female',
//   age: 45,
//   state: 'Florida',
//   children: [ { name: 'Anne', age: 2 } ] }

// 8. db.people.find({first_name:/^H/});
// { _id: ObjectId("61f3fdcb579567902ed7aa2e"),
//   first_name: 'Harry',
//   last_name: 'Williamson',
//   email: 'hwilliamson1n@seesaa.net',
//   gender: 'Male',
//   age: 60,
//   state: 'New York',
//   children: [ { name: 'Peter', age: 18 }, { name: 'Diana', age: 14 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aab7"),
//   first_name: 'Helen',
//   last_name: 'Clark',
//   email: 'hclark5g@ustream.tv',
//   gender: 'Female',
//   age: 25,
//   state: 'Alabama',
//   children: [ { name: 'Earl', age: 2 } ] } USING REGEX TO GET JUST THE FIRST LETTER. THE ^ IS JUST MATCHING WHAT WE HAVE AT THE START OF OUR STRINGS.

// 9. db.people.find({state:'Michigan'}).sort({first_name: 1}); TAK ON .SORT(KEY:<1 OR -1> ) 1 WILL SORT BY ASCENDING ORDER WHILE -1 WILL SORT BY DESCENDING ORDER.
// { _id: ObjectId("61f3fdcb579567902ed7aa72"),
//   first_name: 'Angela',
//   last_name: 'Stanley',
//   email: 'astanley3j@1und1.de',
//   gender: 'Female',
//   age: 59,
//   state: 'Michigan',
//   children:
//    [ { name: 'Sandra', age: 14 },
//      { name: 'Christopher', age: 20 },
//      { name: 'Kathleen', age: 16 },
//      { name: 'Antonio', age: 6 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa00"),
//   first_name: 'Anna',
//   last_name: 'Kelley',
//   email: 'akelleyd@gmpg.org',
//   gender: 'Female',
//   age: 24,
//   state: 'Michigan',
//   children: [ { name: 'Adam', age: 0 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa7f"),
//   first_name: 'Jane',
//   last_name: 'Meyer',
//   email: 'jmeyer3w@wsj.com',
//   gender: 'Female',
//   age: 53,
//   state: 'Michigan',
//   children:
//    [ { name: 'Jeremy', age: 7 },
//      { name: 'Irene', age: 12 },
//      { name: 'Beverly', age: 4 },
//      { name: 'Sharon', age: 17 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa23"),
//   first_name: 'Janet',
//   last_name: 'James',
//   email: 'jjames1c@vistaprint.com',
//   gender: 'Female',
//   age: 50,
//   state: 'Michigan',
//   children: [ { name: 'Billy', age: 19 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aaa1"),
//   first_name: 'Jessica',
//   last_name: 'Anderson',
//   email: 'janderson4u@eventbrite.com',
//   gender: 'Female',
//   age: 38,
//   state: 'Michigan',
//   children: [ { name: 'Amanda', age: 12 }, { name: 'Alan', age: 19 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa5a"),
//   first_name: 'Mary',
//   last_name: 'Davis',
//   email: 'mdavis2v@redcross.org',
//   gender: 'Female',
//   age: 24,
//   state: 'Michigan',
//   children: [ { name: 'Janice', age: 1 }, { name: 'Judith', age: 3 } ] }

// 10. db.people.find({$or:[{state:'Virginia'},{first_name:'Virginia'}]});
// { _id: ObjectId("61f3fdcb579567902ed7a9fb"),
//   first_name: 'Anna',
//   last_name: 'Howard',
//   email: 'ahoward8@dot.gov',
//   gender: 'Female',
//   age: 47,
//   state: 'Virginia',
//   children:
//    [ { name: 'Johnny', age: 0 },
//      { name: 'Jean', age: 6 },
//      { name: 'Edward', age: 9 },
//      { name: 'Rachel', age: 16 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa24"),
//   first_name: 'Virginia',
//   last_name: 'Fuller',
//   email: 'vfuller1d@dyndns.org',
//   gender: 'Female',
//   age: 29,
//   state: 'Wisconsin',
//   children:
//    [ { name: 'Anne', age: 9 },
//      { name: 'Kenneth', age: 4 },
//      { name: 'Theresa', age: 9 },
//      { name: 'Debra', age: 18 },
//      { name: 'Andrew', age: 2 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa45"),
//   first_name: 'Charles',
//   last_name: 'Wallace',
//   email: 'cwallace2a@ucla.edu',
//   gender: 'Male',
//   age: 59,
//   state: 'Virginia',
//   children:
//    [ { name: 'Jimmy', age: 2 },
//      { name: 'Linda', age: 4 },
//      { name: 'Craig', age: 4 },
//      { name: 'Alice', age: 0 },
//      { name: 'Angela', age: 8 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aa54"),
//   first_name: 'Lisa',
//   last_name: 'Ramos',
//   email: 'lramos2p@flavors.me',
//   gender: 'Female',
//   age: 37,
//   state: 'Virginia',
//   children: [ { name: 'Theresa', age: 14 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aaa7"),
//   first_name: 'Kenneth',
//   last_name: 'Burns',
//   email: 'kburns50@netscape.com',
//   gender: 'Male',
//   age: 18,
//   state: 'Virginia',
//   children: [] }

// 11. db.people.find({age:{$lt:30}},{first_name:1,last_name:1});
// { _id: ObjectId("61f3fdcb579567902ed7a9f4"),
//   first_name: 'Steve',
//   last_name: 'Vasquez' }
// { _id: ObjectId("61f3fdcb579567902ed7aa00"),
//   first_name: 'Anna',
//   last_name: 'Kelley' }
// { _id: ObjectId("61f3fdcb579567902ed7aa03"),
//   first_name: 'Christina',
//   last_name: 'Hughes' }
// { _id: ObjectId("61f3fdcb579567902ed7aa06"),
//   first_name: 'Maria',
//   last_name: 'Hicks' }
// { _id: ObjectId("61f3fdcb579567902ed7aa0d"),
//   first_name: 'Edward',
//   last_name: 'Hayes' }
// { _id: ObjectId("61f3fdcb579567902ed7aa0f"),
//   first_name: 'Kathy',
//   last_name: 'Hayes' }
// { _id: ObjectId("61f3fdcb579567902ed7aa11"),
//   first_name: 'Joe',
//   last_name: 'Ruiz' }
// { _id: ObjectId("61f3fdcb579567902ed7aa16"),
//   first_name: 'Nicholas',
//   last_name: 'Hunter' }
// { _id: ObjectId("61f3fdcb579567902ed7aa22"),
//   first_name: 'Shirley',
//   last_name: 'Franklin' }
// { _id: ObjectId("61f3fdcb579567902ed7aa24"),
//   first_name: 'Virginia',
//   last_name: 'Fuller' }
// { _id: ObjectId("61f3fdcb579567902ed7aa35"),
//   first_name: 'Janet',
//   last_name: 'Baker' }
// { _id: ObjectId("61f3fdcb579567902ed7aa41"),
//   first_name: 'Steve',
//   last_name: 'Reynolds' }
// { _id: ObjectId("61f3fdcb579567902ed7aa49"),
//   first_name: 'Shirley',
//   last_name: 'Hamilton' }
// { _id: ObjectId("61f3fdcb579567902ed7aa56"),
//   first_name: 'Donald',
//   last_name: 'Cook' }
// { _id: ObjectId("61f3fdcb579567902ed7aa5a"),
//   first_name: 'Mary',
//   last_name: 'Davis' }
// { _id: ObjectId("61f3fdcb579567902ed7aa64"),
//   first_name: 'Irene',
//   last_name: 'Wood' }
// { _id: ObjectId("61f3fdcb579567902ed7aa65"),
//   first_name: 'Ashley',
//   last_name: 'Cox' }
// { _id: ObjectId("61f3fdcb579567902ed7aa69"),
//   first_name: 'Christina',
//   last_name: 'Holmes' }
// { _id: ObjectId("61f3fdcb579567902ed7aa6a"),
//   first_name: 'Jack',
//   last_name: 'Cunningham' }
// { _id: ObjectId("61f3fdcb579567902ed7aa6e"),
//   first_name: 'Billy',
//   last_name: 'Bowman' }

// 12. db.people.find({state:'Montana'},{age:false}); IN THIS EXAMPLE, EVERYTHING ABOUT THESE PEOPLE WILL COMEBACK EXCEPT THE AGE. WE DON'T WANT THE AGE.
// { _id: ObjectId("61f3fdcb579567902ed7aa27"),
//   first_name: 'Adam',
//   last_name: 'Cunningham',
//   email: 'acunningham1g@wunderground.com',
//   gender: 'Male',
//   state: 'Montana',
//   children: [ { name: 'Linda', age: 20 } ] }
// { _id: ObjectId("61f3fdcb579567902ed7aab2"),
//   first_name: 'Ralph',
//   last_name: 'Cooper',
//   email: 'rcooper5b@blinklist.com',
//   gender: 'Male',
//   state: 'Montana',
//   children:
//    [ { name: 'Andrea', age: 14 },
//      { name: 'Billy', age: 0 },
//      { name: 'Sharon', age: 13 } ] }

// 13. db.people.find({email:/\.edu/},{email:1});
// { _id: ObjectId("61f3fdcb579567902ed7a9f3"),
//   email: 'lwatkins0@uiuc.edu' }
// { _id: ObjectId("61f3fdcb579567902ed7aa01"),
//   email: 'brogerse@nyu.edu' }
// { _id: ObjectId("61f3fdcb579567902ed7aa18"),
//   email: 'rking11@washington.edu' }
// { _id: ObjectId("61f3fdcb579567902ed7aa2b"),
//   email: 'jbarnes1k@illinois.edu' }
// { _id: ObjectId("61f3fdcb579567902ed7aa3b"),
//   email: 'lhowell20@cornell.edu' }
// { _id: ObjectId("61f3fdcb579567902ed7aa45"),
//   email: 'cwallace2a@ucla.edu' }
// { _id: ObjectId("61f3fdcb579567902ed7aa68"),
//   email: 'ajones39@umn.edu' }
// { _id: ObjectId("61f3fdcb579567902ed7aa6d"),
//   email: 'rhoward3e@wisc.edu' }
// { _id: ObjectId("61f3fdcb579567902ed7aa6f"),
//   email: 'cduncan3g@berkeley.edu' }
// { _id: ObjectId("61f3fdcb579567902ed7aa8f"),
//   email: 'wwoods4c@yale.edu' }
// { _id: ObjectId("61f3fdcb579567902ed7aa96"),
//   email: 'sburton4j@berkeley.edu' }
// { _id: ObjectId("61f3fdcb579567902ed7aab1"),
//   email: 'pday5a@harvard.edu' }

//EXTENDED

// 14. db.people.find({'children.age':{$lt:4}}).count();
// 54

// 15. db.people.find({children:[]}); RETURNING ALL THE PEOPLE WHO DON'T HAVE CHILDREN. THE ARRAY WOULD BE EMPTY SO WE'RE SEARCHING FOR THAT WITH .FIND.

// 16. db.people.find({children:{$ne:[]}}); RETURNING EVERYONE WITH NO CHILDREN PT2
