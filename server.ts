import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize GoogleGenAI server-side client
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Knowledge base fallback for common Informatics questions when API key is not yet set
const FALLBACK_ANSWERS: Record<string, { answer: string; challenge: string }> = {
  ai: {
    answer: "Trí tuệ nhân tạo (AI - Artificial Intelligence) là khả năng của máy tính hoặc phần mềm có thể mô phỏng các hoạt động trí tuệ của con người như: học hỏi, suy nghĩ, nhận diện hình ảnh, hiểu giọng nói và giải quyết vấn đề.\n\nVí dụ: Trợ lý giọng nói Siri/Google Assistant, camera nhận diện khuôn mặt, hay tính năng gợi ý video trên YouTube đều ứng dụng AI!",
    challenge: "Em có biết chiếc xe tự lái hay robot hút bụi thông minh trong nhà có sử dụng AI không? Thử đoán xem nó dùng AI để làm gì nhé!"
  },
  thuat_toan: {
    answer: "Thuật toán (Algorithm) là một dãy các chỉ dẫn từng bước rõ ràng, chính xác nhằm hoàn thành một công việc hoặc giải quyết một bài toán cụ thể.\n\nVí dụ: Công thức pha một ly nước cam (Bước 1: Cắt cam -> Bước 2: Vắt lấy nước -> Bước 3: Thêm chút đường -> Bước 4: Khuấy đều) chính là một thuật toán đời thường đấy!",
    challenge: "Theo em, nếu đổi Bước 1 và Bước 2 cho nhau (vắt cam trước khi cắt) thì kết quả sẽ như thế nào? Tại sao thứ tự các bước trong thuật toán lại cực kỳ quan trọng?"
  },
  bien: {
    answer: "Biến (Variable) trong lập trình giống như một chiếc 'hộp có dán nhãn' dùng để chứa dữ liệu (như con số, chữ cái, tên gọi). Giá trị trong chiếc hộp này có thể thay đổi được trong quá trình chương trình chạy.\n\nVí dụ: Trong một trò chơi điện tử, biến `diem_so` ban đầu chứa số 0, mỗi khi em ăn được một ngôi sao thì số trong hộp sẽ tăng lên thành 10, 20...",
    challenge: "Nếu em muốn làm trò chơi bắn bóng, ngoài biến `diem_so`, em nghĩ chương trình cần thêm những biến nào nữa (gợi ý: số mạng chơi, thời gian)?"
  },
  internet: {
    answer: "Internet là một 'mạng lưới khổng lồ' kết nối hàng triệu triệu máy tính và thiết bị thông minh trên khắp thế giới lại với nhau bằng dây cáp ngầm dưới biển, sóng vô tuyến và vệ tinh.\n\nKhi em mở một trang web, máy tính của em (máy khách - Client) sẽ gửi yêu cầu qua mạng Internet đến máy chủ (Server) lưu trang web đó để tải nội dung về hiển thị cho em xem.",
    challenge: "Em có tò mò dây cáp Internet dưới đáy đại dương to cỡ nào và nối các châu lục như thế nào không?"
  },
  tim_kiem: {
    answer: "Để tìm kiếm thông tin hiệu quả trên Internet (Google), em có thể dùng các mẹo nhỏ:\n1. Dùng từ khóa ngắn gọn, đúng trọng tâm.\n2. Đặt cụm từ chính xác trong dấu ngoặc kép \"...\".\n3. Dùng dấu trừ (-) để loại bỏ kết quả không mong muốn (ví dụ: `virus máy tính -sinh học`).\n4. Luôn kiểm tra nguồn tin từ các trang web uy tín, chính thống (như edu.vn, gov.vn).",
    challenge: "Nếu muốn tìm tài liệu Tin học lớp 7 dạng tệp PDF, em thử gõ từ khóa gì vào ô tìm kiếm nào?"
  },
  bang_tinh: {
    answer: "Bảng tính điện tử (như Microsoft Excel, Google Sheets) là phần mềm giúp lưu trữ dữ liệu dưới dạng các hàng và cột, tự động tính toán bằng công thức và tạo biểu đồ trực quan.\n\nVí dụ: Em có thể dùng bảng tính để làm bảng điểm cả lớp, tự động tính điểm trung bình bằng hàm `=AVERAGE()` trong nháy mắt!",
    challenge: "Em đã biết công thức hay hàm nào trong bảng tính chưa? Ví dụ muốn tính tổng thì dùng hàm gì nhỉ?"
  },
  bao_ve_tai_khoan: {
    answer: "Để bảo vệ tài khoản trực tuyến (Zalo, Gmail, Facebook, game...), em hãy nhớ 4 nguyên tắc vàng:\n1. Đặt mật khẩu mạnh (ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt như @, #, $).\n2. Không dùng chung một mật khẩu cho nhiều tài khoản.\n3. Bật xác thực 2 bước (2FA - OTP gửi về điện thoại).\n4. Tuyệt đối không chia sẻ mật khẩu cho người khác và cẩn thận không bấm vào các đường link lạ!",
    challenge: "Em thấy mật khẩu `matkhau123` và mật khẩu `TinHoc#2026@Vui` mật khẩu nào an toàn hơn và tại sao?"
  }
};

