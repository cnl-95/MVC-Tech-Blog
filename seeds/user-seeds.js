const { User } = require('../models');

const userData = [
    {
        username: "cnl_1995",
        twitter: "cnl_1995",
        github: "cnl_1995",
        email: "cnl_1995@gmail.com",
        password: "password_1"
    },
    {
        username: "jane_d",
        twitter: "jane_d",
        github: "jane_d",
        email: "jane_d@gmail.com",
        password: "password_2"
    },
    {
        username: "john_d",
        twitter: "john_d",
        github: "john_d",
        email: "john_d@gmail.com",
        password: "password_3"
    },
    {
        username: "sam_m",
        twitter: "sam_m",
        github: "sam_m",
        email: "sam_m@gmail.com",
        password: "password_4"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;