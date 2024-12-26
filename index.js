document.querySelectorAll('.sign-up-button').forEach((button, index) => {
  button.addEventListener('mouseover', function () {
    this.classList.add('gradient-background1');
    document
      .querySelector(`.pricing-card-head${index + 1}`)
      .classList.add('gradient-background1');
  });
});

document.querySelectorAll('.sign-up-button').forEach((button, index) => {
  button.addEventListener('mouseout', function () {
    this.classList.remove('gradient-background1');
    document
      .querySelector(`.pricing-card-head${index + 1}`)
      .classList.remove('gradient-background1');
  });
});
