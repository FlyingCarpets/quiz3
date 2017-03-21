// Polyfills
import 'babel-polyfill';
import 'classlist-polyfill';

// Main functions
import TaskBuilder from './buildTask';
import placeTask from './placeTask';
import Validator from './checkAnswer';

Promise.resolve(TaskBuilder.getTaskData())
    .then(() => TaskBuilder.buildRandomTask())
    .then(() => {
        placeTask(TaskBuilder.getCurrentTask());
        
        document.getElementById('js-quiz-form').addEventListener('submit', e => {
            Validator.validateTask(TaskBuilder.getCurrentTask())(e);
            placeTask(TaskBuilder.getCurrentTask());
        })});
