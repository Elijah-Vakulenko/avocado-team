const runningLine = document.querySelector('.tech-skills-cover');
const runningLineRotate = document.querySelector('.cover-rotate');
const clockInRunningLine = document.querySelectorAll('.tech-skills-item-block');

console.log(clockInRunningLine);

const showDarkMode = () => {
  runningLine.classList.add('dark-mode-cover');
  runningLineRotate.classList.add('dark-mode-cover-rotate');
  clockInRunningLine.forEach(item =>
    item.classList.add('dark-mode-item-block')
  );
};

const hideDarkMode = () => {
  runningLine.classList.remove('dark-mode-cover');
  runningLineRotate.classList.remove('dark-mode-cover-rotate');
  clockInRunningLine.forEach(item =>
    item.classList.remove('dark-mode-item-block')
  );
};

export { showDarkMode, hideDarkMode };
