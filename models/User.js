const { Schema, model } = require('mongoose');

const User = new Schema(
    {
username: {
    type:String,
    required:true,
    trim: true
},
email: {
    type: String,
    required:true,
    unique: true,
    match:[/.+@.+\..+/]
},
thoughts: [{
    type: Schema.Types.ObjectId,
    ref: "Thought"
}
],
friends:[ 
    {
    type: Schema.Types.ObjectId,
    ref: "User"
}
]
    },

);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length
});

const User = model('User', userSchema);

module.exports = User;