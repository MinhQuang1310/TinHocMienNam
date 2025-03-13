const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    curriculum_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curriculum', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    video_url: { type: String, default: '' },
    order: { type: Number, required: true }, // Thứ tự bài học trong giáo trình
}, { timestamps: true });

// ✅ Index theo giáo trình và thứ tự bài học để load nhanh hơn
lessonSchema.index({ curriculum_id: 1, order: 1 });

const Lesson = mongoose.model("Lesson", lessonSchema);
module.exports = Lesson;
