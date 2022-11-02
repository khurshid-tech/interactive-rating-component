let ratingNumber = document.querySelectorAll('.rating-number');
let starValue;
ratingNumber.forEach(element => {
    element.addEventListener('click', () => {
        ratingNumber.forEach(element => {
            element.classList.remove('active');
        })
      element.classList.add('active');
      starValue = element.dataset.star;
    });
  });


function submitRating(){
    if(!starValue){
        alert('please select any rating');
        return false;
    }
    document.querySelector('.rating-part-1').style.display='none';
    document.querySelector('.rating-part-2').style.display='flex';
    document.querySelector('#starValue').textContent=starValue;
}