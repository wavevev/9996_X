const MESSAGES = [
  `그래도 예쁜 모습 많이 볼 수 있어서 행복했어—!\n앞으로 함께하지 못하지만 행복하길 바랄게…`,
  `나 없으니…\n좋드나……`,
  `형이 너 좋아한다고 그렇게 자신있어 하더니….`,
  `어차피 다시 붙을 거 알아요(아님)\n그러니까 미루지 말고 다시 합쳐 줘….`,
  `사랑을 했다\n우리가 만나\n지우지 못할 추억이 됐다`,
  `재회를 기원합니다 파이팅!`,
  `선우가 행복했으면 좋겠습니다.`,
  `돌아간다면 달라질까요?\n전 잘 모르겠어요.`,
  `사랑이 장난이니??\n헤어질 거면 사귀지 말랬잖아!!!`,
  `시간 줄 테니까\n올해 안에 돌 아 와 !`,
  `우리 좋았잖아\n다시 한번만 기회를 주라\n나 안 울어`,
  `다시 빨리 합체해`,
  `우린 열심히 응원만 했는데\n없어졌어요\n텅…`,
  `오래 보자고 했으면서…`,
  `얘들아.\n싸우지 말고 잘 살아.\n뭐가 됐든 행복하렴.\n뭐가 됐든 응원한다.`,
  `주완아…\n태빈이 내 거야 ◠ ͜ ◠ ♡\n-익명-`,
  `두 분의 재회 기원 1일차…\n제발요!!!`,
  `조정기간 끝났어 얘들아\n고소한다…?`,
  `우웅 오래오래 행복하자 ♡♡`,
  `잘 지내지?\n행복해…`,
  `나는 아직도 여전히 너희를 응원하고 사랑하고 있어!\n행복했으면…\n그거 말고 바라는 건 없어 (아마도?ㅎㅎ)`,
  `빨리 다시 만나자…`,
  `여운이 길긴 해—`,
  `오래 보자고 했자나 ㅠ…\n우리 오래 보자며….`,
  `왜… 헤어졌어…?`,
  `더 깊이 빠져 죽어도 되니까\n다시 한번만 돌아와 줄래\n더 깊이 빠져 죽어도 되니까\n다시 한번만……`,
  `즌2 주세요\n1. 연지구 2. 쭈삐`,
  `끝을 받아들이기가 어려워`,
  `그래서 둘이 결혼은 언제 하는데?`,
  `97%의 사람들은 재결합에 실패한대.\n근데 너넨 3%잖아…….`,
  `할 말이 없다…\n진짜……\n말문이 막힌다….`,
  `다시 좋은 소식 들리길… 😞`,
  `내 세상은 온통 너였어♡\n영원히 함께하쟈\n“선우♡세웅”`,
  `내가 없는 세상에서 더 행복해라.`,
  `재결합해\n너네 다시 사귄다고 안 죽잖아\n난 안 사귀면 죽어\n다시 사귀라고 이 염천 커플아….`,
  `너는 다른 사람한테 힘을 줄 수 있는 사람이야`,
  `영원한 사랑은 없는 거야\n그치만 영원하길 바랐어…`,
  `내가 좋아했던 남의 연애`,
  `우웅 깨붙이라고 해\n그래야 내가 살아`,
  `우리 이제 다른 커플 좋아해도 돼? (없음ㅠㅠ)`,
  `마카오에서 결혼한다며?`,
  `[playlist] 강력 재회주파수\nㄴ (백선우) 효과 있나요?\nㄴ (이세웅) 이거 진짜 되나요…? 저 진짜 필요해요\nㄴ (먼지) 이걸 믿는 사람이 있네…      [신고하기]`,
  `둘이 언제 다시 만날 거니?\n만날 때 삐삐쳐주라`,
  `우리 이제는 행복하자.\n덕분에 행복했어`,
  `행복했는데…\n얘들아 지금 행복하지?`,
  `우웅 평생 행복해\n우웅 평생 기억해\n우웅 평생 함께해\n우웅 평생 사랑해(서로)`,
  `강력 재회 주파수 듣기 1일차…\n선우세웅 다시 만나길…\n그래야 내가 살아`,
  `항상 서로에게 위로와 기쁨이 되길♡`,
  `왜 헤어졌니….\n알려주고 가….\n아니 가지 마….\n다시 사귀라고….`,
  `선우는 웃음이 많고 저를 항상 웃게 만들어 준 사람이었습니다`,
  `선우 세웅아, 잘 지내지!!\n많이 보고 싶다.\n항상 아프지 말구 우리 오래 행복하자 ♡`,
  `같이 걸을 때 네가 옆에서 환하게 웃던 그 모습까지 다 소중해.`,
  `악귀야 물렀거라`,
  `둘이 헤어지지 말고 오래 오래 행복하게 만나야 해\n항상 응원할게♡`,
  `너네 이거 보면 다시 사귄다…`,
  `세웅이를 행복하게 해 주세요`,
  `벼락같이 왔다가 어느 새 발 묶인 지 2년…\n덕분에 행복했다 🙂`,
  `보고 싶으면 볼 수 있다면서 왜 안 보죠?`,
  `내 친구 울리지 마`,
  `나만한 사람 없을걸 -SW-`,
  `우리 헤어지지 말고 영원히 함께하자♡\n사랑해사랑해사랑해사랑해사랑해♡\n사랑해사랑해사랑해사랑해사랑해♡\n사랑해사랑해사랑해사랑해사랑해♡`,
  `왜! 왜 사귀었어\n비즈니스만 했어야지\n왜! WHY 🥲`,
  `소문으로 많이 들었습니다.\n다시 꼭 재결합하시길 바라고 오래 가세요♡\n안 사귀면 다른 어떤 사람이 굶어 죽습니다.`,
  `지금까지 그리고 앞으로도 이렇게 잘 어울리는 두 사람을 만날 수는 없을 것 같아. 행복해라 영원히….`,
  `너희 좋았잖아……\n그렇게 꽁냥꽁냥 다 했으면서……`,
  `차주완 바보\n흥이다 진짜`,
  `헤어질 이유가 없다며….\n네가 또 져주면 안 돼…?`,
  `그 마음, 영원히 변치 않길 ♡`,
  `니네가 왜 헤어져 구라 ㄴㄴ\n둘이서 행복하길!!\n따로 말고 둘이서 ♡`
];

