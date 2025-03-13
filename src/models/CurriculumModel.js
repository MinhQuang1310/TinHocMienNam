const mongoose = require('mongoose');

const curriculumSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, default: 0, min: 0 },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // ✅ Tham chiếu tới User (_id)
    status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft' },
    url_image: { type: String, default: '' },
    lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }], // Liên kết bài học
    students_enrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // DS học viên
}, { timestamps: true });

// ✅ Index để tối ưu tìm kiếm theo tiêu đề và mô tả
curriculumSchema.index({ title: 'text', description: 'text' });

const Curriculum = mongoose.model("Curriculum", curriculumSchema);
module.exports = Curriculum;
