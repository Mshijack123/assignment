var button = document.querySelectorAll('.btn');

button[1].addEventListener('click',(e)=>{
     // console.log('hijack');
      console.log(e.target);
     e.target.classList.add("blues");
      //document.querySelector('.symbols').innerHTML = e.target;
})
