const loadQuestionScript = (name, quizType, array, quizSize = 10) => {
    let nums = [];    // stores indexes of array to parse question later
    const answerList = [];    // contains option clicked by the user

    let interval = null;
    const timer = document.getElementById('timer');

    // quiz countdown timer function
    const startTimer = (minute, second) => {
        const countDownDate = new Date().getTime() + (minute * 60000 + second * 1000);

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const mins = Math.floor((distance % (3600000)) / (1000 * 60));
            const secs = Math.floor((distance % (1000 * 60)) / 1000);

            let time = "";

            if (mins < 10) time += "0";
            time += (mins + "m : ");

            if (secs < 10) time += "0";
            time += (secs + "s");

            timer.innerHTML = time;

            if (distance < 0) endQuiz();
        }, 1000);
    };

    startTimer(2, 1);    // quiz countdown timer starts running from here

    const stopTimer = () => {
        quizOver = true;
        clearInterval(interval);
        timer.innerHTML = "-- : --";
    };

    const questionCategory = document.getElementById('question-category');
    const questionNumber = document.getElementById('question-number');

    questionCategory.innerHTML = selectedCategory.innerHTML;

    const question = document.getElementById('question');
    const answer = document.getElementsByClassName('answer');

    const next = document.getElementById('next');
    const previous = document.getElementById('previous');
    const finish = document.getElementById('finish');

    let i = 0;    // stores array index
    let temp = [];    // stores indexes of array to randomly select from
    let arraySize = array.length;    // size of question array
    let answered = 0;    // count of questions being answered by user
    let quizOver = false;

    for (let x = 0; x < array.length; ++ x) temp.push(x);
    for (let x = 0; x < quizSize; ++ x) answerList[x] = null;

    for (let x = 0; x < quizSize; ++ x) {
        const num = temp[Math.floor(Math.random() * arraySize --)];

        const dummy = temp;
        temp = [];

        for (const element of dummy) if (element != num) temp.push(element);

        nums.push(num);
    }

    const disablePreviousButton = () => previous.classList.remove('active-navigate');
    
    const enablePreviousButton = () => previous.classList.add('active-navigate');

    const disableNextButton = () => next.classList.remove('active-navigate');

    const enableNextButton = () => next.classList.add('active-navigate');

    const enableFinish = () => {
        finish.disabled = false;
        finish.classList.add('active-navigate');
    };

    const disableFinish = () => {
        finish.disabled = true;
        finish.classList.remove('active-navigate');
    };

    const updateQuestionNumber = (number) => {
        questionNumber.innerHTML = (number);    //updates the question number

        questionNumber.style.padding = (number > 9 ? "0.5rem" : "0.5rem 1rem");
    }

    const loadOptions = () => {
        for (const ans of answer) {
            ans.classList.remove('selected-option');

            if (answerList[i] == null) ans.classList.add('temp');
            else ans.classList.remove('temp');
        }

        if (answerList[i] != null) {
            answer[answerList[i]].classList.add('selected-option');
        }
    };

    let correct = 0, incorrect = 0, resultArray = [];

    const getResult = () => {
        for (let x = 0; x < quizSize; ++ x) {
            resultArray[x] = {'correct': null, 'incorrect': null};
            
            if (answerList[x] != null) {
                resultArray[x]['correct'] = array[nums[x]]['correct'];

                if (answerList[x] != array[nums[x]]['correct']) {
                    ++ incorrect;
                    resultArray[x]['incorrect'] = answerList[x];
                } else ++ correct;
            }
        }
    };

    const showAnswers = () => {
        for (const ans of answer) {
            ans.classList.remove('correct-answer');
            ans.classList.remove('wrong-answer');
        }

        if (resultArray[i]['correct'] != null) {
            answer[resultArray[i]['correct']].classList.add('correct-answer');
        }

        if (resultArray[i]['incorrect'] != null) {
            answer[resultArray[i]['incorrect']].classList.add('wrong-answer');
        }
    };

    const loadQuestion = (ind) => {
        updateQuestionNumber(ind+1);

        // inserts question into question box from the array
        question.innerHTML = array[nums[ind]]['question'];

        // inserts options into option button from the array
        answer[0].innerHTML = array[nums[ind]]['0'];
        answer[1].innerHTML = array[nums[ind]]['1'];
        answer[2].innerHTML = array[nums[ind]]['2'];
        answer[3].innerHTML = array[nums[ind]]['3'];

        if (quizOver) showAnswers(); else loadOptions();

        if (ind === 0) disablePreviousButton();
        if (ind > 0) enablePreviousButton();

        if (ind < quizSize-1) enableNextButton();
        if (ind === quizSize-1) disableNextButton();
    };

    loadQuestion(i = 0);

    previous.onclick = () => {
        if (i > 0) loadQuestion(-- i);    // loads previous question
        else console.warn("no previous question");
    };

    next.onclick = () => {
        if (i < quizSize-1) loadQuestion(++ i);    // loads next question
        else console.warn("no next question");
    };

    // this code runs when user clicks on any option of the given question

    for (let x = 0; x < 4; ++ x) {
        answer[x].addEventListener('click', () => {
            if (answerList[i] == null) {
                ++ answered;
                for (const a of answer) a.classList.remove('temp');
            } else {
                answer[answerList[i]].classList.remove('selected-option');
            }

            answerList[i] = x;
            answer[x].classList.add('selected-option');

            if (answered == quizSize) enableFinish(); else disableFinish();
        });
    }

    // this code will run after clicking on finish or when time gets over;

    const endQuiz = () => {
        stopTimer();

        for (const ans of answer) {
            ans.disabled = true;
            ans.classList.remove('temp');
            ans.classList.remove('selected-option');
        }

        getResult();
        loadQuestion(i = 0);

        enableFinish();
        finish.innerHTML = `Go to results <i class="fa-solid fa-graduation-cap"></i>`;
    };

    finish.onclick = () => {
        if (quizOver) {
            showQuizResult(name, quizType, quizSize, correct, incorrect);
        } else endQuiz();
    };
};