const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "No!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Yes"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "I havent been on in a year."
    },
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Honestly, no."
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "Wow, who knew he was into that..."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "I'm on regularly when im not modding my discord server."
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "I have my life savings ready to go!"
    },
    {
        user_id: 1,
        post_id: 1,
        comment_text: "Freaks me out too!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;