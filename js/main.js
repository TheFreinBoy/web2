// 1 task
const box = document.querySelector('.Box');
const display = document.querySelector('.XY h1');

box.addEventListener('mousemove', (e) => {
  const rect = box.getBoundingClientRect();

  
  const x = Math.max(0, Math.floor(e.clientX - rect.left));
  const y = Math.max(0, Math.floor(e.clientY - rect.top));

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


function sortBox(box) {
  const section = box.querySelector('section');
  const labels = Array.from(section.querySelectorAll('label'));

  const itemsToSort = labels.map(label => {
    const id = label.getAttribute('for');
    const input = section.querySelector(`input[id='${id}']`);
    
    const text = label.childNodes[2].textContent.trim();

    return { text, inputEl: input, labelEl: label };
  });

  itemsToSort.sort((a, b) => a.text.localeCompare(b.text, 'uk'));

  section.innerHTML = ''; 
  itemsToSort.forEach(item => {
    section.appendChild(item.inputEl);
    section.appendChild(item.labelEl);
  });
}

function moveChecked(fromBox, toBox) {
  const checkboxes = fromBox.querySelectorAll("input[type='checkbox']:checked");
  const targetSection = toBox.querySelector('section'); // Отримуємо секцію один раз

  checkboxes.forEach(checkbox => {
    const label = fromBox.querySelector(`label[for='${checkbox.id}']`);

    checkbox.checked = false;

    targetSection.appendChild(checkbox);
    targetSection.appendChild(label);
  });

  sortBox(toBox);
}

rightBtn.addEventListener('click', () => moveChecked(leftBox, rightBox));
leftBtn.addEventListener('click', () => moveChecked(rightBox, leftBox));

document.addEventListener('DOMContentLoaded', () => {
  sortBox(leftBox);
});
// 3 task
const textarea = document.querySelector('.numbers-box textarea');
const visualBox = document.getElementById('visual-box');

const maxCellsPerRow = 9;
const maxRows = 5; 

textarea.addEventListener('input', () => {
  
  let text = textarea.value;
 
  let filteredText = text.replace(/[^01\n ]/g, ''); 
  
  visualBox.innerHTML = ''; 

  let currentRow = document.createElement('div');
  currentRow.classList.add('visual-row');
  visualBox.appendChild(currentRow);
  
  let cellCounter = 0;
  let rowCounter = 1; 
  
  let processedText = ""; 
  
  for (let char of filteredText) {
    
    if (char === '\n') {
      
      if (rowCounter < maxRows) {
        currentRow = document.createElement('div');
        currentRow.classList.add('visual-row');
        visualBox.appendChild(currentRow);
        
        rowCounter++; 
        cellCounter = 0; 
        processedText += char; 
      } else {     
        break; 
      }
    
    } else {
      
      if (cellCounter === maxCellsPerRow) {
        if (rowCounter < maxRows) {         
          currentRow = document.createElement('div');
          currentRow.classList.add('visual-row');
          visualBox.appendChild(currentRow);
          
          rowCounter++; 
          cellCounter = 0; 
        } else {        
          break; 
        }
      }
      
      const cell = document.createElement('div');
      cell.classList.add('cell');
      
      if (char === '1') {
        cell.classList.add('blue');
      } else if (char === '0') {
        cell.classList.add('black');
      } else if (char === ' ') {
        cell.classList.add('space'); 
      }
      
      currentRow.appendChild(cell);
      cellCounter++; 
      processedText += char; 
    }
  }
  
  if (textarea.value !== processedText) {
    textarea.value = processedText;
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

  cube.style.scale = `${scaleX} ${scaleY}`;
  cube.style.rotate = `${rotate}deg`;
  
  outputs[0].textContent = widthSlider.value;
  outputs[1].textContent = heightSlider.value;
  outputs[2].textContent = rotateSlider.value + '°';
}

widthSlider.addEventListener('input', updateCube);
heightSlider.addEventListener('input', updateCube);
rotateSlider.addEventListener('input', updateCube);

