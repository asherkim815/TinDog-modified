document.querySelectorAll('.sign-up').forEach((button, index) => {
  button.addEventListener('mouseover', function () {
    this.classList.add('gradient-background');
    document
      .querySelector(`.card-head${index + 1}`)
      .classList.add('gradient-background');
  });
});

document.querySelectorAll('.sign-up').forEach((button, index) => {
  button.addEventListener('mouseout', function () {
    this.classList.remove('gradient-background');
    document
      .querySelector(`.card-head${index + 1}`)
      .classList.remove('gradient-background');
  });
});
