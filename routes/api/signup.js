const User = require("../../models/User");

module.exports = (app) => {

    app.post("/api/account/signup", (req, res, next) => {
        const { body }= req;
        const {
            firstName,
            lastName,
            userName,
            password,
            email,
            street,
            city,
            state,
            zipcode
        } = body;
        if (!firstName) {
            res.end({
                success: false,
                message:"First Name can NOT be blank."
            });
        }
        if (!lastName) {
            res.end({
                success: false,
                message:"Last Name can NOT be blank."
            });
        }
        if (!userName) {
            res.end({
                success: false,
                message:"Username can NOT be blank."
            });
        }
        if (!password) {
            res.end({
                success: false,
                message:"Password can NOT be blank."
            });
        }
        if (!email) {
            res.end({
                success: false,
                message:"E-mail can NOT be blank."
            });
        }
        if (!street) {
            res.end({
                success: false,
                message:"Street can NOT be blank."
            });
        }
        if (!city) {
            res.end({
                success: false,
                message:"City can NOT be blank."
            });
        }
        if (!state) {
            res.end({
                success: false,
                message:"State can NOT be blank."
            });
        }
        if (!zipcode) {
            res.end({
                success: false,
                message:"Zip Code can NOT be blank."
            });
        }
        email = email.toLowerCase();
        User.find({
            emai: email
        },(err, previousUsers) => {
            if (err) {
                res.end({
                    success: false,
                    message:"Error in Server"
                });
            } else if (previousUsers.length >0) {
                res.end({
                    success: false,
                    message:"Error Account already exists"
                });
            } 
            const newUser = new User();
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.userName = userName;
            newUser.password = password;
            newUser.email = email;
            newUser.street = street;
            newUser.city = city;
            newUser.state = state;
            newUser.zipcode = zipcode
            newUser.save((err, user) => {
                if (err) {
                    res.end({
                        success: false,
                        message: "Error in Server"
                    });
                } 
                    res.end({
                        success: true,
                        message:"Signed Up!"
                    })
                
            })
        });
    });
};