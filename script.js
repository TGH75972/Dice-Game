document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('rollbutton');

    button.addEventListener('click', async () => {
        const audio = new Audio('dice.mp3');
        await audio.play(); 
        
        const ranNum = Math.random();
        let message = '';

        if (ranNum <= 1/6) {
            message = 'Your Number: 1';
        } else if (ranNum <= 2/6) {
            message = 'Your Number: 2';
        } else if (ranNum <= 3/6) {
            message = 'Your Number: 3';
        } else if (ranNum <= 4/6) {
            message = 'Your Number: 4';
        } else if (ranNum <= 5/6) {
            message = 'Your Number: 5';
        } else {
            message = 'Your Number: 6';
        }

        setTimeout(() => {
            alert(message);
            setTimeout(() => {
                redirectToURL(ranNum);
            }, 2000); 
        }, 100); 
    });

    function redirectToURL(ranNum) {
        if (ranNum <= 1/6) {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        } else if (ranNum <= 2/6) {
            window.location.href = 'https://www.reddit.com/r/memes/';
        } else if (ranNum <= 3/6) {
            window.location.href = 'https://www.youtube.com/watch?v=jNQXAC9IVRw';
        } else if (ranNum <= 4/6) {
            window.location.href = 'https://github.com/dbisu/pico-ducky';
        } else if (ranNum <= 5/6) {
            window.location.href = 'https://amazon.com';
        } else {
            window.location.href = 'https://slack.com';
        }
    }
});
