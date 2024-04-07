// import mongoose from "mongoose"

// const ReviewSchema = new mongoose.Schema({
// 	id: { type: String, unique: true },
// 	name: { type: String, required: true },
// 	age: { type: Number, required: true },
// 	university: { type: String },
// 	likes: [{ type: String }],
// 	dislikes: [{ type: String }],
// 	traits: { type: String },
// 	sleepTime: { type: String },
// 	wakeUpTime: { type: String },
// 	dealbreakers: { type: String },
// 	hobbies: [{ type: String }],
// 	numberOfGuests: {
// 		type: String,
// 		enum: ['1', '2', '3', '4+',],
// 		required: true
// 	},
// 	substances: { type: String },
// 	budget: { type: Number },
// 	preferredArea: {
// 		type: {
// 			type: String,
// 			enum: ['Point'],
// 			required: true
// 		},
// 		coordinates: {
// 			type: [Number],
// 			required: true
// 		}
// 	}
// });

// // ReviewSchema.index({ preferredArea: '2dsphere' });

// export default mongoose.model("Review", ReviewSchema)