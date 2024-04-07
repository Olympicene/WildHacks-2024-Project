import mongoose from "mongoose"
import bcrypt from "bcrypt"

import jwt from 'jsonwebtoken'
import { SECRET_ACCESS_TOKEN } from '../config/index.js'

//define user structure
const UserSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: "Your first name is required",
            max: 25,
        },
        email: {
            type: String,
            required: "Your email is required",
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: "Your password is required",
            select: false,
            max: 25,
        },
        age: { type: Number },
        university: { type: String },
        likes: [{ type: String }],
        dislikes: [{ type: String }],
        traits: { type: String },
        coordinates: {
            longitude: {
                type: Number,
            },
            latitude: {
                type: Number,
            }
        },
        sleepTime: { type: String },
        wakeUpTime: { type: String },
        dealbreakers: { type: String },
        hobbies: [{ type: String }],
        numberOfGuests: {
            type: String,
            enum: ['1', '2', '3', '4+',],
        },
        substances: { type: String },
        budget: { type: Number },
    },
    {timestamps: true}
);

// is this unsafe idk actually
UserSchema.pre("save", function (next) {
    const user = this;

    if (!user.isModified("password")) return next();
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.generateAccessJWT = function () {
    let payload = {
        id: this._id,
    }

    return jwt.sign(payload, SECRET_ACCESS_TOKEN, {
        expiresIn: '20m',
    })
}

export default mongoose.model("User", UserSchema)