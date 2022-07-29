const form = document.getElementById('rating-form');

const ratingSpan = document.getElementById('userRatingStat');

let rating;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  rating = document.querySelector('input[name="rating"]:checked').value;

  userRatingStat.innerHTML = `You selected ${rating} out of 5`;
});

