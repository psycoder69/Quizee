let beating = false;
const heart = document.getElementsByClassName('fa-heart')[0];

const toggleHeartBeat = () => {
    if (beating) heart.classList.remove('fa-beat');
    else heart.classList.add('fa-beat');

    beating = (1 - beating);
};

heart.onclick = toggleHeartBeat;