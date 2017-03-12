import { placeTask } from './placeTask';
import { checkAnswer } from './checkAnswer';

let buildTask = (() => {
    let taskList = [];
    let randomNum;

    class Task {
        constructor(image,answer) {
            this.image = image;
            this.answer = answer;
        }
    }

    function getTaskData(data_path) {
        $.getJSON(data_path, (data) => {
            data.questions.map((data) => {
                taskList.push(data);
            });
            selectRandomNum();
        });
    }

    function selectRandomNum() {
        if(taskList.length > 0) {
            randomNum = Math.floor(Math.random() * taskList.length);
            buildRandomTask();
        } else {
            alert('game over');
        }
    }

    function buildRandomTask() {
        let task = new Task(taskList[randomNum].image, taskList[randomNum].answer);
        taskList.splice(randomNum, 1);
        placeTask(task);
        checkAnswer(task);
    }

    return {
        getTaskData,
        selectRandomNum
    }
})();

buildTask.getTaskData('https://raw.githubusercontent.com/FlyingCarpets/quiz3/master/data/questions.json');

export { buildTask };
