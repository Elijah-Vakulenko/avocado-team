const changeTheme = document.querySelector('#switch');
// Mobal switcher↓
const changeThemeMob = document.querySelector('#mob-switch');
const root = document.documentElement;
const p = document.querySelectorAll('p');
const li = document.querySelectorAll('li');
const a = document.querySelectorAll('a');
const h4 = document.querySelectorAll('h4');
const btn = document.querySelectorAll('button');
const faqItem = document.querySelectorAll('.faq-i');
const orderBtn = document.querySelectorAll('a');
const projectButtons = document.getElementById('.project-button'); 
const ulSocialList = document.querySelector('.social-list');

const firstTechSkillsList = document.querySelector('.tech-skills-cover:first-of-type');
const secondTechSkillsList = document.querySelector('.tech-skills-cover.cover-rotate');


const modalInput = document.querySelector('.email-field');
const modalTextArea = document.querySelector('.textarea-field');

const label = document.querySelectorAll('label');

const loadMoreBtn = document.querySelector('.load-more-btn');
const modalFormContainer = document.querySelector('.form-container');

const mobMenu = document.querySelector('.mob-menu');
const closeMobMenuBtn = document.querySelector('.close-menu-btn');

const closeMenuIcon = document.querySelector('.close-menu-icon');
const openMenuIcon = document.querySelector('.burg-icon');
const faqMoreBtn = document.querySelectorAll('.faq-icon-up');
const faqMoreDownBtn = document.querySelectorAll('.faq-icon-down');


