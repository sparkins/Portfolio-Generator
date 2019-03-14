const db = require("../models")


module.exports = {
    findAll: (req, res ) => {
        db.Users.find({})
        .then((users) => {
            console.log(users);
            res.json(users);
        })
    },
    addNewUser: (req, res) => {
        db.Users.insert(req.body, function(error, savedUser) {
            if (error) {
                res.send(error);
            } else {
                res.json(savedUser);
            }
        });
    }
}

// console.log(db.Users.find());

// // function f() {
// //     a = db.Users
// // }

// // f();


//     db.Users.find({}).exec(function(c,d){
//         console.log(d)
//     });


// module.exports = {
//     //addNewUser = (event) => 

//     },
//     findAll: (req, res) => {
//         db.Users
//         .find({})
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     }
// }