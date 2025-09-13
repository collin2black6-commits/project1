// src/js/utils.js

export function rand(max) {
  return Math.floor(Math.random() * max);
}

export function changeBrightness(factor, sprite) {
  const virtCanvas = document.createElement('canvas');
  virtCanvas.width = 500;
  virtCanvas.height = 500;
  const context = virtCanvas.getContext('2d');
  context.drawImage(sprite, 0, 0, 500, 500);

  const imgData = context.getImageData(0, 0, 500, 500);
  for (let i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] *= factor;
    imgData.data[i + 1] *= factor;
    imgData.data[i + 2] *= factor;
  }

  context.putImageData(imgData, 0, 0);

  const spriteOutput = new Image();
  spriteOutput.src = virtCanvas.toDataURL();
  virtCanvas.remove();
  return spriteOutput;
}

export function displayVictoryMess(moves) {
  document.getElementById('moves').innerHTML = `You Moved ${moves} Steps.`;
  toggleVisablity('Message-Container');
}

export function toggleVisablity(id) {
  const el = document.getElementById(id);
  el.style.visibility = el.style.visibility === 'visible' ? 'hidden' : 'visible';
}
