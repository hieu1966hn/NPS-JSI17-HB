// Áp dụng lập trình hướng đối tượng vào bài tập clock này.
class Clock {
  constructor(element) {
    this._element = element;
    this._time = 0;
    this._interval = null;
  }

  start() {
    this._interval = setInterval(() => {
      this._time++;
      this._element.innerText = this.formatTime(this._time);
    }, 10);
  }

  stop() {
    clearInterval(this._interval);
    this._time = 0;
    this._element.innerText = this.formatTime(this._time);
  }

  pause() {
    clearInterval(this._interval);
  }

  formatTime(time) {
    let minutes = Math.floor(time / 6000);

    let seconds = Math.floor((time % 6000) / 100);

    let centiseconds = time % 100;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`;
  }
}

let clocks = [];

const startAll = () => {
  clocks.forEach((clock) => clock.start());
};

const stopAll = () => {
  clocks.forEach((clock) => clock.stop());
};

// Tạo ra một vài đồng hồ
for (let i = 0; i < 5; i++) {
  let clockElement = document.createElement("div");
  let startButton = document.createElement("button");
  let stopButton = document.createElement("button");
  let pauseButton = document.createElement("button");

  startButton.innerText = "Start";
  stopButton.innerText = "Stop";
  pauseButton.innerText = "Pause";

  let clock = new Clock(clockElement); /// Khởi tạo đối tượng đồng hồ mới.

  startButton.addEventListener("click", () => {
    clock.start();
  });
  stopButton.addEventListener("click", () => {
    clock.stop();
  });
  pauseButton.addEventListener("click", () => {
    clock.pause();
  });

  document.getElementById("clocks").appendChild(clockElement);
  document.getElementById("clocks").appendChild(startButton);
  document.getElementById("clocks").appendChild(stopButton);
  document.getElementById("clocks").appendChild(pauseButton);

  clocks.push(clock); /// Thêm đối tượng đồng hồ mới vào mảng để dễ duyệt mảng.
}
