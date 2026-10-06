import { QuizQuestion } from '../types';

export const ALL_QUIZ_QUESTIONS: QuizQuestion[] = [
  // ==========================================
  // LỚP 6 (GRADE 6)
  // ==========================================
  {
    id: 'g6_q1',
    grade: 6,
    topic: 'Thông tin và dữ liệu',
    question: 'Khẳng định nào sau đây là ĐÚNG nhất về mối quan hệ giữa thông tin và dữ liệu?',
    options: [
      'Dữ liệu là thông tin đã được xử lý xong',
      'Thông tin là ý nghĩa được rút ra từ việc xử lý các dữ liệu',
      'Thông tin và dữ liệu là hai khái niệm hoàn toàn giống nhau',
      'Dữ liệu chỉ bao gồm các con số, không có chữ hay hình ảnh'
    ],
    correctAnswer: 1,
    explanation: 'Dữ liệu là các con số, văn bản, hình ảnh, âm thanh thu thập được. Khi xử lý dữ liệu, ta thu được thông tin có ý nghĩa đối với con người.'
  },
  {
    id: 'g6_q2',
    grade: 6,
    topic: 'Máy tính và cộng đồng',
    question: 'Thiết bị nào sau đây là thiết bị VÀO (Input device) của máy tính?',
    options: [
      'Màn hình máy tính',
      'Máy in phun màu',
      'Bàn phím và chuột',
      'Loa nghe nhạc'
    ],
    correctAnswer: 2,
    explanation: 'Bàn phím và chuột dùng để đưa dữ liệu, lệnh từ người dùng vào máy tính xử lý. Màn hình, máy in, loa là các thiết bị RA (Output device).'
  },
  {
    id: 'g6_q3',
    grade: 6,
    topic: 'Mạng máy tính và Internet',
    question: 'Mạng máy tính (Computer Network) là gì?',
    options: [
      'Một tập hợp các máy tính được nối với nhau để chia sẻ dữ liệu và thiết bị',
      'Một phần mềm giúp xem phim và nghe nhạc trên máy tính',
      'Một loại virus máy tính lây qua cổng USB',
      'Bộ vi xử lý trung tâm (CPU) bên trong máy tính'
    ],
    correctAnswer: 0,
    explanation: 'Mạng máy tính là hai hay nhiều thiết bị được kết nối với nhau bằng dây cáp mạng hoặc sóng không dây (Wi-Fi) để trao đổi thông tin và chia sẻ tài nguyên.'
  },
  {
    id: 'g6_q4',
    grade: 6,
    topic: 'Tổ chức, lưu trữ và tìm kiếm thông tin',
    question: 'Để tìm kiếm thông tin về bài học "Lịch sử Thăng Long" chính xác từng từ trên Google, em nên gõ từ khóa như thế nào?',
    options: [
      'Lịch sử Thăng Long',
      '"Lịch sử Thăng Long"',
      'Lịch - sử - Thăng - Long',
      '?Lịch sử Thăng Long?'
    ],
    correctAnswer: 1,
    explanation: 'Đặt cụm từ tìm kiếm trong dấu ngoặc kép "..." giúp máy tìm kiếm chỉ trả về các kết quả chứa chính xác cụm từ đó theo đúng thứ tự.'
  },
  {
    id: 'g6_q5',
    grade: 6,
    topic: 'Đạo đức, pháp luật và văn hóa trong môi trường số',
    question: 'Khi nhận được một email hoặc tin nhắn từ người lạ chứa đường link lạ, em nên làm gì?',
    options: [
      'Bấm ngay vào xem có phần thưởng gì không',
      'Gửi tiếp cho bạn bè trong lớp cùng xem',
      'Không bấm vào link, báo cho bố mẹ hoặc thầy cô biết để xử lý',
      'Điền thông tin cá nhân và mật khẩu vào để nhận quà'
    ],
    correctAnswer: 2,
    explanation: 'Đường link lạ có thể dẫn tới trang web giả mạo lừa đảo hoặc cài mã độc vào máy. Em tuyệt đối không bấm vào và nên báo người lớn.'
  },
  {
    id: 'g6_q6',
    grade: 6,
    topic: 'Thuật toán và lập trình',
    question: 'Thuật toán (Algorithm) được hiểu là gì?',
    options: [
      'Một thiết bị phần cứng cắm vào cổng USB',
      'Một bức tranh được vẽ trên máy tính',
      'Dãy các chỉ dẫn từng bước rõ ràng để giải quyết một nhiệm vụ hay bài toán',
      'Trò chơi điện tử trên điện thoại'
    ],
    correctAnswer: 2,
    explanation: 'Thuật toán là dãy các thao tác hay chỉ dẫn tuần tự, rõ ràng, thực hiện theo thứ tự xác định để giải quyết một bài toán hoặc hoàn thành một công việc.'
  },
  {
    id: 'g6_q7',
    grade: 6,
    topic: 'Mạng máy tính và Internet',
    question: 'Phần mềm nào sau đây là một trình duyệt web (Web browser) phổ biến?',
    options: [
      'Google Chrome',
      'Microsoft Excel',
      'Scratch',
      'Windows Media Player'
    ],
    correctAnswer: 0,
    explanation: 'Google Chrome, Microsoft Edge, Cốc Cốc, Firefox, Safari là các trình duyệt web giúp em truy cập và xem các trang web trên Internet.'
  },
  {
    id: 'g6_q8',
    grade: 6,
    topic: 'Tổ chức, lưu trữ và tìm kiếm thông tin',
    question: 'Trong máy tính, các tệp (files) được sắp xếp và quản lý bên trong gì để dễ tìm kiếm?',
    options: [
      'Các bảng tính',
      'Các thư mục (Folders)',
      'Dây nguồn máy tính',
      'Bàn phím ảo'
    ],
    correctAnswer: 1,
    explanation: 'Thư mục (Folder) giống như những chiếc ngăn kéo dùng để chứa và phân loại các tệp tài liệu, bài tập, hình ảnh ngăn nắp.'
  },
  {
    id: 'g6_q9',
    grade: 6,
    topic: 'An toàn thông tin',
    question: 'Mật khẩu nào sau đây được coi là MẬT KHẨU MẠNH và an toàn nhất?',
    options: [
      '12345678',
      'nguyenvana',
      'Thcs!TinHoc#2026',
      'password'
    ],
    correctAnswer: 2,
    explanation: 'Mật khẩu mạnh cần có từ 8 ký tự trở lên, kết hợp chữ hoa, chữ thường, chữ số và ký tự đặc biệt (!, @, #, $...).'
  },
  {
    id: 'g6_q10',
    grade: 6,
    topic: 'Ứng dụng Tin học',
    question: 'Sơ đồ tư duy (Mindmap) trên máy tính có tác dụng chính là gì?',
    options: [
      'Để tính toán bảng lương tự động',
      'Để biểu diễn các ý tưởng, kiến thức một cách trực quan, sinh động và dễ nhớ',
      'Để nghe nhạc và xem phim hoạt hình',
      'Để phòng chống virus máy tính'
    ],
    correctAnswer: 1,
    explanation: 'Sơ đồ tư duy giúp kết nối các từ khóa, hình ảnh và ý tưởng lại với nhau, giúp não bộ ghi nhớ và sáng tạo hiệu quả.'
  },
  {
    id: 'g6_q11',
    grade: 6,
    topic: 'Máy tính và cộng đồng',
    question: 'Bộ phận nào được ví như "bộ não" điều khiển mọi hoạt động của máy tính?',
    options: [
      'Bộ vi xử lý trung tâm (CPU)',
      'Chuột máy tính',
      'Bộ nguồn máy tính (PSU)',
      'Bàn di chuột'
    ],
    correctAnswer: 0,
    explanation: 'CPU (Central Processing Unit) tiếp nhận, xử lý lệnh và điều khiển mọi hoạt động tính toán của máy tính.'
  },
  {
    id: 'g6_q12',
    grade: 6,
    topic: 'Thuật toán và lập trình',
    question: 'Để mô tả một thuật toán, người ta thường dùng những cách nào sau đây?',
    options: [
      'Chỉ dùng máy ghi âm',
      'Liệt kê từng bước bằng lời và vẽ sơ đồ khối',
      'Chụp ảnh màn hình máy tính',
      'Gửi tin nhắn SMS'
    ],
    correctAnswer: 1,
    explanation: 'Hai cách thông dụng nhất để mô tả thuật toán cho con người hiểu là liệt kê từng bước bằng ngôn ngữ tự nhiên hoặc dùng sơ đồ khối (Flowchart).'
  },

  // ==========================================
  // LỚP 7 (GRADE 7)
  // ==========================================
  {
    id: 'g7_q1',
    grade: 7,
    topic: 'Bảng tính điện tử',
    question: 'Trong bảng tính Excel, địa chỉ của một ô tính (Cell) được xác định bởi yếu tố nào?',
    options: [
      'Tên hàng trước, tên cột sau (Ví dụ: 5B)',
      'Tên cột trước, tên hàng sau (Ví dụ: B5)',
      'Chỉ cần số thứ tự hàng (Ví dụ: 5)',
      'Tên sheet và màu sắc của ô'
    ],
    correctAnswer: 1,
    explanation: 'Địa chỉ ô tính là giao điểm của một cột (chữ cái A, B, C...) và một hàng (chữ số 1, 2, 3...), được viết là tên cột trước, tên hàng sau (Ví dụ: B5, C10).'
  },
  {
    id: 'g7_q2',
    grade: 7,
    topic: 'Bảng tính điện tử',
    question: 'Để bắt đầu nhập một công thức tính toán trong bảng tính điện tử, ký tự đầu tiên bắt buộc phải là gì?',
    options: [
      'Dấu cộng (+)',
      'Dấu chấm hỏi (?)',
      'Dấu bằng (=)',
      'Dấu hai chấm (:)'
    ],
    correctAnswer: 2,
    explanation: 'Mọi công thức hoặc hàm trong phần mềm bảng tính (Excel, Google Sheets) đều phải bắt đầu bằng dấu bằng (=).'
  },
  {
    id: 'g7_q3',
    grade: 7,
    topic: 'Bảng tính điện tử',
    question: 'Hàm nào sau đây được dùng để tính TRUNG BÌNH CỘNG của một dãy các ô số?',
    options: [
      '=SUM()',
      '=AVERAGE()',
      '=MAX()',
      '=COUNT()'
    ],
    correctAnswer: 1,
    explanation: 'Hàm =AVERAGE(...) dùng để tính trung bình cộng. =SUM(...) dùng để tính tổng, =MAX(...) tìm giá trị lớn nhất, =COUNT(...) đếm số ô chứa số.'
  },
  {
    id: 'g7_q4',
    grade: 7,
    topic: 'Thiết bị vào và ra',
    question: 'Thiết bị nào vừa có thể là thiết bị VÀO, vừa là thiết bị RA?',
    options: [
      'Màn hình cảm ứng (Touchscreen)',
      'Bàn phím cơ',
      'Chuột quang',
      'Máy in đen trắng'
    ],
    correctAnswer: 0,
    explanation: 'Màn hình cảm ứng (trên điện thoại, máy tính bảng) hiển thị hình ảnh (thiết bị RA) đồng thời nhận thao tác chạm ngón tay của người dùng (thiết bị VÀO).'
  },
  {
    id: 'g7_q5',
    grade: 7,
    topic: 'Đạo đức, pháp luật và văn hóa trong môi trường số',
    question: 'Hành vi nào sau đây là VI PHẠM bản quyền khi sử dụng thông tin trên mạng Internet?',
    options: [
      'Tự làm một bài thuyết trình và ghi rõ tác giả những bức ảnh tham khảo',
      'Sao chép nguyên bài văn của bạn khác trên mạng rồi nộp cho thầy cô và nhận là của mình',
      'Mua phần mềm có bản quyền để cài đặt học tập',
      'Chia sẻ bài hát miễn phí theo đúng giấy phép sáng tạo mở'
    ],
    correctAnswer: 1,
    explanation: 'Sao chép tác phẩm của người khác mà không xin phép, không trích dẫn nguồn và mạo nhận là của mình là hành vi đạo văn, vi phạm bản quyền.'
  },
  {
    id: 'g7_q6',
    grade: 7,
    topic: 'Thuật toán và lập trình',
    question: 'Trong thuật toán tìm kiếm tuần tự (Sequential Search), máy tính sẽ tìm kiếm như thế nào?',
    options: [
      'Nhảy ngẫu nhiên vào giữa danh sách',
      'Kiểm tra lần lượt từng phần tử từ đầu đến cuối danh sách cho đến khi tìm thấy hoặc hết danh sách',
      'Chỉ kiểm tra phần tử đầu tiên và cuối cùng',
      'Tự động xóa các phần tử không trùng khớp'
    ],
    correctAnswer: 1,
    explanation: 'Tìm kiếm tuần tự duyệt lần lượt từng phần tử từ vị trí đầu tiên đến cuối danh sách, so sánh với giá trị cần tìm.'
  },
  {
    id: 'g7_q7',
    grade: 7,
    topic: 'Bảng tính điện tử',
    question: 'Giả sử tại ô A1 = 10, A2 = 20, công thức `=SUM(A1:A2, 5)` sẽ cho kết quả là bao nhiêu?',
    options: [
      '30',
      '35',
      '25',
      '200'
    ],
    correctAnswer: 1,
    explanation: '=SUM(A1:A2, 5) = A1 + A2 + 5 = 10 + 20 + 5 = 35.'
  },
  {
    id: 'g7_q8',
    grade: 7,
    topic: 'Ứng dụng Tin học',
    question: 'Dạng biểu đồ nào sau đây thích hợp nhất để thể hiện TỶ LỆ PHẦN TRĂM các khoản chi tiêu?',
    options: [
      'Biểu đồ hình tròn (Pie chart)',
      'Biểu đồ cột (Column chart)',
      'Biểu đồ đường gấp khúc (Line chart)',
      'Biểu đồ phân tán (Scatter chart)'
    ],
    correctAnswer: 0,
    explanation: 'Biểu đồ hình tròn (Pie Chart) rất trực quan để so sánh tỷ lệ phần trăm từng phần so với tổng thể 100%.'
  },
  {
    id: 'g7_q9',
    grade: 7,
    topic: 'Mạng máy tính và Internet',
    question: 'Mạng xã hội (Social Network) mang lại lợi ích gì nếu được sử dụng đúng cách?',
    options: [
      'Chỉ để chơi game thâu đêm không cần ngủ',
      'Kết nối bạn bè, giao lưu học tập, chia sẻ thông tin bổ ích và kỹ năng sống',
      'Bình luận tiêu cực, bắt nạt người khác ẩn danh',
      'Đọc tin tức giật gân chưa được kiểm chứng'
    ],
    correctAnswer: 1,
    explanation: 'Mạng xã hội là kênh giao lưu, trao đổi học tập và cập nhật kiến thức nhanh chóng nếu học sinh biết sử dụng an toàn và có chọn lọc.'
  },
  {
    id: 'g7_q10',
    grade: 7,
    topic: 'Thuật toán và lập trình',
    question: 'Điều kiện TIÊN QUYẾT để có thể áp dụng thuật toán tìm kiếm nhị phân (Binary Search) là gì?',
    options: [
      'Danh sách phải có đúng 10 phần tử',
      'Danh sách phải là các con số chẵn',
      'Danh sách đã được sắp xếp theo thứ tự (tăng dần hoặc giảm dần)',
      'Danh sách phải chứa hình ảnh'
    ],
    correctAnswer: 2,
    explanation: 'Thuật toán tìm kiếm nhị phân chỉ áp dụng được khi danh sách đã được sắp xếp theo thứ tự xác định.'
  },
  {
    id: 'g7_q11',
    grade: 7,
    topic: 'An toàn thông tin',
    question: 'Phần mềm độc hại (Malware) bao gồm những loại nào?',
    options: [
      'Virus, Trojan, Worm (sâu máy tính), phần mềm gián điệp (Spyware)',
      'Phần mềm gõ tiếng Việt Unikey',
      'Phần mềm vẽ Paint',
      'Hệ điều hành Windows'
    ],
    correctAnswer: 0,
    explanation: 'Malware là tên gọi chung cho các phần mềm được thiết kế để gây hại, phá hoại hoặc đánh cắp thông tin như Virus, Trojan, Ransomware...'
  },
  {
    id: 'g7_q12',
    grade: 7,
    topic: 'Bảng tính điện tử',
    question: 'Ký hiệu nào dùng để nhân hai số trong công thức bảng tính?',
    options: [
      'Ký tự chữ x',
      'Dấu hoa thị (*)',
      'Dấu chấm (.)',
      'Dấu hai chấm (:)'
    ],
    correctAnswer: 1,
    explanation: 'Trong tin học và bảng tính, phép nhân dùng dấu hoa thị (*) và phép chia dùng dấu gạch chéo (/ ).'
  },

  // ==========================================
  // LỚP 8 (GRADE 8)
  // ==========================================
  {
    id: 'g8_q1',
    grade: 8,
    topic: 'Thuật toán và lập trình',
    question: 'Trong lập trình, BIẾN (Variable) được dùng để làm gì?',
    options: [
      'Để trang trí màn hình máy tính cho đẹp hơn',
      'Lưu trữ dữ liệu có thể thay đổi giá trị trong quá trình thực hiện chương trình',
      'Tắt nguồn máy tính khi xong bài',
      'Đổi màu sắc của con trỏ chuột'
    ],
    correctAnswer: 1,
    explanation: 'Biến là một vùng nhớ được đặt tên dùng để lưu trữ dữ liệu, giá trị của biến có thể thay đổi trong khi chương trình chạy.'
  },
  {
    id: 'g8_q2',
    grade: 8,
    topic: 'Thuật toán và lập trình',
    question: 'Ba cấu trúc điều khiển cơ bản trong mọi ngôn ngữ lập trình là:',
    options: [
      'Vào, Ra, Xử lý',
      'Tuần tự, Rẽ nhánh, Lặp',
      'Cộng, Trừ, Nhân, Chia',
      'File, Folder, Desktop'
    ],
    correctAnswer: 1,
    explanation: 'Ba cấu trúc điều khiển nền tảng của lập trình có cấu trúc là: Cấu trúc tuần tự (Sequence), Cấu trúc rẽ nhánh (Selection/Branching) và Cấu trúc lặp (Iteration/Loop).'
  },
  {
    id: 'g8_q3',
    grade: 8,
    topic: 'Thuật toán và lập trình',
    question: 'Cấu trúc rẽ nhánh "Nếu... thì..." (IF... THEN...) thường được dùng khi nào?',
    options: [
      'Khi cần thực hiện một việc lặp đi lặp lại 100 lần',
      'Khi chương trình cần kiểm tra một điều kiện để quyết định có thực hiện lệnh hay không',
      'Khi cần in dữ liệu ra giấy',
      'Khi kết nối máy in vào cổng USB'
    ],
    correctAnswer: 1,
    explanation: 'Cấu trúc rẽ nhánh kiểm tra một biểu thức điều kiện (Đúng/Sai). Nếu điều kiện thỏa mãn thì thực hiện khối lệnh tương ứng.'
  },
  {
    id: 'g8_q4',
    grade: 8,
    topic: 'Thuật toán và lập trình',
    question: 'HẰNG (Constant) khác với BIẾN (Variable) ở điểm nào?',
    options: [
      'Hằng có giá trị không đổi trong suốt quá trình chạy chương trình',
      'Hằng không thể đặt tên được',
      'Biến không thể chứa số thực',
      'Hằng chỉ dùng được trong phần mềm vẽ hình'
    ],
    correctAnswer: 0,
    explanation: 'Hằng là đại lượng có giá trị cố định không thay đổi trong suốt quá trình chạy chương trình (Ví dụ: số PI = 3.14159).'
  },
  {
    id: 'g8_q5',
    grade: 8,
    topic: 'Dữ liệu và thông tin',
    question: 'Đơn vị đo dung lượng thông tin cơ bản nhỏ nhất của máy tính là gì?',
    options: [
      'Byte',
      'Bit',
      'Kilobyte (KB)',
      'Gigabyte (GB)'
    ],
    correctAnswer: 1,
    explanation: 'Bit (viết tắt của Binary Digit) là đơn vị nhỏ nhất, nhận một trong hai giá trị là 0 hoặc 1. 1 Byte = 8 bits.'
  },
  {
    id: 'g8_q6',
    grade: 8,
    topic: 'Đạo đức, pháp luật và văn hóa trong môi trường số',
    question: 'Hiện tượng "Bắt nạt qua mạng" (Cyberbullying) có thể biểu hiện qua hành vi nào?',
    options: [
      'Hướng dẫn bạn cách cài đặt phần mềm học tập',
      'Nhắn tin xúc phạm, chế giễu ngoại hình, lập hội nhóm tẩy chay bạn trên mạng xã hội',
      'Thả tim vào bức ảnh bạn vừa đăng',
      'Chia sẻ một câu đố toán học vui lên nhóm lớp'
    ],
    correctAnswer: 1,
    explanation: 'Cyberbullying là việc dùng công nghệ để đe dọa, xúc phạm, làm tổn thương tâm lý người khác. Đây là hành vi xấu cần được ngăn chặn.'
  },
  {
    id: 'g8_q7',
    grade: 8,
    topic: 'Thuật toán và lập trình',
    question: 'Trong một vòng lặp, điều gì sẽ xảy ra nếu điều kiện dừng KHÔNG BAO GIỜ xảy ra?',
    options: [
      'Chương trình chạy nhanh gấp đôi',
      'Chương trình rơi vào trạng thái lặp vô tận (Infinite loop) và có thể bị treo',
      'Máy tính tự động tắt nguồn',
      'Chương trình tự động xóa chính nó'
    ],
    correctAnswer: 1,
    explanation: 'Lặp vô tận xảy ra khi điều kiện thoát vòng lặp không bao giờ thỏa mãn, khiến máy tính chạy lặp mãi không dừng và bị treo.'
  },
  {
    id: 'g8_q8',
    grade: 8,
    topic: 'Ứng dụng Tin học',
    question: 'Để xử lý âm thanh hoặc video trên máy tính, phần mềm cần chuyển đổi tín hiệu thực tế sang dạng gì?',
    options: [
      'Tín hiệu tương tự (Analog)',
      'Dữ liệu số (Dãy bit 0 và 1)',
      'Tín hiệu sóng điện từ',
      'Dữ liệu giấy in'
    ],
    correctAnswer: 1,
    explanation: 'Máy tính chỉ xử lý dữ liệu dưới dạng số hóa (Digital), tức là dãy các chữ số nhị phân 0 và 1.'
  },
  {
    id: 'g8_q9',
    grade: 8,
    topic: 'An toàn thông tin',
    question: 'Phần mềm chống virus (Antivirus) hoạt động dựa trên nguyên lý nào?',
    options: [
      'Rút dây nguồn máy tính khi phát hiện nguy cơ',
      'Quét các tệp tin để phát hiện mã độc dựa trên dấu hiệu nhận diện và hành vi đáng ngờ',
      'Tự động tăng dung lượng ổ cứng',
      'Chặn tất cả các trang web học tập'
    ],
    correctAnswer: 1,
    explanation: 'Phần mềm diệt virus quét tệp tin và so sánh với cơ sở dữ liệu mẫu virus đã biết, hoặc phân tích hành vi bất thường của các chương trình.'
  },
  {
    id: 'g8_q10',
    grade: 8,
    topic: 'Thuật toán và lập trình',
    question: 'Khi viết chương trình, việc "chú thích" (Comment) có ý nghĩa gì?',
    options: [
      'Làm cho máy tính thực hiện lệnh nhanh hơn',
      'Giải thích ý nghĩa các dòng mã giúp con người dễ đọc và bảo trì, máy tính sẽ bỏ qua khi biên dịch',
      'Bắt buộc phải có để chương trình chạy được',
      'Dùng để đặt mật khẩu cho tệp mã nguồn'
    ],
    correctAnswer: 1,
    explanation: 'Chú thích là các dòng ghi chú dành cho lập trình viên đọc, máy tính sẽ không thực thi các dòng chú thích này.'
  },

  // ==========================================
  // LỚP 9 (GRADE 9)
  // ==========================================
  {
    id: 'g9_q1',
    grade: 9,
    topic: 'Trí tuệ nhân tạo',
    question: 'Trí tuệ nhân tạo (AI - Artificial Intelligence) KHÔNG có đặc điểm nào sau đây?',
    options: [
      'Có khả năng học hỏi từ dữ liệu (Machine Learning)',
      'Có khả năng nhận diện hình ảnh và tiếng nói',
      'Có cảm xúc và ý thức độc lập giống như con người',
      'Có khả năng xử lý lượng dữ liệu khổng lồ trong thời gian ngắn'
    ],
    correctAnswer: 2,
    explanation: 'AI hiện nay là các mô hình toán học và thuật toán xử lý dữ liệu thông minh, máy tính chưa có cảm xúc, tình cảm hay ý thức tự chủ như con người.'
  },
  {
    id: 'g9_q2',
    grade: 9,
    topic: 'Trí tuệ nhân tạo',
    question: 'Ứng dụng nào sau đây là một ví dụ điển hình của Trí tuệ nhân tạo trong đời sống?',
    options: [
      'Tính năng nhận diện khuôn mặt để mở khóa điện thoại (Face ID)',
      'Chiếc quạt máy chạy bằng động cơ điện',
      'Bóng đèn sợi đốt',
      'Chiếc đồng hồ kim cơ học'
    ],
    correctAnswer: 0,
    explanation: 'Nhận diện khuôn mặt, trợ lý giọng nói thông minh, xe tự lái, dịch thuật tự động đều là các ứng dụng tiêu biểu của AI.'
  },
  {
    id: 'g9_q3',
    grade: 9,
    topic: 'An toàn thông tin',
    question: 'Xác thực hai yếu tố (2FA - Two-Factor Authentication) giúp bảo vệ tài khoản như thế nào?',
    options: [
      'Yêu cầu nhập mật khẩu hai lần liên tiếp',
      'Ngoài mật khẩu chính, người dùng cần cung cấp thêm mã xác thực thứ hai (như mã OTP gửi về điện thoại)',
      'Tự động đổi mật khẩu sau mỗi 5 phút',
      'Khóa tài khoản vĩnh viễn sau 1 lần đăng nhập'
    ],
    correctAnswer: 1,
    explanation: '2FA yêu cầu 2 bằng chứng: điều bạn biết (mật khẩu) và điều bạn có (điện thoại nhận mã OTP), giúp tài khoản an toàn ngay cả khi bị lộ mật khẩu.'
  },
  {
    id: 'g9_q4',
    grade: 9,
    topic: 'Ứng dụng Tin học',
    question: 'Điện toán đám mây (Cloud Computing) mang lại lợi ích nổi bật nào?',
    options: [
      'Lưu trữ dữ liệu và sử dụng phần mềm qua mạng Internet mà không phụ thuộc vào một máy tính duy nhất',
      'Làm mát thùng máy tính khi trời nóng',
      'Không cần kết nối mạng vẫn truy cập được dữ liệu từ xa',
      'Tự động viết hộ bài kiểm tra'
    ],
    correctAnswer: 0,
    explanation: 'Điện toán đám mây (như Google Drive, OneDrive) cho phép lưu trữ, truy cập dữ liệu và chạy ứng dụng từ bất kỳ đâu chỉ cần có mạng Internet.'
  },
  {
    id: 'g9_q5',
    grade: 9,
    topic: 'Đạo đức, pháp luật và văn hóa trong môi trường số',
    question: 'Thuật ngữ "Dấu chân số" (Digital Footprint) ám chỉ điều gì?',
    options: [
      'Dấu vết bàn chân của người dùng khi bước vào phòng máy tính',
      'Tất cả những thông tin, dấu vết và dữ liệu em để lại trên môi trường mạng khi lướt web, đăng bài, tìm kiếm',
      'Kích thước của bàn phím máy tính',
      'Loại mực in dùng trong máy in laze'
    ],
    correctAnswer: 1,
    explanation: 'Dấu chân số là những dữ liệu em để lại trên Internet (lịch sử duyệt web, ảnh đăng, bình luận). Chúng có thể tồn tại rất lâu và ảnh hưởng đến uy tín số cá nhân.'
  },
  {
    id: 'g9_q6',
    grade: 9,
    topic: 'An toàn thông tin',
    question: 'Tấn công giả mạo (Phishing) là hình thức lừa đảo như thế nào?',
    options: [
      'Kẻ xấu đập vỡ bàn phím của nạn nhân',
      'Kẻ xấu giả danh tổ chức uy tín (ngân hàng, trường học) gửi liên kết giả để đánh cắp tên đăng nhập, mật khẩu',
      'Dùng máy quét laser để quét màn hình',
      'Cắt đứt dây mạng cáp quang'
    ],
    correctAnswer: 1,
    explanation: 'Phishing là hình thức lừa đảo tinh vi giả mạo các trang web tin cậy để dụ dỗ người dùng tự nhập mật khẩu, mã OTP hoặc số thẻ ngân hàng.'
  },
  {
    id: 'g9_q7',
    grade: 9,
    topic: 'Dữ liệu và thông tin',
    question: 'Dữ liệu lớn (Big Data) được đặc trưng bởi các chữ "V" kinh điển nào?',
    options: [
      'Volume (Khối lượng lớn), Velocity (Tốc độ sinh dữ liệu cao), Variety (Đa dạng các loại dữ liệu)',
      'Virus, Vector, Version',
      'Video, Voice, Visual',
      'Vip, Value, View'
    ],
    correctAnswer: 0,
    explanation: 'Big Data thường được mô tả bởi các đặc trưng cốt lõi: Khối lượng cực lớn (Volume), Tốc độ tạo ra siêu nhanh (Velocity) và Đa dạng về định dạng (Variety).'
  },
  {
    id: 'g9_q8',
    grade: 9,
    topic: 'Ứng dụng Tin học',
    question: 'Phần mềm mô phỏng (Simulation Software) có ứng dụng quan trọng nào trong giáo dục và nghiên cứu?',
    options: [
      'Chỉ để xem tranh ảnh tĩnh',
      'Mô phỏng lại các hiện tượng khoa học, thí nghiệm nguy hiểm hoặc tốn kém trong môi trường ảo an toàn',
      'Chặn quảng cáo trên YouTube',
      'Tự động tăng điểm kiểm tra'
    ],
    correctAnswer: 1,
    explanation: 'Phần mềm mô phỏng (như mô phỏng quỹ đạo hành tinh, giải phẫu sinh học, phản ứng hóa học) giúp học sinh học tập trực quan và an toàn tuyệt đối.'
  },
  {
    id: 'g9_q9',
    grade: 9,
    topic: 'Máy tính và cộng đồng',
    question: 'Nghề nghiệp nào sau đây thuộc lĩnh vực Công nghệ thông tin (CNTT)?',
    options: [
      'Kỹ sư phần mềm / Lập trình viên',
      'Chuyên viên an ninh mạng (Cybersecurity)',
      'Nhà khoa học dữ liệu (Data Scientist)',
      'Cả A, B và C đều đúng'
    ],
    correctAnswer: 3,
    explanation: 'Ngành CNTT rất đa dạng với các ngành nghề mũi nhọn như Lập trình viên, Chuyên viên bảo mật, Thiết kế giao diện (UI/UX), Phân tích dữ liệu, Quản trị mạng...'
  },
  {
    id: 'g9_q10',
    grade: 9,
    topic: 'Trí tuệ nhân tạo',
    question: 'Học máy (Machine Learning) là gì?',
    options: [
      'Việc con người học cách lắp ráp từng chiếc máy tính',
      'Một nhánh của AI cho phép máy tính tự học hỏi và cải thiện hiệu quả từ dữ liệu mà không cần lập trình chi tiết từng quy tắc',
      'Việc máy tính tự động in tài liệu ra giấy',
      'Phần mềm gõ mười ngón tay'
    ],
    correctAnswer: 1,
    explanation: 'Machine Learning giúp máy tính tự tìm ra quy luật từ lượng lớn dữ liệu huấn luyện, từ đó đưa ra dự đoán hoặc quyết định chính xác.'
  }
];
