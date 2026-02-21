const drum = document.getElementById("drum");
const drawBtn = document.getElementById("drawBtn");

/* 랜덤 색상 */
function randomColor() {
  const colors = ["#ff5252","#ff9800","#ffeb3b","#4caf50","#03a9f4","#9c27b0","#e91e63","#00ffff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

/* 공 생성 */
function createBalls() {
  if (!drum) return;
  drum.innerHTML = "";
  for (let i = 1; i <= 45; i++) {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.textContent = i;
    ball.style.background = randomColor();
    ball.style.top = Math.random() * 350 + "px";
    ball.style.left = Math.random() * 350 + "px";
    drum.appendChild(ball);
  }
}
createBalls();

/* 실제 섞이는 애니메이션 */
function mixBalls(duration = 3000) {
  const balls = document.querySelectorAll(".ball");
  const interval = setInterval(() => {
    balls.forEach(ball => {
      ball.style.top = Math.random() * 350 + "px";
      ball.style.left = Math.random() * 350 + "px";
    });
  }, 80);

  setTimeout(() => {
    clearInterval(interval);
    const sets = generateFiveSets();
    localStorage.setItem("lottoResults", JSON.stringify(sets));
    window.location.href = "result.html";
  }, duration);
}

/* 번호 생성 */
function getNumbers() {
  const nums = [];
  while (nums.length < 6) {
    const n = Math.floor(Math.random() * 45) + 1;
    if (!nums.includes(n)) nums.push(n);
  }
  return nums.sort((a,b)=>a-b);
}

function generateFiveSets() {
  const sets = [];
  for (let i = 0; i < 5; i++) sets.push(getNumbers());
  return sets;
}

function getBallColor(num) {
  if (num <= 10) return "ball-yellow";
  if (num <= 20) return "ball-blue";
  if (num <= 30) return "ball-red";
  if (num <= 40) return "ball-gray";
  return "ball-green";
}

if (drawBtn) {
  drawBtn.addEventListener("click", () => {
    mixBalls();
  });
}

/* 결과 표 출력 */
function displayResults() {
  const table = document.getElementById("resultTable");
  if (!table) return;

  const sets = JSON.parse(localStorage.getItem("lottoResults"));
  if (!sets) return;

  for (let i = 0; i < sets.length; i += 2) {
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      const cell = document.createElement("td");
      if (sets[i + j]) {
        const setDiv = document.createElement("div");
        setDiv.className = "result-set";

        sets[i + j].forEach(num => {
          const ball = document.createElement("div");
          ball.className = "result-ball " + getBallColor(num);
          ball.textContent = num;
          setDiv.appendChild(ball);
        });

        cell.appendChild(setDiv);
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

function goBack() {
  window.location.href = "draw.html";
}