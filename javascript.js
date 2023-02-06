const submitBtn = document.getElementById('submit');
const container = document.getElementById('container');
const rating1 = document.getElementById('rating-1');
const rating2 = document.getElementById('rating-2');
const rating3 = document.getElementById('rating-3');
const rating4 = document.getElementById('rating-4');
const rating5 = document.getElementById('rating-5');
let rating = 0;

rating1.addEventListener('click', ()=> {
    return rating = 1;
});
rating2.addEventListener('click', ()=> {
    return rating = 2;
});
rating3.addEventListener('click', ()=> {
    return rating = 3;
});
rating4.addEventListener('click', ()=> {
    return rating = 4;
});
rating5.addEventListener('click', ()=> {
    return rating = 5;
});

submitBtn.addEventListener('click', ()=> {
    if (rating === 0) {
        alert('Please Select A Rating!');
    } else {
        container.innerHTML = `
        <div class="container2 flex">
             <img src="images/illustration-thank-you.svg" alt="" class="thanks-img">
            <p class="rating-text">You selected ${rating} out of 5</p>
             <h2 class="thanks-text">Thank You!</h2>
             <p class="component2-text">We appreciate you taking the time to give a rating. If you ever need more support, 
             don't hesitate to get in touch!</p>
         </div>
        `;
    }
    })

