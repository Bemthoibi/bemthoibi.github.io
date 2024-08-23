function Confetti() { //confetti
    confetti({
        particleCount: 1000,
        spread: 400,
    });
}

document.getElementById('button').addEventListener('click', function() {
    Confetti();
    setTimeout(function() {
        window.location.href = 'birthday.html'; //joining birthday.html, my main page
    }, 1000); 
});
