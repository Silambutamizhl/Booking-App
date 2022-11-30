 const container = document.querySelector('.seat-container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// Summary Elements
const summaryTotal = document.getElementById('summary_total');


   const cgst = document.getElementById('cgst');
   const sgst = document.getElementById('igst');
   const basePrice = document.getElementById('baseprice');
   const tmc = document.getElementById('tmc');
   const convenienceFees = document.getElementById('conveniencefees');
   const baseAmount = document.getElementById('baseAmount');
   const GrandTotal = document.getElementById('grand_total');



populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  updatesummary();
  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}


function updatesummary(){
  summaryTotal.innerText = total.innerText;
 
  GrandTotal.innerText = summaryTotal.innerText + cgst.innerText + sgst.innerText
   + baseAmount.innerText + tmc.innerText + convenienceFees.innerText 
   + basePrice.innerText; 
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();


/*--------------------------------------BOX-----------------------*/
 
function openSummary() {
  document.getElementById("summary").style.display = "block";
  document.getElementById("mySelection").style.display = "none";

  }
function closeTicket() {
  document.getElementById("myAcceptance-box").style.display = "none";
  }

 