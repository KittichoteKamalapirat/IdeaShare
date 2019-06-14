// Open the register modal
document
  .getElementById('register-button')
  .addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
  });

// close the register modal
console.log(document.querySelector('.close'));
document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});
