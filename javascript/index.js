let selectedCategory = null;

const input = document.getElementsByTagName('input')[0];
const category = document.getElementsByClassName('category');
const start = document.getElementsByClassName('start')[0];

const home = document.getElementById('home');
const content = document.getElementById('content');

const activateStart = () => {
    start.disabled = false;
    start.classList.add('active-start');
};

const deactivateStart = () => {
    start.disabled = true;
    start.classList.remove('active-start');
};

const checkInput = (str) => {
    return (/^[a-z]+$/i.test(str) && str.length > 2);
}

input.oninput = () => {
    if (checkInput(input.value.trim())) {
        if (selectedCategory != null) activateStart();
    } else {
        deactivateStart();
    }
};

for (const cat of category) {
    cat.addEventListener("click", () => {
        if (selectedCategory == null) {
            for (const c of category) c.classList.remove('temp');
        } else {
            selectedCategory.classList.remove('selected-option');
        }

        cat.classList.add('selected-option');
        selectedCategory = cat;

        if (checkInput(input.value.trim())) activateStart();
    });
}

const questionType = {"Arithmetic Aptitude": aptitude, "Logical Reasoning": reasoning, "General Knowledge": knowledge, "English Grammar": grammar};

const runOnStart = () => {
    home.style.display = "none";
    content.style.display = "flex";
    document.getElementsByTagName('footer')[0].style.padding = "0.5rem 0";

    const type = selectedCategory.innerHTML.trim();

    loadQuestionScript(input.value.trim(), type, questionType[type]);
};

start.onclick = runOnStart;