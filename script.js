window.onload = function () {
const radios = document.querySelectorAll('.box-content input[type="radio"]');
      radios.forEach(function (radio) {
      radio.onclick = function () {
        const allAccordions = document.querySelectorAll('.accordion-body');
        allAccordions.forEach(function (acc) {
          acc.style.display = "none";
        });
        const box = radio.closest('.box-content');
        const accordion = box.querySelector('.accordion-body');
        if (accordion) {
          accordion.style.display = "block";
        }
      };
    });
    const allAccordions = document.querySelectorAll('.accordion-body');
    allAccordions.forEach(function (acc) {
      acc.style.display = "none";
    });
  };
   

       
        

   
   

