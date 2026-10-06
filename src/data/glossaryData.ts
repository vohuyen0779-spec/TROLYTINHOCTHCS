import { GlossaryTerm } from '../types';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  // ==========================================
  // LỚP 6 (GRADE 6)
  // ==========================================
  {
    id: 'term_thong_tin',
    term: 'Thông tin',
    englishTerm: 'Information',
    grade: 6,
    category: 'Cơ bản',
    definition: 'Những hiểu biết mà con người tiếp nhận được về thế giới xung quanh và về chính mình thông qua các giác quan hoặc qua các thiết bị ghi nhận.',
    example: 'Khi nhìn đồng hồ thấy 7:00 sáng, em biết đã đến giờ chuẩn bị vào lớp học. 7:00 sáng mang lại "thông tin" về thời gian.',
    challenge: {
      question: 'Khi em nghe thấy tiếng trống trường vang lên "Tùng! Tùng! Tùng!", em nhận được thông tin gì?',
      options: [
        'Trời sắp đổ mưa to',
        'Đã đến giờ vào lớp hoặc ra chơi',
        'Có bạn nhắn tin trên Zalo',
        'Máy tính hết pin'
      ],
      correctAnswer: 1,
      explanation: 'Tiếng trống trường là âm thanh mang thông tin báo hiệu giờ học hoặc giờ ra chơi cho học sinh và thầy cô.'
    }
  },
  {
    id: 'term_du_lieu',
    term: 'Dữ liệu',
    englishTerm: 'Data',
    grade: 6,
    category: 'Cơ bản',
    definition: 'Thông tin dưới dạng được lưu trữ và biểu diễn trong máy tính (như các con số, chữ cái, hình ảnh, video, âm thanh) để máy tính có thể xử lý.',
    example: 'Một bức ảnh chụp cả lớp lưu trong điện thoại với kích thước 3 Megabyte chính là dữ liệu hình ảnh.',
    challenge: {
      question: 'Văn bản bài thơ "Lượm" gõ trong tệp Word được gọi là gì đối với máy tính?',
      options: [
        'Dữ liệu dạng văn bản (Text)',
        'Dữ liệu dạng âm thanh (Audio)',
        'Dữ liệu dạng phần cứng (Hardware)',
        'Thiết bị ngoại vi'
      ],
      correctAnswer: 0,
      explanation: 'Các chữ cái và câu văn lưu trong tệp Word là dữ liệu dạng văn bản.'
    }
  },
  {
    id: 'term_may_tinh',
    term: 'Máy tính',
    englishTerm: 'Computer',
    grade: 6,
    category: 'Phần cứng',
    definition: 'Thiết bị điện tử có khả năng tiếp nhận dữ liệu (Vào), lưu trữ, xử lý thông tin theo chương trình đã được lập sẵn, và đưa kết quả ra (Ra).',
    example: 'Laptop em dùng học bài, máy tính bảng để vẽ, điện thoại thông minh đều là các dạng máy tính điện tử.',
    challenge: {
      question: 'Bốn khối chức năng cơ bản của máy tính theo kiến trúc Von Neumann là:',
      options: [
        'Màn hình, Chuột, Bàn phím, Loa',
        'Thiết bị vào, Bộ nhớ, Bộ xử lý (CPU), Thiết bị ra',
        'Sách, Vở, Bút, Thước kẻ',
        'Phần mềm, Dây điện, Quạt, Ổ cắm'
      ],
      correctAnswer: 1,
      explanation: 'Máy tính gồm: Thiết bị vào (Input), Bộ nhớ (Memory), Bộ xử lý trung tâm (CPU) và Thiết bị ra (Output).'
    }
  },
  {
    id: 'term_thiet_bi_vao',
    term: 'Thiết bị vào',
    englishTerm: 'Input Device',
    grade: 6,
    category: 'Phần cứng',
    definition: 'Các thiết bị dùng để thu nhận thông tin hoặc mệnh lệnh từ người dùng rồi chuyển đổi thành dữ liệu máy tính hiểu được.',
    example: 'Bàn phím (gõ chữ), Chuột (chỉ trỏ bấm chọn), Microphone (thu giọng nói), Webcam (thu hình ảnh).',
    challenge: {
      question: 'Khi em muốn đọc nội dung một bức ảnh in trên giấy vào máy tính, em dùng thiết bị nào?',
      options: [
        'Máy in (Printer)',
        'Máy quét (Scanner)',
        'Loa (Speaker)',
        'Tai nghe (Headphone)'
      ],
      correctAnswer: 1,
      explanation: 'Máy quét (Scanner) là thiết bị vào dùng để số hóa hình ảnh, tài liệu giấy vào máy tính.'
    }
  },
  {
    id: 'term_thiet_bi_ra',
    term: 'Thiết bị ra',
    englishTerm: 'Output Device',
    grade: 6,
    category: 'Phần cứng',
    definition: 'Các thiết bị nhận dữ liệu đã được máy tính xử lý để hiển thị hoặc phát ra dạng mà con người có thể cảm nhận được.',
    example: 'Màn hình (hiển thị hình ảnh/chữ), Máy in (in ra giấy), Loa (phát âm thanh).',
    challenge: {
      question: 'Thiết bị nào sau đây KHÔNG PHẢI là thiết bị ra?',
      options: [
        'Màn hình vi tính',
        'Máy in',
        'Chuột quang',
        'Loa Bluetooth'
      ],
      correctAnswer: 2,
      explanation: 'Chuột quang là thiết bị vào (Input device) dùng để điều khiển con trỏ.'
    }
  },
  {
    id: 'term_he_dieu_hanh',
    term: 'Hệ điều hành',
    englishTerm: 'Operating System (OS)',
    grade: 6,
    category: 'Phần mềm',
    definition: 'Phần mềm hệ thống quan trọng nhất, đóng vai trò cầu nối trung gian điều khiển phần cứng và tạo môi trường cho các ứng dụng khác hoạt động.',
    example: 'Windows 11 trên máy tính, Android hoặc iOS trên điện thoại thông minh, macOS trên máy Macbook.',
    challenge: {
      question: 'Nếu máy tính không được cài hệ điều hành thì điều gì sẽ xảy ra?',
      options: [
        'Máy tính vẫn chơi được game bình thường',
        'Máy tính không thể khởi động và sử dụng được các phần mềm',
        'Máy tính tự động kết nối Wi-Fi',
        'Màn hình sáng mãi không tắt'
      ],
      correctAnswer: 1,
      explanation: 'Hệ điều hành là nền tảng quản lý tài nguyên, không có hệ điều hành máy tính không thể vận hành.'
    }
  },
  {
    id: 'term_mang_may_tinh',
    term: 'Mạng máy tính',
    englishTerm: 'Computer Network',
    grade: 6,
    category: 'Mạng',
    definition: 'Tập hợp các máy tính và thiết bị được kết nối với nhau để truyền dữ liệu và chia sẻ tài nguyên (như tệp tin, máy in).',
    example: 'Phòng máy vi tính của trường học nơi tất cả 40 máy tính có thể cùng in chung một máy in qua mạng LAN.',
    challenge: {
      question: 'Mạng kết nối các máy tính trong phạm vi hẹp như một phòng học hay tòa nhà được gọi là gì?',
      options: [
        'Mạng cục bộ (LAN)',
        'Mạng diện rộng (WAN)',
        'Mạng toàn cầu (Internet)',
        'Mạng vệ tinh'
      ],
      correctAnswer: 0,
      explanation: 'Mạng LAN (Local Area Network) là mạng cục bộ kết nối trong phạm vi nhỏ như văn phòng, gia đình, trường học.'
    }
  },
  {
    id: 'term_internet',
    term: 'Internet',
    englishTerm: 'Internet',
    grade: 6,
    category: 'Mạng',
    definition: 'Mạng máy tính toàn cầu kết nối hàng triệu mạng máy tính nhỏ trên khắp thế giới thông qua giao thức truyền thông chuẩn.',
    example: 'Nhờ có Internet, em ở Hà Nội có thể gọi video học trực tuyến với bạn bè ở TP. Hồ Chí Minh hay nước ngoài.',
    challenge: {
      question: 'Ai là người sở hữu toàn bộ mạng Internet trên thế giới?',
      options: [
        'Tập đoàn Google',
        'Tập đoàn Microsoft',
        'Không có một cá nhân hay tổ chức duy nhất nào làm chủ Internet',
        'Chính phủ của một quốc gia duy nhất'
      ],
      correctAnswer: 2,
      explanation: 'Internet là mạng công cộng mở toàn cầu, không thuộc sở hữu của riêng bất kỳ một cá nhân hay tổ chức nào.'
    }
  },
  {
    id: 'term_world_wide_web',
    term: 'World Wide Web',
    englishTerm: 'WWW',
    grade: 6,
    category: 'Mạng',
    definition: 'Không gian thông tin toàn cầu gồm hàng tỷ trang web siêu văn bản liên kết với nhau qua Internet, được xem qua trình duyệt.',
    example: 'Các địa chỉ bắt đầu bằng https://www.wikipedia.org mà em tra cứu thông tin mỗi ngày.',
    challenge: {
      question: 'Người phát minh ra World Wide Web vào năm 1989 là ai?',
      options: [
        'Sir Tim Berners-Lee',
        'Bill Gates',
        'Steve Jobs',
        'Mark Zuckerberg'
      ],
      correctAnswer: 0,
      explanation: 'Sir Tim Berners-Lee là nhà khoa học người Anh đã phát minh ra World Wide Web tại viện CERN.'
    }
  },
  {
    id: 'term_trinh_duyet',
    term: 'Trình duyệt',
    englishTerm: 'Web Browser',
    grade: 6,
    category: 'Phần mềm',
    definition: 'Phần mềm ứng dụng cho phép người dùng truy cập, hiển thị và tương tác với các trang web trên mạng Internet.',
    example: 'Google Chrome, Microsoft Edge, Cốc Cốc, Safari, Mozilla Firefox.',
    challenge: {
      question: 'Khi em muốn vào xem video học tập trên trang web hoclieu.vn, em cần mở phần mềm nào trước tiên?',
      options: [
        'Microsoft PowerPoint',
        'Trình duyệt web (như Chrome hoặc Cốc Cốc)',
        'Phần mềm giải nén WinRAR',
        'Phần mềm gõ Unikey'
      ],
      correctAnswer: 1,
      explanation: 'Trình duyệt web là công cụ dùng để mở và duyệt các trang web qua mạng.'
    }
  },

  // ==========================================
  // LỚP 7 (GRADE 7)
  // ==========================================
  {
    id: 'term_bang_tinh',
    term: 'Bảng tính',
    englishTerm: 'Spreadsheet',
    grade: 7,
    category: 'Bảng tính',
    definition: 'Bảng gồm các hàng và cột giao nhau tạo thành các ô, chuyên dùng để nhập, tổ chức, tính toán số liệu và vẽ biểu đồ trực quan.',
    example: 'Bảng tính quản lý điểm các môn học trong kỳ của học sinh kèm điểm trung bình tự động tính.',
    challenge: {
      question: 'Phần mềm bảng tính điện tử phổ biến nhất hiện nay là gì?',
      options: [
        'Microsoft Excel và Google Sheets',
        'Adobe Photoshop',
        'Scratch',
        'Windows Media Player'
      ],
      correctAnswer: 0,
      explanation: 'Microsoft Excel và Google Sheets là hai phần mềm bảng tính thông dụng nhất.'
    }
  },
  {
    id: 'term_o_tinh',
    term: 'Ô tính',
    englishTerm: 'Cell',
    grade: 7,
    category: 'Bảng tính',
    definition: 'Vùng giao nhau giữa một hàng và một cột trong bảng tính, dùng để chứa một giá trị dữ liệu (số, văn bản hoặc công thức).',
    example: 'Ô tính ở cột C và hàng 4 được gọi là ô C4, chứa số điểm 9.5.',
    challenge: {
      question: 'Một ô tính trong Excel có thể chứa những loại dữ liệu nào?',
      options: [
        'Chỉ chứa được các con số',
        'Dữ liệu số, dữ liệu văn bản, thời gian và công thức toán học',
        'Chỉ chứa được màu sắc',
        'Không thể chứa văn bản có dấu'
      ],
      correctAnswer: 1,
      explanation: 'Ô tính có thể chứa đa dạng loại dữ liệu: số, chữ, ngày tháng, công thức tính toán...'
    }
  },
  {
    id: 'term_dia_chi_o',
    term: 'Địa chỉ ô',
    englishTerm: 'Cell Address',
    grade: 7,
    category: 'Bảng tính',
    definition: 'Tên định danh duy nhất của ô tính được ghép từ chữ cái tên cột và số thứ tự của hàng giao nhau tại ô đó.',
    example: 'Ô tính nằm ở cột D và hàng 8 có địa chỉ là D8.',
    challenge: {
      question: 'Địa chỉ nào sau đây được viết ĐÚNG theo quy tắc trong bảng tính?',
      options: [
        'A10',
        '10A',
        '#A10',
        'A-10'
      ],
      correctAnswer: 0,
      explanation: 'Địa chỉ ô luôn viết tên cột (chữ cái) trước, sau đó đến số thứ tự hàng (A10, B2, C15).'
    }
  },
  {
    id: 'term_cong_thuc',
    term: 'Công thức',
    englishTerm: 'Formula',
    grade: 7,
    category: 'Bảng tính',
    definition: 'Biểu thức tính toán bắt đầu bằng dấu bằng (=), kết hợp các giá trị, địa chỉ ô và các phép toán (+, -, *, /) để tạo ra giá trị mới.',
    example: 'Công thức `=B2 + C2 * 2` dùng để tính tổng điểm hệ số 1 và hệ số 2.',
    challenge: {
      question: 'Nếu em nhập vào ô tính `5 + 10` mà quên dấu `=`, bảng tính sẽ hiển thị gì?',
      options: [
        'Hiển thị số 15',
        'Hiển thị dòng chữ "5 + 10" như văn bản thông thường',
        'Báo lỗi dấu đỏ',
        'Tự động thêm dấu = vào'
      ],
      correctAnswer: 1,
      explanation: 'Nếu không có dấu =, phần mềm hiểu đó là một đoạn văn bản (text) thông thường chứ không thực hiện phép tính.'
    }
  },
  {
    id: 'term_ham',
    term: 'Hàm',
    englishTerm: 'Function',
    grade: 7,
    category: 'Bảng tính',
    definition: 'Công thức đã được phần mềm bảng tính định nghĩa sẵn theo tên chuẩn để thực hiện những phép tính nhanh chóng và phức tạp.',
    example: '`=SUM(A1:A10)` tính tổng cả 10 ô mà không cần gõ A1+A2+A3...+A10.',
    challenge: {
      question: 'Để tìm ra điểm số CAO NHẤT trong danh sách điểm từ C1 đến C30, em dùng hàm nào?',
      options: [
        '=MIN(C1:C30)',
        '=MAX(C1:C30)',
        '=SUM(C1:C30)',
        '=COUNT(C1:C30)'
      ],
      correctAnswer: 1,
      explanation: 'Hàm MAX dùng để tìm giá trị lớn nhất trong vùng dữ liệu.'
    }
  },
  {
    id: 'term_bieu_do',
    term: 'Biểu đồ',
    englishTerm: 'Chart / Graph',
    grade: 7,
    category: 'Bảng tính',
    definition: 'Cách minh họa trực quan dữ liệu số bằng hình vẽ (như các cột, đường gấp khúc, hình quạt) giúp người đọc dễ so sánh và nhận xét xu hướng.',
    example: 'Biểu đồ cột so sánh điểm thi môn Tin học của các tổ trong lớp.',
    challenge: {
      question: 'Để theo dõi sự THAY ĐỔI NHIỆT ĐỘ qua các ngày trong tuần, loại biểu đồ nào thích hợp nhất?',
      options: [
        'Biểu đồ đường gấp khúc (Line chart)',
        'Biểu đồ hình tròn (Pie chart)',
        'Biểu đồ bong bóng',
        'Không dùng biểu đồ'
      ],
      correctAnswer: 0,
      explanation: 'Biểu đồ đường gấp khúc (Line chart) thể hiện xu hướng biến đổi dữ liệu theo dòng thời gian rõ ràng nhất.'
    }
  },

  // ==========================================
  // LỚP 8 (GRADE 8)
  // ==========================================
  {
    id: 'term_thuat_toan_8',
    term: 'Thuật toán',
    englishTerm: 'Algorithm',
    grade: 8,
    category: 'Lập trình',
    definition: 'Quy trình giải quyết vấn đề gồm hữu hạn các bước chỉ dẫn chính xác, tuần tự, có tính dừng và tính đúng đắn.',
    example: 'Thuật toán sắp xếp nổi bọt (Bubble Sort) so sánh từng cặp phần tử liền kề để đưa các số lớn dần về cuối dãy.',
    challenge: {
      question: 'Một thuật toán chuẩn mực phải đảm bảo đặc điểm quan trọng nào sau đây?',
      options: [
        'Chạy mãi mãi không bao giờ dừng',
        'Tính xác định, tính dừng và tính đúng đắn',
        'Chỉ dùng được cho máy tính đắt tiền',
        'Bắt buộc phải viết bằng tiếng Anh'
      ],
      correctAnswer: 1,
      explanation: 'Thuật toán cần rõ ràng không nhập nhằng (xác định), phải kết thúc sau hữu hạn bước (tính dừng) và cho ra kết quả mong muốn (tính đúng).'
    }
  },
  {
    id: 'term_ngon_ngu_lap_trinh',
    term: 'Ngôn ngữ lập trình',
    englishTerm: 'Programming Language',
    grade: 8,
    category: 'Lập trình',
    definition: 'Hệ thống các ký hiệu và quy tắc ngữ pháp dùng để diễn tả các thuật toán thành chương trình mà máy tính có thể hiểu và thực thi.',
    example: 'Scratch (lập trình kéo thả cho học sinh), Python, C++, Pascal, JavaScript.',
    challenge: {
      question: 'Ngôn ngữ nào dùng các khối lệnh kéo thả nhiều màu sắc rất trực quan cho các bạn mới học lập trình?',
      options: [
        'Scratch',
        'Assembly',
        'HTML',
        'C'
      ],
      correctAnswer: 0,
      explanation: 'Scratch là ngôn ngữ lập trình trực quan khối lệnh rất thân thiện và sáng tạo cho lứa tuổi THCS.'
    }
  },
  {
    id: 'term_bien_lap_trinh',
    term: 'Biến',
    englishTerm: 'Variable',
    grade: 8,
    category: 'Lập trình',
    definition: 'Vùng nhớ được đặt tên trong bộ nhớ máy tính để lưu trữ một giá trị dữ liệu có thể thay đổi trong khi chương trình đang chạy.',
    example: 'Biến `score` trong game, khi người chơi bắn trúng mục tiêu, lệnh `score = score + 10` sẽ tăng điểm số lên.',
    challenge: {
      question: 'Tên biến nào sau đây là HỢP LỆ trong hầu hết ngôn ngữ lập trình?',
      options: [
        '1diem (bắt đầu bằng chữ số)',
        'diem_so (chứa chữ cái và dấu gạch dưới)',
        'diem so (có khoảng trắng)',
        'diem*so (chứa dấu nhân)'
      ],
      correctAnswer: 1,
      explanation: 'Tên biến hợp lệ thường bắt đầu bằng chữ cái hoặc gạch dưới, không chứa dấu cách hay ký tự toán học đặc biệt.'
    }
  },
  {
    id: 'term_cau_truc_re_nhanh',
    term: 'Cấu trúc rẽ nhánh',
    englishTerm: 'Conditional / Branching',
    grade: 8,
    category: 'Lập trình',
    definition: 'Cấu trúc cho phép chương trình lựa chọn thực hiện câu lệnh này hay câu lệnh khác tùy thuộc vào điều kiện kiểm tra là Đúng (True) hay Sai (False).',
    example: 'Nếu điểm thi >= 8.0 thì xếp loại Giỏi, ngược lại thì không xếp loại Giỏi.',
    challenge: {
      question: 'Từ khóa trong tiếng Anh dùng cho cấu trúc rẽ nhánh điều kiện là:',
      options: [
        'IF ... THEN ... ELSE',
        'FOR ... DO',
        'WHILE ... DO',
        'REPEAT ... UNTIL'
      ],
      correctAnswer: 0,
      explanation: 'Cấu trúc điều kiện rẽ nhánh dùng cú pháp IF (Nếu) ... THEN (Thì) ... ELSE (Ngược lại).'
    }
  },
  {
    id: 'term_cau_truc_lap',
    term: 'Cấu trúc lặp',
    englishTerm: 'Loop / Iteration',
    grade: 8,
    category: 'Lập trình',
    definition: 'Cấu trúc cho phép thực hiện lặp đi lặp lại một khối câu lệnh nhiều lần cho đến khi thỏa mãn một điều kiện dừng xác định.',
    example: 'Vòng lặp chạy 10 lần để in ra bảng cửu chương 5 từ 5x1 đến 5x10.',
    challenge: {
      question: 'Vòng lặp với số lần biết trước trong lập trình thường dùng câu lệnh nào?',
      options: [
        'Vòng lặp FOR',
        'Vòng lặp IF',
        'Lệnh INPUT',
        'Lệnh PRINT'
      ],
      correctAnswer: 0,
      explanation: 'Vòng lặp FOR thường dùng khi ta biết trước số lần lặp cụ thể (ví dụ lặp n lần).'
    }
  },

  // ==========================================
  // LỚP 9 (GRADE 9)
  // ==========================================
  {
    id: 'term_tri_tue_nhan_tao',
    term: 'Trí tuệ nhân tạo',
    englishTerm: 'Artificial Intelligence (AI)',
    grade: 9,
    category: 'Công nghệ mới',
    definition: 'Lĩnh vực khoa học máy tính chuyên nghiên cứu cách chế tạo máy móc, phần mềm thông minh có khả năng mô phỏng các năng lực trí tuệ của con người.',
    example: 'Chatbot thông minh biết trả lời câu hỏi, xe ô tô tự lái nhận biết biển báo và người đi bộ trên đường.',
    challenge: {
      question: 'Đâu KHÔNG PHẢI là một khả năng hiện tại của Trí tuệ nhân tạo (AI)?',
      options: [
        'Nhận diện khuôn mặt và dịch thuật đa ngôn ngữ',
        'Tự có tâm tư, tình cảm yêu ghét chân thật như con người',
        'Chơi cờ vây thắng các kiện tướng quốc tế',
        'Tự động phát hiện lỗi sai trong ảnh chụp X-quang'
      ],
      correctAnswer: 1,
      explanation: 'AI là hệ thống tính toán mô phỏng dựa trên dữ liệu, không có ý thức, cảm xúc hay linh hồn như sinh vật sống.'
    }
  },
  {
    id: 'term_may_hoc',
    term: 'Máy học',
    englishTerm: 'Machine Learning (ML)',
    grade: 9,
    category: 'Công nghệ mới',
    definition: 'Tập con của AI, tập trung vào việc phát triển các thuật toán giúp hệ thống tự động học tập quy luật từ lượng lớn dữ liệu để đưa ra dự đoán mà không cần lập trình từng dòng quy tắc.',
    example: 'Hệ thống nhận diện thư rác (Spam) của Gmail tự học từ hàng triệu email để phân loại thư lừa đảo.',
    challenge: {
      question: 'Yếu tố quan trọng nhất để huấn luyện một mô hình Máy học (Machine Learning) hoạt động chính xác là gì?',
      options: [
        'Bàn phím cơ nhiều đèn LED',
        'Tập dữ liệu huấn luyện (Training Data) đủ lớn, chất lượng và chuẩn xác',
        'Dây nguồn máy tính thật dài',
        'Màn hình có độ phân giải 4K'
      ],
      correctAnswer: 1,
      explanation: 'Dữ liệu huấn luyện là "thức ăn" cho máy học; dữ liệu càng phong phú, chuẩn xác thì mô hình học càng thông minh.'
    }
  },
  {
    id: 'term_du_lieu_lon',
    term: 'Dữ liệu lớn',
    englishTerm: 'Big Data',
    grade: 9,
    category: 'Công nghệ mới',
    definition: 'Thuật ngữ chỉ các tập dữ liệu có quy mô khổng lồ, tốc độ gia tăng chóng mặt và độ phức tạp cao đến mức các phần mềm xử lý dữ liệu truyền thống không thể xử lý nổi.',
    example: 'Hàng tỷ lượt xem, tìm kiếm và video tải lên YouTube mỗi phút từ người dùng trên toàn cầu.',
    challenge: {
      question: 'Ba đặc trưng cơ bản (3V) của Big Data gồm những từ nào?',
      options: [
        'Volume (Khối lượng), Velocity (Tốc độ), Variety (Đa dạng)',
        'Video, Voice, View',
        'Virus, Value, Virtual',
        'Vector, Version, Vision'
      ],
      correctAnswer: 0,
      explanation: 'Volume (Khối lượng), Velocity (Tốc độ) và Variety (Sự đa dạng) là bộ 3 đặc trưng kinh điển của Big Data.'
    }
  },
  {
    id: 'term_dien_toan_dam_may',
    term: 'Điện toán đám mây',
    englishTerm: 'Cloud Computing',
    grade: 9,
    category: 'Công nghệ mới',
    definition: 'Mô hình cung cấp các tài nguyên điện toán (như máy chủ, lưu trữ, cơ sở dữ liệu, phần mềm) theo yêu cầu qua mạng Internet.',
    example: 'Lưu bài tập nhóm trên Google Drive hoặc OneDrive, em và bạn cùng sửa một bài thuyết trình cùng một lúc từ hai máy khác nhau.',
    challenge: {
      question: 'Ưu điểm lớn của việc lưu tài liệu trên dịch vụ đám mây (Cloud) là gì?',
      options: [
        'Không sợ mất dữ liệu khi máy tính cá nhân bị hỏng ổ cứng, truy cập được từ mọi thiết bị có mạng',
        'Máy tính không bao giờ bị nóng',
        'Không cần chuột và bàn phím',
        'Tốc độ gõ phím nhanh hơn'
      ],
      correctAnswer: 0,
      explanation: 'Điện toán đám mây sao lưu an toàn trên máy chủ từ xa, giúp dữ liệu không bị mất mát khi hỏng thiết bị cá nhân.'
    }
  },
  {
    id: 'term_dau_chan_so',
    term: 'Dấu chân số',
    englishTerm: 'Digital Footprint',
    grade: 9,
    category: 'An toàn số',
    definition: 'Mọi dấu vết dữ liệu mà một cá nhân để lại khi hoạt động trong môi trường số, bao gồm lịch sử tìm kiếm, bài đăng, bình luận, ảnh chia sẻ và địa chỉ IP.',
    example: 'Những bài viết, hình ảnh em chia sẻ trên mạng xã hội Facebook cách đây 3 năm vẫn có thể được tìm thấy và lưu lại.',
    challenge: {
      question: 'Để xây dựng một "Dấu chân số" tích cực và an toàn, em nên làm gì?',
      options: [
        'Đăng thông tin địa chỉ nhà riêng và số điện thoại công khai',
        'Cư xử lịch sự, chia sẻ thông tin hữu ích và suy nghĩ kỹ trước khi đăng tải bài viết',
        'Thường xuyên tham gia tranh cãi, nói tục trên mạng',
        'Tải các phần mềm lậu không rõ nguồn gốc'
      ],
      correctAnswer: 1,
      explanation: 'Dấu chân số phản ánh uy tín cá nhân, hãy luôn văn minh, cẩn trọng và có trách nhiệm với mọi nội dung mình chia sẻ.'
    }
  },
  {
    id: 'term_xac_thuc_2_lop',
    term: 'Xác thực hai yếu tố',
    englishTerm: 'Two-Factor Authentication (2FA)',
    grade: 9,
    category: 'An toàn số',
    definition: 'Phương thức bảo mật yêu cầu người dùng phải cung cấp hai bằng chứng danh tính khác nhau mới được đăng nhập vào tài khoản.',
    example: 'Khi đăng nhập tài khoản Zalo trên máy tính mới, ngoài mật khẩu, em phải xác nhận bằng mã OTP gửi về số điện thoại.',
    challenge: {
      question: 'Nếu kẻ xấu vô tình đoán được mật khẩu của em, điều gì giúp bảo vệ tài khoản nếu em đã bật 2FA?',
      options: [
        'Kẻ xấu vẫn không thể đăng nhập vì không có mã OTP gửi về điện thoại của em',
        'Máy tính của kẻ xấu sẽ tự nổ',
        'Kẻ xấu tự động chuyển tiền vào tài khoản của em',
        'Mật khẩu tự đổi về 123456'
      ],
      correctAnswer: 0,
      explanation: '2FA bảo vệ tài khoản vì kẻ xấu chỉ có mật khẩu nhưng thiếu thiết bị nhận mã OTP bảo mật thứ hai.'
    }
  }
];
