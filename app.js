window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "rgb(255, 154, 162)",
        "rgb(132, 233, 121)",
        "rgb(142, 223, 193)",
        "rgb(247, 239, 100)",
        "rgb(100, 125, 221)",
        "rgb(239, 189, 145)",
    
    ];



   
    pads.forEach((pad, index ) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);

        });

    });


    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        });
        
        
    };
});

