export const quotes : string[] = [
  "Chuẩn, hoàn toàn chuẩn! Nhưng mình .. nhưng bạn đã bị block vì bạn không tôn trọng mình!",
  "Điều đó quan trọng với em lắm sao?",
  "Anh sống như thế đấy em",
  "Ồ, bạn ấy siêu quá!",
  "Tiền ít thì mình mua cái ít tiền, đâu nhất thiết phải như anh...",
  "May quá, con anh không biết cậu Sơn Tùng kia là ai",
  "Càng đi nhiều, người ta càng không so sánh em ạ, vì không nơi nào giống nơi nào. Đây là điều anh đã học được sau các chuyến đi.",
  "Anh biết, nhưng như thế là quá ít",
  "Mọi việc không như em nghĩ đâu",
  `Bạn Chỉnh ơi, Chỉnh đang comment một câu anh không thích một chút nào nhé.`,
  "Quá hài hước em ạ",
  "Ồ, sao em lại nói thế?",
  "Trình thấp nó thế em ạ",
  "4 tiếng trước thì như thế, nhưng bây giờ khác rồi",
  "MNSD, thảo nào...",
  "Có ai bay 10 nghìn km sang đây chỉ để post 1 cái ảnh photoshop không? Bạn có vấn đề gì về tư duy không?",
  "Anh không bao giờ nói vậy em nhé",
  "Thời gian sẽ trả lời thôi em",
  "Chưa chính thức, nhưng anh đón đầu sự kiện.",
  "Em mail hoặc gọi hotline UEFA nhé. Họ sẽ giúp em.",
  "Sex, luôn là sex",
  "Chuyền đi đừng sút...Hong, Zaniolo không nghe tôi, Zaniolo sút và anh ta ghi bàn",
  "Nói có chủ ngữ đi bạn nhỉ. Nên nhớ, đây là nhà mình. Bạn đang nói chuyện với ai thế, qua comment này?",
  "Kịch bản ấy đẹp, nhưng khó xảy ra",
  "Nicolo Zaniolo ơi, cháu tên là gì? Tên cháu là Nam, Đức hay là Tuấn?",
  "Bạn viết tâm thư lên Liên hợp quốc nhé. Chắc là họ lắng nghe bạn đấy.",
  "Chém gió tí cho vui mà em",
  "Cappuccino pha bằng máy Ý và cafe nhập từ Ý mà em",
  "Nhà anh, anh thích thì anh khoe, có quy định nào cấm khoe không em?",
  "Nick ảo ơi, chào bạn. Người thông minh và tử tế, ai lại dùng nick nặc danh thế...",
  "Tôi chụp bằng iPhone 8 Plus mới tinh đấy ông",
  "Xin chào, có phải là anh đang tìm kiếm em không?"
];

export function fetchQuotes(amount : number = 1) : string[] {
  if (amount > quotes.length)
    throw new Error(
      `Insufficient amount of quotes. Maximum is ${quotes.length}.`
    );
  else {
    const shuffled : string[] = quotes.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, amount);
    return selected;
  }
}

export function fetchAllQuotes() {
  return quotes;
}

export function searchQuotes(query : string = "") : string[] {
  return quotes.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
}

