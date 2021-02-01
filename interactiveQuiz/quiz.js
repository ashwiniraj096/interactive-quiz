const form = document.querySelector('.quizsection');
const expectedAnswers = ["Yes", "Yes", "Yes", "Yes"];

const checkvaluesubmission = () => {
    if (form.q1.value && form.q2.value && form.q3.value && form.q4.value) {
        document.querySelector('#submit').removeAttribute("disabled");
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submittedAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    let score = 0;
    submittedAnswers.forEach((val, index) => {
        if (val === expectedAnswers[index]) {
            score += 25;
        }
    });

    document.querySelector('.result').classList.remove('hide');
    scrollTo(0, 0);

    let output = 0;
    const timer = setInterval(() => {
        document.querySelector('#score').textContent = output;
        if (score === output) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 5);

});

