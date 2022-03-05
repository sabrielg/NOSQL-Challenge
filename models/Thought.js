const { Schema, model, Types } =require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength:1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ ReactionSchema ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const ReactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            max: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat (createdAtVal)
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
  })
  
  const Thought = model('Thought', ThoughtSchema);
  
  module.exports = Thought;