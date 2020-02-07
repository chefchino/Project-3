const db = require("../models");
const path = require("path");

module.exports = {
    create: function (req, res) {

        const {
            firstName,
            lastName,
            userName,
            passWord,
            email,
            street,
            city,
            state,
            zipcode
        } = req.body;
        console.log("REQ", req.body)
        db.User
            .create(req.body)
        console.log("I'm in")
        // const  body = req;
        // console.log("BODY", req.body)
        const newUser = new db.User();
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.userName = userName;
        newUser.passWord = passWord;
        newUser.email = email;
        newUser.street = street;
        newUser.city = city;
        newUser.state = state;
        newUser.zipcode = zipcode
        console.log("newUser", newUser)
        newUser.save((err, User) => {
            if (err) {
                res.json({
                    success: false,
                    message: "Error in Server"
                });
            }
            if (User)
                res.json({
                    success: true,
                    message: "Signed Up!"
                })
        })
        // .then(dbUser => res.json(dbUser))
        // .catch(err => res.status(422).json(err))
    },
    findByUser: function (req, res) {
        db.User
        .findOne({
            userName: req.body.userName
        })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.passWord, user.passWord)) {
                    res.json({
                        success: true,
                        message: "Login Successful!"
                    })
                }
            } else {
                res.json({
                    success: false,
                    message:"Error User Does NOT Exists"})
                }
            })
        }
        // console.log("I'M IN THE USERCONTROLLER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}
// }

// email = email.toLowerCase();
// db.User.find({
//     email: email
// },(err, previousUsers) => {
//     if (err) {
//         res.end({
//             success: false,
//             message:"Error in Server"
//         });
//     } else if (previousUsers.length >0) {
//         res.end({
//             success: false,
//             message:"Error Account already exists"
//         });
//     } 