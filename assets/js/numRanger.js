const
  range = document.getElementById('range'),
  numRanger = document.getElementById('numRanger'),
  setValue = ()=>{
    const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
      newPosition = 10 - (newValue * 0.2);
    numRanger.innerHTML = `<span>${range.value}</span>`;
    numRanger.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);