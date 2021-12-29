const { Schema, model, Types } = require('mongoose');

const FriendSchema = new Schema(
    {
        FriendId:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        }
    }
)

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
            //validate: {
            //    validator:() => Promise.resolve(false),
            //    message: 'Email validation failed'  
            //}
        },
        thought: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        frinds: [FriendSchema]
    }
)

FriendSchema.virtual('friendCount').get(function() {
    return this.freinds.length;
});

const User = model('User', UserSchema)

module.exports = User;