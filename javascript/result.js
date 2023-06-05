const showQuizResult = (name, quizType, quizSize, correct, incorrect) => {
    const quizResult = document.getElementById('quiz-result');

    content.style.display = "none";
    quizResult.style.display = "flex";

    let accuracy = 0, percentage = 0;

    if ((correct + incorrect) > 0) {
        accuracy = ((correct / (correct + incorrect)) * 100).toFixed(2);
    }

    percentage = ((correct / quizSize) * 100).toFixed(2);

    const degree = (360 / quizSize);
    const angle1 = (correct * degree), angle2 = (angle1 + incorrect * degree);

    const getRemarks = () => {
        if (percentage < 21) return "Poor";
        if (percentage < 51) return "Average";
        if (percentage < 81) return "Good";

        return "Outstanding";
    }

    const pieChart = document.getElementById('pie-chart');
    const performance = document.getElementsByClassName('performance');

    pieChart.style.backgroundImage = `conic-gradient(
        var(--correct-color) 0deg,
        var(--correct-color) ${angle1}deg,
        #dc3232 ${angle1}deg,
        #dc3232 ${angle2}deg,
        #0694a8 ${angle2}deg,
        #0694a8 360deg
    )`;

    performance[0].innerHTML = name;
    performance[1].innerHTML = quizType;
    performance[2].innerHTML = quizSize;
    performance[3].innerHTML = correct + `<i class="fa-solid fa-circle-check"></i>`;
    performance[4].innerHTML = incorrect + `<i class="fa-solid fa-circle-xmark"></i>`;
    performance[5].innerHTML = (quizSize - correct - incorrect) + `<i class="fa-solid fa-circle-minus"></i>`;
    performance[6].innerHTML = (accuracy + "%");
    performance[7].innerHTML = (percentage + "%");
    performance[8].innerHTML = getRemarks();

    const goToHome = document.getElementById('go-to-home');

    goToHome.onclick = () => {
        window.location.reload();
    };
}