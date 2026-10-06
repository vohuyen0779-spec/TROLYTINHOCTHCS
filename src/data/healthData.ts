import { HealthTopic, HealthChallenge } from '../types';

export const HEALTH_TOPICS: HealthTopic[] = [
  {
    id: 'eyes',
    title: 'Bảo vệ đôi mắt',
    icon: '👀',
    color: 'emerald',
    headline: 'Đôi mắt sáng tinh anh – Không lo cận thị và mỏi mắt!',
    tips: [
      'Áp dụng quy tắc vàng 20-20-20: Cứ sau 20 phút nhìn màn hình, hãy nhìn ra xa 20 feet (khoảng 6 mét) trong ít nhất 20 giây.',
      'Khoảng cách chuẩn: Giữ mắt cách màn hình khoảng 50 - 70 cm (bằng một sải cánh tay của em).',
      'Độ sáng hài hòa: Điều chỉnh độ sáng màn hình tương đồng với ánh sáng xung quanh phòng học, không ngồi phòng tối mở màn hình chói.',
      'Chớp mắt chủ động: Khi tập trung dùng máy tính, tốc độ chớp mắt giảm 50%, hãy nhớ chớp mắt thường xuyên để mắt không bị khô.'
    ],
    rules: [
      { title: 'Quy tắc 20-20-20', desc: 'Sau 20 phút học, nhìn xa 6 mét trong 20 giây để cơ mắt được thả lỏng.' },
      { title: 'Khoảng cách 50-70cm', desc: 'Khoảng cách bằng độ dài một cánh tay duỗi thẳng.' },
      { title: 'Chống chói & lóa', desc: 'Tránh đặt màn hình đối diện trực tiếp bóng đèn hoặc cửa sổ có ánh nắng gắt.' }
    ],
    funFact: 'Khi tập trung vào màn hình máy tính, con người chỉ chớp mắt khoảng 5-7 lần/phút thay vì 15-20 lần/phút lúc bình thường!'
  },
  {
    id: 'posture',
    title: 'Tư thế ngồi chuẩn',
    icon: '🪑',
    color: 'blue',
    headline: 'Ngồi đúng tư thế – Xương sống thẳng đẹp, học lâu không mỏi!',
    tips: [
      'Lưng thẳng tự nhiên: Giữ cột sống thẳng đứng, lưng tựa êm vào lưng ghế, không gù lưng hay cúi gập người sát bàn.',
      'Tầm mắt chuẩn: Mép trên của màn hình nên ngang bằng hoặc thấp hơn tầm mắt một chút (10 - 15 độ) để cổ không phải ngửa hay cúi gập.',
      'Hai bàn chân chạm sàn: Đặt bàn chân phẳng trên sàn hoặc trên bục kê chân, đùi song song với mặt đất (góc đầu gối 90 - 100 độ).',
      'Vai thả lỏng: Đừng nhún vai hoặc gồng cơ vai khi đang suy nghĩ hay gõ phím.'
    ],
    rules: [
      { title: 'Quy tắc 90 độ', desc: 'Khuỷu tay, khớp háng và đầu gối đều nên tạo góc thoải mái xấp xỉ 90 - 100 độ.' },
      { title: 'Không gục cổ', desc: 'Cứ mỗi 15 độ cúi đầu về trước, áp lực đè lên đốt sống cổ tăng lên gấp 2-3 lần.' },
      { title: 'Tựa lưng ghế', desc: 'Tận dụng phần tựa của ghế để nâng đỡ cột sống thắt lưng.' }
    ],
    funFact: 'Đầu của chúng ta nặng khoảng 4.5 - 5kg. Khi cúi đầu 60 độ nhìn màn hình, cổ phải chịu lực tương đương 27kg (như cõng một chiếc bao gạo)!'
  },
  {
    id: 'keyboard_mouse',
    title: 'Bàn phím & Chuột',
    icon: '⌨️',
    color: 'violet',
    headline: 'Cổ tay mềm mại – Thao tác chuẩn xác không lo mỏi!',
    tips: [
      'Cổ tay thẳng hàng: Cổ tay và cẳng tay nên nằm trên một đường thẳng tự nhiên, không bị gập ngược lên trên hoặc bẻ cong sang hai bên.',
      'Lực bấm phím vừa đủ: Gõ phím nhẹ nhàng, êm ái, không dùng lực đập mạnh xuống phím gây đau khớp ngón tay.',
      'Chuột vừa vặn lòng bàn tay: Chọn chuột có kích thước phù hợp cỡ tay học sinh, di chuyển chuột bằng cả cẳng tay thay vì bẻ gắt cổ tay.',
      'Tránh tỳ cổ tay lên mép bàn sắc: Nên dùng miếng lót chuột mềm hoặc tấm đệm lót cổ tay.'
    ],
    rules: [
      { title: 'Đường thẳng tự nhiên', desc: 'Cổ tay thẳng với cẳng tay khi gõ bàn phím và rê chuột.' },
      { title: 'Lực gõ thanh thoát', desc: 'Lướt phím nhịp nhàng, các đầu ngón tay hơi cong tự nhiên như chơi đàn piano.' },
      { title: 'Nghỉ tay giữa chừng', desc: 'Thả lỏng hai tay xuống đùi sau khi gõ xong một đoạn văn bản dài.' }
    ],
    funFact: 'Hội chứng ống cổ tay là tình trạng dây thần kinh ở cổ tay bị chèn ép do tỳ đè liên tục. Chỉ cần đệm lót êm là phòng tránh được đến 80%!'
  },
  {
    id: 'breaks',
    title: 'Nghỉ ngơi & Vận động',
    icon: '🚶',
    color: 'amber',
    headline: 'Nạp lại năng lượng – Vươn vai hít thở sảng khoái tinh thần!',
    tips: [
      'Giải lao sau 30-45 phút: Đứng dậy đi lại, uống một ly nước lọc ấm sau mỗi tiết học máy tính.',
      'Vươn vai giãn cơ: Đan hai tay lại duỗi thẳng qua đầu, nghiêng người sang trái rồi sang phải.',
      'Xoay khớp cổ và vai: Nhẹ nhàng xoay khớp vai tròn từ trước ra sau, nghiêng đầu nhẹ nhàng sang hai bên.',
      'Hít thở sâu: Hít vào bằng mũi phình bụng trong 4 giây, giữ 2 giây rồi thở nhẹ nhàng ra bằng miệng trong 6 giây.'
    ],
    rules: [
      { title: 'Quy tắc 45 phút', desc: 'Không ngồi liên tục quá 45 phút mà không đứng dậy vận động.' },
      { title: 'Uống nước thường xuyên', desc: 'Uống từng ngụm nước nhỏ giúp cơ thể đủ ẩm và mắt không bị khô.' },
      { title: 'Xoa ấm lòng bàn tay', desc: 'Xoa 2 lòng bàn tay thật ấm rồi nhẹ nhàng úp lên mắt để mắt thư giãn tối đa.' }
    ],
    funFact: 'Chỉ cần đứng dậy đi lại 2 phút sau 45 phút ngồi sẽ giúp lưu thông máu lên não tăng 15%, giúp em tập trung và thông minh hơn!'
  }
];

