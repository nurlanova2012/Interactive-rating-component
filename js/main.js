var hundleBtn = document.querySelectorAll(".menu-link");
var submit = document.querySelector("#submit");
var resultCard = document.querySelector("#result-card");
var result = document.querySelector("#result");
var ratingCard = document.querySelector("#rating-card");

hundleBtn.forEach(btn => {
  btn.addEventListener('click', function setActiveBtn() {   
      result.innerHTML = `You selected ${btn.innerHTML} out of 5`;
  });
})

submit.addEventListener('click', function submitRating() {
  resultCard.style.display = 'flex';
  ratingCard.style.display = 'none';
})
