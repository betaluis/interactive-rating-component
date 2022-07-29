const form = document.getElementById('rating-form');
const formInputs = document.querySelectorAll('#rating-form input[name="rating"]');
const ratingSpan = document.getElementById('userRatingStat');
const thankYouCard = document.getElementById('thankYou');
const ratingCard = document.getElementById('ratingCard');
const ratingError = document.getElementById('ratingError');

let rating;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const inputsSelected = [...formInputs].filter(input => input.checked).length;
 
  // Handle error if none selected
  if (inputsSelected === 0) {
    ratingError.style.display = "block";
    ratingError.innerHTML = "Please select a rating before submitting";
    form.reset();
    return;
  }
  
  rating = document.querySelector('input[name="rating"]:checked').value;

  // Transition effect for thank you card.
  thankYouCard.style.position = "relative";
  thankYouCard.style.opacity = "1";
  thankYouCard.style.top = "0";

  // Hide the rating card.
  ratingCard.style.display = "none";
  userRatingStat.innerHTML = `You selected ${rating} out of 5`;


  form.reset();

});