const applyTheme = (isDark, projectButtons = []) => {
  console.log('Applying theme:', isDark ? 'dark' : 'light');

  if (isDark) {
    root.style.setProperty('background-color', '#1E2023');
    root.style.setProperty('color', 'white');
    root.style.setProperty('--social-list-bg-color', '#2A2D32');
    root.style.setProperty('--ul-social-list-before-bg', '#E4E5E6');

    p.forEach((p) => p.style.setProperty('color', '#f0f0f0'));
    li.forEach((li) => li.style.setProperty('color', '#f0f0f0'));
    a.forEach((a) => a.style.setProperty('color', '#f0f0f0'));
    h4.forEach((h4) => h4.style.setProperty('color', '#f0f0f0'));
    btn.forEach((btn) => btn.style.setProperty('color', '#f0f0f0'));
    faqItem.forEach((faqItem) => {
      // faqItem.style.setProperty('background', '#2A2D32');
      Array.from(faqItem.children).forEach((child) => child.style.setProperty('color', '#f0f0f0'));
    });
    orderBtn.forEach((orderBtn) => orderBtn.classList.add("dark-project-button"));
    projectButtons.forEach((btn) => btn.style.setProperty('--button-bg-color', '#2A2D32'));


    firstTechSkillsList.style.setProperty('background-color', '#204136');
    firstTechSkillsList.querySelectorAll('li').forEach(li => {
      li.style.setProperty('color', '#F0F0F0');
    });
    firstTechSkillsList
      .querySelectorAll('.tech-skills-item-block')
      .forEach(block => {
        block.style.setProperty('background-color', '#14C57C');
      });

    secondTechSkillsList.style.setProperty('background-color', '#2A2D32');
    secondTechSkillsList.querySelectorAll('li').forEach(li => {
      li.style.setProperty('color', '#14C57C');
    });
    secondTechSkillsList
      .querySelectorAll('.tech-skills-item-block')
      .forEach(block => {
        block.style.setProperty('background-color', '#F0F0F0');
      });

    modalInput.style.setProperty('background-color', '#2A2D32');
    modalInput.style.setProperty('color', 'rgba(240, 240, 240, 0.60)');
    modalInput.style.setProperty('caret-color', 'rgba(240, 240, 240, 0.60)');
    modalInput.style.setProperty(
      '--placeholder-color',
      'rgba(240, 240, 240, 0.60)'
    );
    modalTextArea.style.setProperty('background-color', '#2A2D32');
    modalTextArea.style.setProperty('color', 'rgba(240, 240, 240, 0.60)');
    modalTextArea.style.setProperty('caret-color', 'rgba(240, 240, 240, 0.60)');
    modalTextArea.style.setProperty(
      '--placeholder-color',
      'rgba(240, 240, 240, 0.60)'
    );

    label.forEach(p => p.style.setProperty('color', '#f0f0f0'));

    modalFormContainer.style.setProperty('background', '#2A2D32');
    loadMoreBtn.style.setProperty('color', '#f0f0f0');
    loadMoreBtn.style.setProperty('background', '#1E2023');
    mobMenu.style.setProperty('background-color', '#1E2023');
    closeMobMenuBtn.style.setProperty('background', '#1E2023');
    closeMenuIcon.style.setProperty('stroke', '#f0f0f0');
    openMenuIcon.style.setProperty('stroke', '#f0f0f0');
    openMenuIcon.style.setProperty('fill', '#f0f0f0');
    faqMoreBtn.forEach(p => p.style.setProperty('stroke', '#f0f0f0'));
    faqMoreDownBtn.forEach(p => p.style.setProperty('stroke', '#f0f0f0'));


    projectButtons.forEach((btn) => btn.style.setProperty('background-color', '#2A2D32'));

  } else {
    root.style.removeProperty('background-color');
    root.style.removeProperty('color');
    root.style.removeProperty('--social-list-bg-color');
    root.style.removeProperty('--ul-social-list-before-bg');

    p.forEach((p) => p.style.removeProperty('color'));
    li.forEach((li) => li.style.removeProperty('color'));
    a.forEach((a) => a.style.removeProperty('color'));
    h4.forEach((h4) => h4.style.removeProperty('color'));
    btn.forEach((btn) => btn.style.removeProperty('color'));
    faqItem.forEach((faqItem) => {
      // faqItem.style.removeProperty('background');
      Array.from(faqItem.children).forEach((child) => child.style.removeProperty('color'));
    });
    orderBtn.forEach((orderBtn) => orderBtn.classList.remove("dark-project-button"));
    // projectButtons.forEach((btn) => btn.classList.remove('dark-theme'));


    firstTechSkillsList.style.removeProperty('background-color');
    firstTechSkillsList.querySelectorAll('li').forEach(li => {
      li.style.removeProperty('color');
    });
    firstTechSkillsList
      .querySelectorAll('.tech-skills-item-block')
      .forEach(block => {
        block.style.removeProperty('background-color');
      });

    secondTechSkillsList.style.removeProperty('background-color');
    secondTechSkillsList.querySelectorAll('li').forEach(li => {
      li.style.removeProperty('color');
    });
    secondTechSkillsList
      .querySelectorAll('.tech-skills-item-block')
      .forEach(block => {
        block.style.removeProperty('background-color');
      });

    modalInput.style.removeProperty('background-color');
    modalInput.style.removeProperty('color');
    modalInput.style.removeProperty('caret-color');
    modalInput.style.removeProperty('--placeholder-color');
    modalTextArea.style.removeProperty('background-color');
    modalTextArea.style.removeProperty('color');
    modalTextArea.style.removeProperty('caret-color');
    modalTextArea.style.removeProperty('--placeholder-color');

    label.forEach(p => p.style.removeProperty('color'));

    modalFormContainer.style.removeProperty('background');
    loadMoreBtn.style.removeProperty('color');
    loadMoreBtn.style.removeProperty('background');
    mobMenu.style.removeProperty('background');
    closeMobMenuBtn.style.removeProperty('background');
    closeMenuIcon.style.removeProperty('stroke');
    openMenuIcon.style.removeProperty('stroke');
    openMenuIcon.style.removeProperty('fill');
    faqMoreBtn.forEach(p => p.style.removeProperty('stroke'));
    faqMoreDownBtn.forEach(p => p.style.removeProperty('stroke'));


    projectButtons.forEach((btn) => btn.style.setProperty('--button-bg-color', '#E4E5E6'));


  }
};

document.addEventListener('DOMContentLoaded', () => {
  const isDark = localStorage.getItem('theme') === 'dark';
  changeTheme.checked = isDark;
  applyTheme(isDark);
});

changeTheme.addEventListener('change', event => {
  const isDark = event.target.checked;
  applyTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
// mobal switcher
changeThemeMob.addEventListener('change', event => {
  const isDark = event.target.checked;
  applyTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// document.addEventListener('projectsRendered', (event) => {
//   const isDark = localStorage.getItem('theme') === 'dark';
//   projectButtons = event.detail;
//   applyTheme(isDark, projectButtons); 
// });

// console.log(projectButtons);