// API: Chat with AI Companion
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [], grade = 7 } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Nội dung tin nhắn không hợp lệ' });
    }

    const trimmedMsg = message.trim().toLowerCase();

    // If Gemini client is initialized, use gemini-3.8-flash
    if (ai) {
      try {
        const systemInstruction = `Bạn là "🤖 AI Bạn Đồng Hành" - Trợ lý học tập môn Tin học thân thiện, vui vẻ, kiên nhẫn và bổ ích dành riêng cho học sinh THCS Việt Nam (Lớp 6, 7, 8, 9, độ tuổi từ 11 đến 15 tuổi). Hiện học sinh đang học chương trình Tin học ${grade ? `Lớp ${grade}` : 'THCS'}.

Nhiệm vụ và phong cách phản hồi:
1. Trả lời hoàn toàn bằng tiếng Việt trong sáng, dễ hiểu, ấm áp, giàu tính khích lệ, xưng hô thân thiện "AI Bạn Đồng Hành" và "em" hoặc "bạn nhỏ".
2. Giải thích kiến thức Tin học một cách ngắn gọn, sinh động. Nếu có khái niệm trừu tượng (như thuật toán, biến, mạng máy tính, AI, mã nhị phân), hãy dùng ví dụ gần gũi đời thường (như công thức nấu ăn, hộp đựng đồ, xếp hình Lego, bạn bè gửi thư...).
3. Khuyến khích tư duy phản biện và sáng tạo thay vì chỉ cung cấp đáp án máy móc.
4. Cuối mỗi câu trả lời, LUÔN LUÔN kèm theo một câu hỏi nhỏ gợi mở hoặc thử thách tư duy vui nhộn ("🧠 Thử thách suy nghĩ dành cho em:") để học sinh tiếp tục khám phá.
5. Tuyệt đối không cung cấp mã độc, hướng dẫn hack tài khoản, vượt tường lửa trái phép, gian lận thi cử hoặc nội dung độc hại. Hướng dẫn các em sử dụng công nghệ an toàn, có trách nhiệm và bảo vệ sức khỏe khi ngồi máy tính.`;

        // Format history for Gemini
        const contents: Array<{ role: 'user' | 'model'; parts: [{ text: string }] }> = [];
        
        // Add recent conversation history if valid (up to 6 turns)
        if (Array.isArray(history)) {
          for (const item of history.slice(-6)) {
            if (item.sender === 'user' && item.text) {
              contents.push({ role: 'user', parts: [{ text: item.text }] });
            } else if (item.sender === 'ai' && item.text) {
              contents.push({ role: 'model', parts: [{ text: item.text }] });
            }
          }
        }

        contents.push({ role: 'user', parts: [{ text: message }] });

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents,
          config: {
            systemInstruction,
            temperature: 0.7,
            topP: 0.95,
          },
        });

        const replyText = response.text || "Rất vui được cùng em khám phá Tin học! Em muốn hỏi thêm điều gì nữa không?";
        return res.json({ reply: replyText, source: 'gemini' });
      } catch (geminiError) {
        console.warn('Gemini API call failed, using intelligent educational fallback:', geminiError);
      }
    }

    // Smart fallback if Gemini key is not configured or rate-limited
    let matchedKey = '';
    if (trimmedMsg.includes('ai là gì') || trimmedMsg.includes('trí tuệ nhân tạo')) matchedKey = 'ai';
    else if (trimmedMsg.includes('thuật toán')) matchedKey = 'thuat_toan';
    else if (trimmedMsg.includes('biến')) matchedKey = 'bien';
    else if (trimmedMsg.includes('internet')) matchedKey = 'internet';
    else if (trimmedMsg.includes('tìm kiếm')) matchedKey = 'tim_kiem';
    else if (trimmedMsg.includes('bảng tính') || trimmedMsg.includes('excel')) matchedKey = 'bang_tinh';
    else if (trimmedMsg.includes('bảo vệ') || trimmedMsg.includes('mật khẩu') || trimmedMsg.includes('tài khoản')) matchedKey = 'bao_ve_tai_khoan';

    if (matchedKey && FALLBACK_ANSWERS[matchedKey]) {
      const fb = FALLBACK_ANSWERS[matchedKey];
      return res.json({
        reply: `${fb.answer}\n\n🧠 **Thử thách suy nghĩ dành cho em:**\n${fb.challenge}`,
        source: 'knowledge_base',
      });
    }

    // Generic educational fallback
    return res.json({
      reply: `Chào em! Câu hỏi "${message}" của em rất thú vị! Trong môn Tin học THCS, mọi thứ từ phần cứng (chuột, bàn phím, CPU) đến phần mềm (hệ điều hành, bảng tính, ngôn ngữ lập trình) đều được thiết kế để phục vụ đời sống con người.\n\n💡 Để khám phá sâu hơn, em hãy thử hỏi về các chủ đề như: "AI là gì?", "Thuật toán là gì?", "Biến trong lập trình là gì?", hoặc "Cách bảo vệ tài khoản trực tuyến" nhé!\n\n🧠 **Thử thách suy nghĩ dành cho em:**\nTheo em, máy tính có tự suy nghĩ được như con người không, hay nó cần ai lập trình chỉ dẫn?`,
      source: 'knowledge_base',
    });

  } catch (error) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({
      error: 'Có lỗi xảy ra khi xử lý câu trả lời. Vui lòng thử lại!',
    });
  }
});

// Setup Vite or static serving
async function setupServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

setupServer();
