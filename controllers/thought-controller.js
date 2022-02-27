const {User, Thought} = require('../models');

const thoughtController = {
//   /api/thoughts

    //Get all thoughts
    getAllThoughts(req,res) {
        Thought.find({})
        .populate({
            path: 'reactions',
            select: '-__V'
        })
        .select('-__V')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    //GET thought by ID
    getThoughtByID({ params }, res) {
        Thought.findOne({ _id: params.id })
            .populate({
                path: 'reactions',
                select: '-__V'
            })
            .select('-__V')
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "No thought found with this id!"});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
             });
    },

    // POST new thought and push new id to associated Users thoughts array... thoughtText, username, userId
    createThought({ body }, res) {
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate({ _id: body.userId }, {$push: {thoughts: _id}}, { new: true});
        })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: "No user found with this id!"});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    //PUT update a thought by ID
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, {new: true, runValidators: true})
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: "No thought found with this id!"});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    //DELETE thought by ID
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: "No thought found with this id!"});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

//  /api/thoughts/:thoughtId/reactions

    //POST new reaction to thoughts reactions array
    createReaction({ params, body }, res ) {
        Thought.findOneAndUpdate({ _id: params.id }, {$push: { reactions: body }}, { new: true, runValidators: true })
        .populate({ path: 'reactions', select: "-__V"})
        .select("-__V")
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: "No thought found with this ID!"});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err))
    },

    //DELETE to pull and remove reaction by ID from thoughts reactions array
    deleteReaction ({ params }, res) {
        Thought.findOneAndUpdate({ _id: params.id}, { $pull: { reactions: {reactionId: params.reactionId}}}, { new: true })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: "No thought or reaction found with this ID"})
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    }
};

module.exports = thoughtController;