import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: String,
  title: String,
  content: String,
  cuid: { type: String, required: true },
  updated: { type: Date, default: Date.now }
});


// 데이터 베이스 컬렉션 정의
export default mongoose.model('Post', postSchema);
