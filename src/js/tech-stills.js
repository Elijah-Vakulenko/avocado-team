document.addEventListener("DOMContentLoaded", function() {
  
  const lists = document.querySelectorAll('.tech-skills-list');
  lists.forEach(list => {
    const clone = list.cloneNode(true);
    list.parentElement.appendChild(clone);
  });
});


const runningLine = document.querySelector('.tech-skills-cover');
const runningLineRotate = document.querySelector('.cover-rotate');
const clockInRunningLine = document.querySelectorAll('.tech-skills-item-block');

export const showDarkMode = () => {
  runningLine.classList.add('dark-mode-cover');
  runningLineRotate.classList.add('dark-mode-cover-rotate');
  clockInRunningLine.forEach(item =>
    item.classList.add('dark-mode-item-block')
  );
};

export const hideDarkMode = () => {
  runningLine.classList.remove('dark-mode-cover');
  runningLineRotate.classList.remove('dark-mode-cover-rotate');
  clockInRunningLine.forEach(item =>
    item.classList.remove('dark-mode-item-block')
  );
};
