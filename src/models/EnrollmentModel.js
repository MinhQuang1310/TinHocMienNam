const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // ✅ Tham chiếu User (_id)
    curriculum_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curriculum', required: true },
    enrolled_at: { type: Date, default: Date.now }
}, { timestamps: true });

// ✅ Index giúp truy vấn danh sách học viên nhanh hơn
enrollmentSchema.index({ user_id: 1, curriculum_id: 1 });

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
module.exports = Enrollment;
