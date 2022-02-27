const {User, Thought} = require('../models');

const userController = {
//  /api/users routes

    //GET all users
    getAllUsers(req,res) {
        User.find({})
        .select('-__V')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    //GET single user by ID and populated thought/friends data
    getUserByID({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__V'
            })
            .populate({
                path: 'friends',
                select: '-__V'
            })
            .select('-__V')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: "No user found with this id!"});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
             });
    },

    //POST new user... username/email
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    //PUT update user by ID
    updateUser({ params, body}, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true})
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    //DELETE user by ID.... bonus delete associated thoughts too
    deleteUser({ params }, res) {
        User.findByIdAndDelete({ _id: params.id })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: "No user found with this ID!"});
                return;
            }
            res.json(dbUserData)
        })
        .catch((err) => res.json(err));
    },

//  /api/users/:userId/friends/:friendId

    // POST a new friend to a users friend list
    createFriend({ params}, res) {
        User.findOneAndUpdate({ _id: params.id }, { $push: { friends: params.friendId }}, {new: true})
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: "No User found with this ID!"});
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => res.status(400).json(err));
    },
    
    // DELETE a friend form a users friend list
    deleteFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.id }, { $pull: { friends: params.friendId }}, { new: true })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: "No friend found with this ID!"});
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => res.status(400).json(err));
    }
};

module.exports = userController;