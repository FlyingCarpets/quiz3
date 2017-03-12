import { placeTask } from './placeTask';
import { checkAnswer } from './checkAnswer';

let buildTask = (() => {
    let task;
    let taskList = [];
    let randomNum;

    class Task {
        constructor(image,answer) {
            this.image = image;
            this.answer = answer;
        }
    }

    function publicGetTaskData(data_path) {
        $.getJSON(data_path, (data) => {
            data.questions.map((data) => {
                taskList.push(data);
            });
            publicSelectRandomNum();
        });
    }

    function publicSelectRandomNum() {
        if(taskList.length > 0) {
            randomNum = Math.floor(Math.random() * taskList.length);
            buildRandomTask();
        } else {
            alert('game over');
        }
    }

    function buildRandomTask() {
        task = new Task(taskList[randomNum].image, taskList[randomNum].answer);
        taskList.splice(randomNum, 1);
        placeTask(task);
        checkAnswer(task);
    }

    return {
        getTaskData: publicGetTaskData,
        selectRandomNum: publicSelectRandomNum,
    }
})();

buildTask.getTaskData('https://raw.githubusercontent.com/FlyingCarpets/quiz2/gh-pages/data/questions.json');

export { buildTask };
