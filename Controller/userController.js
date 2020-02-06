const db = require("../models");


module.exports = {
    create: function(req, res) {
        console.log("REQ", req)
        db.User
        .create(req.body)
            console.log("I'm in")
            // const  body = req;
            console.log("BODY", req.body)
        const {
            firstName,
            lastName,
            username,
            password,
            email,
            street,
            city,
            state,
            zipcode
        } = body;
        const newUser = new User();
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.username = username;
        newUser.password = password;
        newUser.email = email;
        newUser.street = street;
        newUser.city = city;
        newUser.state = state;
        newUser.zipcode = zipcode
        console.log("newUser", newUser)
        newUser.save((err, User) => {
            if (err) {
                res.end({
                    success: false,
                    message: "Error in Server"
                });
            } 
            if(User)
            res.end({
                success: true,
                message:"Signed Up!"
            })
        })
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err))
    }
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