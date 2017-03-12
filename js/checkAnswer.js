import { buildTask } from './buildTask';

let checkAnswer = (task) => {
    document.getElementById('js-quiz-form').addEventListener('submit', (e) => {
        e.preventDefault();
        validateTask(task);
    });

     function validateTask(task) {
        const insertedAnswer = document.getElementById('userAnswer');
        if(insertedAnswer.value.toLowerCase() == task.answer) {
            alert('hoorah!');
            buildTask.selectRandomNum();
        } else {
            alert('try again');
        }
     }
};

export { checkAnswer };
