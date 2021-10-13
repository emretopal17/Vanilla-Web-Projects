const questionShowBtn = document.querySelectorAll('#question-show');
const questionHiddenBtn = document.querySelectorAll('#question-hidden');
const explanationText = document.querySelectorAll('#explanation');
const questionContainer = document.querySelectorAll('#question-container');

questionShowBtn.forEach(function (btn) {
   btn.addEventListener('click', (e) => {
      const cont = e.currentTarget.parentElement.parentElement; // question-contaner elementi
      const exp = cont.querySelector('#question-container > #explanation');
      const plusIcon = cont.querySelector('#question-container > #button-container > #question-show > span') ;
      const minusIcon = cont.querySelector(' #button-container > #question-hidden>span') ;
      minusIcon.classList.remove('hidden');
      plusIcon.classList.add('hidden');
      exp.classList.remove('hidden');
      cont.classList.remove('decrease-container');

   })
})


questionHiddenBtn.forEach(function (btn) {
   btn.addEventListener('click', (e) => {
      const cont = e.currentTarget.parentElement.parentElement;
      const exp = cont.querySelector('#question-container >#explanation');
      const plusIcon = cont.querySelector('#question-container > #button-container > #question-show > span') ;
      const minusIcon = cont.querySelector(' #button-container > #question-hidden>span') ;
      minusIcon.classList.add('hidden')
      plusIcon.classList.remove('hidden');
      exp.classList.add('hidden');
      cont.classList.add('decrease-container');

   })
})



