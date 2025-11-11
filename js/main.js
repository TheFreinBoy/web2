// 1 task
const box = document.querySelector('.Box');
const display = document.querySelector('.XY h1');

box.addEventListener('mousemove', (e) => {
  const rect = box.getBoundingClientRect();
  const x = Math.floor(e.clientX - rect.left);
  const y = Math.floor(e.clientY - rect.top);
  display.textContent = `x = ${x}\ny = ${y}`;

});

box.addEventListener('mouseleave', () => {
  display.textContent = 'x = ?\ny = ?';
});
// 2 task

const listBoxes = document.querySelectorAll('.list-box');
const leftBox = listBoxes[0];
const rightBox = listBoxes[1];

const buttons = document.querySelectorAll('.list-button');
const rightBtn = buttons[0];
const leftBtn = buttons[1];

function moveChecked(fromBox, toBox) {
  const checkboxes = fromBox.querySelectorAll("input[type='checkbox']:checked");
  checkboxes.forEach(checkbox => {
    const label = fromBox.querySelector(`label[for='${checkbox.id}']`);

    checkbox.checked = false;

    const targetSection = toBox.querySelector('section');
    targetSection.appendChild(checkbox);
    targetSection.appendChild(label);
  });
}

rightBtn.addEventListener('click', () => moveChecked(leftBox, rightBox));
leftBtn.addEventListener('click', () => moveChecked(rightBox, leftBox));
// 3 task

const textarea = document.querySelector('.numbers-box textarea');
const visualBox = document.getElementById('visual-box');
const maxLength = 45;

textarea.addEventListener('input', () => {

  textarea.value = textarea.value.replace(/[^01]/g, '');

  if (textarea.value.length > maxLength) {
    textarea.value = textarea.value.slice(0, maxLength);
  }

 visualBox.innerHTML = '';

  const text = textarea.value.replace(/\s+/g, '');

  for (let char of text) {
    if (char === '0' || char === '1') {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.classList.add(char === '1' ? 'blue' : 'black');
      visualBox.appendChild(cell);
    }
  }
});
// 4 task
const cube = document.querySelector('.cube');
const widthSlider = document.getElementById('widthSlider');
const heightSlider = document.getElementById('heightSlider');
const rotateSlider = document.getElementById('rotateSlider');
const outputs = document.querySelectorAll('#output');

function updateCube() {
  const scaleX = widthSlider.value;
  const scaleY = heightSlider.value;
  const rotate = rotateSlider.value;

  cube.style.transform = `translate(-50%, -50%) scale(${scaleX}, ${scaleY}) rotate(${rotate}deg)`;
  outputs[0].textContent = widthSlider.value;
  outputs[1].textContent = heightSlider.value;
  outputs[2].textContent = rotateSlider.value + '°';
}


widthSlider.addEventListener('input', updateCube);
heightSlider.addEventListener('input', updateCube);
rotateSlider.addEventListener('input', updateCube);






