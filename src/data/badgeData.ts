import { Badge } from '../types';

export const INITIAL_BADGES: Badge[] = [
  {
    id: 'newbie',
    icon: '🌱',
    title: 'Người mới khám phá',
    description: 'Hoàn thành hoạt động đầu tiên trong ứng dụng!',
    requirementText: 'Bắt đầu bất kỳ hoạt động học tập nào',
    unlocked: false,
  },
  {
    id: 'quiz_explorer',
    icon: '💻',
    title: 'Nhà khám phá Tin học',
    description: 'Đã hoàn thành ít nhất 10 câu hỏi trắc nghiệm Tin học!',
    requirementText: 'Trả lời đủ 10 câu hỏi trắc nghiệm',
    unlocked: false,
  },
  {
    id: 'quiz_master',
    icon: '🏆',
    title: 'Cao thủ Tin học',
    description: 'Đạt thành tích xuất sắc từ 80% trở lên trong bài trắc nghiệm!',
    requirementText: 'Đạt từ 80% điểm trong bài kiểm tra trắc nghiệm',
    unlocked: false,
  },
  {
    id: 'ai_friend',
    icon: '🤖',
    title: 'Bạn đồng hành cùng AI',
    description: 'Đã trò chuyện và đặt câu hỏi cho AI Bạn Đồng Hành!',
    requirementText: 'Gửi ít nhất một câu hỏi học tập cho AI',
    unlocked: false,
  },
  {
    id: 'health_knight',
    icon: '❤️',
    title: 'Hiệp sĩ sức khỏe số',
    description: 'Hoàn thành các tình huống thử thách bảo vệ sức khỏe!',
    requirementText: 'Trả lời đúng các thử thách bảo vệ mắt và tư thế ngồi',
    unlocked: false,
  },
];

export const STORAGE_KEY_BADGES = 'tin_hoc_badges_v1';
export const STORAGE_KEY_STATS = 'tin_hoc_stats_v1';