export const HEALTH_CHALLENGES: HealthChallenge[] = [
  {
    id: 'hc_1',
    scenario: 'Em đã ngồi học máy tính một thời gian dài và cảm thấy mỏi mắt, mắt bắt đầu khô rát. Em nên làm gì?',
    options: [
      'Tiếp tục cố gắng học vì sắp xong bài tập rồi',
      'Tăng tối đa độ sáng màn hình để nhìn rõ hơn',
      'Tạm dừng học, chớp mắt, nhìn ra xa ngoài cửa sổ khoảng 6m và vận động nhẹ',
      'Dí sát mặt lại gần màn hình máy tính hơn'
    ],
    correctAnswer: 2,
    explanation: 'Khi mắt mỏi và khô, việc nhìn ra xa ngoài cửa sổ áp dụng quy tắc 20-20-20 giúp các cơ thể mi mắt được thả lỏng hoàn toàn, nước mắt tiết đều làm dịu mắt.',
    healthTip: '💡 Hãy nhớ: Cứ sau 20 phút học, hãy nhìn ra xa 6 mét trong ít nhất 20 giây nhé!'
  },
  {
    id: 'hc_2',
    scenario: 'Màn hình máy tính của em đặt trên một chiếc bàn quá cao, khiến em luôn phải ngửa cổ lên để nhìn. Tác hại là gì và em nên khắc phục ra sao?',
    options: [
      'Không sao cả, ngửa cổ giúp nhìn lên trần nhà cao thoáng hơn',
      'Gây mỏi cổ, đau vai gáy và khô mắt nhanh; nên kê nâng ghế lên hoặc hạ thấp màn hình ngang tầm mắt',
      'Chỉ cần nhắm một bên mắt khi học là được',
      'Ngồi lùi ra thật xa cách 5 mét'
    ],
    correctAnswer: 1,
    explanation: 'Ngửa cổ lâu gây áp lực lớn lên đốt sống cổ và khiến mí mắt mở to hơn làm mắt nhanh khô. Mép trên màn hình nên ngang hoặc hơi thấp hơn tầm mắt một chút.',
    healthTip: '💡 Hãy điều chỉnh ghế hoặc màn hình sao cho mắt em nhìn thẳng hoặc hơi chếch xuống 10-15 độ.'
  },
  {
    id: 'hc_3',
    scenario: 'Phòng học của em vào buổi chiều có ánh nắng mặt trời chiếu trực tiếp qua cửa sổ vào màn hình máy tính gây lóa chói mắt. Cách xử lý nào đúng nhất?',
    options: [
      'Đeo kính râm khi ngồi học máy tính',
      'Kéo rèm cửa che bớt nắng hoặc xoay hướng màn hình để tránh ánh sáng chiếu trực diện gây lóa',
      'Tắt đèn trong phòng để phòng thật tối',
      'Mở thêm 3 chiếc đèn bàn chiếu thẳng vào mặt'
    ],
    correctAnswer: 1,
    explanation: 'Màn hình bị lóa khiến mắt phải điều tiết quá mức, dễ gây đau đầu và nhức mắt. Kéo rèm che nắng hoặc điều chỉnh góc đặt màn hình là giải pháp khoa học nhất.',
    healthTip: '💡 Ánh sáng trong phòng nên phân bố đều, không để nguồn sáng gắt phản chiếu lên mặt kính màn hình.'
  },
  {
    id: 'hc_4',
    scenario: 'Khi gõ bàn phím và dùng chuột, hai cổ tay của em hay bị gập ngược lên và tỳ mạnh vào góc bàn sắc nhọn khiến cổ tay đỏ ửng. Em nên làm gì?',
    options: [
      'Kê thêm miếng đệm lót cổ tay êm ái, nâng ghế để cẳng tay và bàn tay nằm trên một đường thẳng tự nhiên',
      'Dùng băng keo dán chặt cổ tay vào mặt bàn',
      'Gõ phím bằng một ngón trỏ duy nhất',
      'Chỉ dùng chân điều khiển chuột'
    ],
    correctAnswer: 0,
    explanation: 'Tỳ cổ tay lên mép bàn sắc hoặc bẻ gập cổ tay dễ gây viêm gân và hội chứng ống cổ tay. Giữ cổ tay thẳng tự nhiên và có đệm lót mềm giúp bảo vệ đôi tay khỏe mạnh.',
    healthTip: '💡 Giữ cổ tay thẳng tự nhiên, đừng để cổ tay bị bẻ cong lên trên hay chúc xuống dưới khi gõ phím!'
  },
  {
    id: 'hc_5',
    scenario: 'Sau 45 phút học Tin học online, giờ giải lao 10 phút trước tiết tiếp theo, cách nghỉ ngơi nào TỐT NHẤT cho sức khỏe của em?',
    options: [
      'Mở ngay điện thoại để lướt mạng xã hội và chơi game cho đỡ buồn',
      'Tiếp tục ngồi nguyên trên ghế xem phim hoạt hình trên máy tính',
      'Rời khỏi bàn máy tính, vươn vai, uống một cốc nước ấm, đi lại vài vòng và nhìn cây xanh ngoài sân',
      'Gục mặt xuống bàn phím ngủ luôn'
    ],
    correctAnswer: 2,
    explanation: 'Chuyển từ màn hình máy tính sang màn hình điện thoại không giúp mắt và não được nghỉ. Em cần đứng dậy, tách khỏi mọi màn hình điện tử để cơ bắp và mắt được hồi phục.',
    healthTip: '💡 Giờ giải lao hãy rời xa mọi màn hình điện tử, vươn vai và hít thở sâu nhé!'
  }
];
