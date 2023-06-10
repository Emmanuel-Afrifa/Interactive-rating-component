
var rating;

function pageOne(){
    let ratings = document.getElementsByClassName('rating');


    for (let i=0; i<ratings.length; i++){
        ratings[i].addEventListener('click', getRating);
    
    }

    function getRating(event){
        rating = event.target.innerHTML;
        console.log(rating)
        sessionStorage.setItem('rating', rating);
        event.target.removeEventListener('click', getRating)
        // return rating;
    }

    

    function submit(){
        window.location.replace('thank-you.html')
        // let feedbackDiv = document.getElementById('feedback')
        // return newPar = `you selected ${rating} of 5`;    
    }

    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', submit);  
}

function pageTwo(){
        rating = sessionStorage.getItem('rating');
        console.log(rating)
        let feedBackEle = document.getElementById('feedback');
        if (rating !== null){
            feedBackEle.innerHTML = `you selected ${rating} out of 5`;
        }
        else {
            feedBackEle.innerHTML = '';
        }
        console.log(feedBackEle.innerHTML);   
}

function mainFunc(){
    if (window.location.href.slice(22) === 'index.html'){
        pageOne();
    }
    else if (window.location.href.slice(22) === 'thank-you.html'){
        pageTwo();
    }
}

window.onload = mainFunc;

