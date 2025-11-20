// Get the buttons and pages
const page1Btn = document.getElementById('page1-btn');
const page2Btn = document.getElementById('page2-btn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const nextBtn = document.getElementById('next-btn');

// Add event listeners
page1Btn.addEventListener('click', () => {
  page1.style.display = 'block';
  page2.style.display = 'none';
});

page2Btn.addEventListener('click', () => {
  page1.style.display = 'none';
  page2.style.display = 'block';
});

nextBtn.addEventListener('click', () => {
  page1.style.display = 'none';
  page2.style.display = 'block';
});
