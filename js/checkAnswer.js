import TaskBuilder from './buildTask';

class Validator {
    validateTask(task) {
        return function(e) {
            e.preventDefault();
            const insertedAnswer = document.getElementById('userAnswer');
            if(insertedAnswer.value.toLowerCase() == task.answer) {
                alert('hoorah!');
                TaskBuilder.buildRandomTask();
            } else {
                alert('try again');
            }
        }
    }
}

// INIT
export default new Validator();
