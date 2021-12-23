const { Schema, model, Types } = require('mongoose');
//const dateFormat = require('../utils/dateformat');

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
            validate: {

            }
        },
        thought: [ThoughtSchema],
        frinds: [FriendSchema]
    }
)

FriendSchema.virtual('friendCount').get(function() {
    return this.freinds.length;
});

module.exports = User;