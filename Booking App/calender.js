const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})




// onclick functions
function openBookingpage() {
    document.getElementById("myBook").style.display = "block"; 
    }
    
function openPage() {
  document.getElementById("mySelection").style.display = "block"; 
  }

  function openMovieseatpage() {
    document.getElementById("mySelection").style.display = "block"; 
    }
// booking summary