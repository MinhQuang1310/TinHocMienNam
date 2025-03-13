const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        phone: { type: Number },
        address: { type: String },
        avatar: { type: String },
        city: {type: String},
        enrolled_courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Curriculum' }]
    },
    {
        timestamps: true
    }
);
userSchema.index({ email: 1 });
const User = mongoose.model("User", userSchema);
module.exports = User;