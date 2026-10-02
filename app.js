document.addEventListener('DOMContentLoaded', () => {
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('chip--active'));
      chip.classList.add('chip--active');
    });
  });
  console.log('SmartHub Web Application initialized.');
});