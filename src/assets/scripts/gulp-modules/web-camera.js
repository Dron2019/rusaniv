const webcamFrame = document.querySelector('.webcam-frame'),
    webcamLinks = document.querySelector('.webcam-links');

webcamLinks.querySelectorAll('a').forEach((link, index) => {
    link.addEventListener('click', function(evt) {
        console.log(index);
        webcamFrame.style.filter = 'blur(5px)';
        webcamFrame.querySelector('.active').classList.remove('active');
        webcamLinks.querySelector('.active').classList.remove('active');
        webcamFrame.querySelectorAll('iframe')[index].classList.add('active');
        webcamLinks.querySelectorAll('a')[index].classList.add('active');
        setTimeout(() => {

            webcamFrame.style.filter = 'blur(0px)';
        }, 1000);

    });
})