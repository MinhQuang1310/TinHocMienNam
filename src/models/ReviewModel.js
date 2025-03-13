const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    curriculum_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curriculum', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, min: 1, max: 5, required: true }, // Điểm đánh giá 1-5 sao
    comment: { type: String, required: true },
}, { timestamps: true });

// ✅ Index để tối ưu truy vấn đánh giá theo giáo trình
reviewSchema.index({ curriculum_id: 1 });

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