const LONG_PRESS_MS = 1200;

const messageList = document.getElementById("messageList");
const messagesWrap = document.getElementById("messages");
const sendButton = document.getElementById("sendButton");
const composerPlaceholder = document.getElementById("composerPlaceholder");
const toast = document.getElementById("toast");

let remainingMessages = [...MESSAGES];
let pressTimer = null;
let longPressTriggered = false;
let toastTimer = null;

function scrollToBottom(smooth = true) {
  requestAnimationFrame(() => {
    messagesWrap.scrollTo({
      top: messagesWrap.scrollHeight,
      behavior: smooth ? "smooth" : "auto"
    });
  });
}

function createBubble(text) {
  const row = document.createElement("div");
  row.className = "message-row";

  const wrap = document.createElement("div");
  wrap.className = "bubble-wrap";

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  if (text.includes("\n")) {
    bubble.classList.add("multiline");
  }

  bubble.textContent = text;
  wrap.appendChild(bubble);
  row.appendChild(wrap);

  return row;
}

function renderMessage(text, smooth = true) {
  const bubbleNode = createBubble(text);
  messageList.appendChild(bubbleNode);
  scrollToBottom(smooth);
}

function showToast(message = "마지막 X 소개서입니다") {
  if (!toast) return;

  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toast.setAttribute("aria-hidden", "false");

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
    toast.setAttribute("aria-hidden", "true");
  }, 450);
}

function addRandomMessage() {
  if (remainingMessages.length === 0) {
    showToast();
    return;
  }

  const randomIndex = Math.floor(Math.random() * remainingMessages.length);
  const msg = remainingMessages[randomIndex];

  remainingMessages.splice(randomIndex, 1);
  renderMessage(msg, true);

  if (remainingMessages.length === 0) {
    showToast();
  }
}

function showAllMessagesAtOnce() {
  if (remainingMessages.length === 0) {
    showToast();
    return;
  }

  const fragment = document.createDocumentFragment();

  remainingMessages.forEach((msg) => {
    fragment.appendChild(createBubble(msg));
  });

  messageList.appendChild(fragment);
  remainingMessages = [];
  scrollToBottom(false);
  showToast();
}

function startPress() {
  clearTimeout(pressTimer);
  longPressTriggered = false;

  pressTimer = setTimeout(() => {
    longPressTriggered = true;
    showAllMessagesAtOnce();
  }, LONG_PRESS_MS);
}

function endPress() {
  clearTimeout(pressTimer);
}

function handleClick() {
  if (longPressTriggered) {
    longPressTriggered = false;
    return;
  }

  addRandomMessage();
}

sendButton.addEventListener("mousedown", startPress);
sendButton.addEventListener("mouseup", endPress);
sendButton.addEventListener("mouseleave", endPress);

sendButton.addEventListener("touchstart", startPress, { passive: true });
sendButton.addEventListener("touchend", endPress);
sendButton.addEventListener("touchcancel", endPress);
sendButton.addEventListener("touchmove", endPress);

sendButton.addEventListener("click", handleClick);

if (composerPlaceholder) {
  composerPlaceholder.addEventListener("click", () => {
    showAllMessagesAtOnce();
  });

  composerPlaceholder.addEventListener("touchend", (e) => {
    e.preventDefault();
    showAllMessagesAtOnce();
  }, { passive: false });
}

window.addEventListener("resize", () => {
  scrollToBottom(false);
});