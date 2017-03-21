class Task {
    constructor(image,answer) {
        this.image = image;
        this.answer = answer;
    }
}

class TaskBuilder {
    constructor() {
        this.taskList = [];
        this.randomNum;
        this.fetched = false;
        this.currentTask = null;
    }
    getTaskData(data_path = 'https://raw.githubusercontent.com/FlyingCarpets/quiz3/master/data/questions.json') {
        return new Promise((resolve, reject) => {
            $.getJSON(data_path, (data) => {
                data.questions.map((data) => {
                    this.taskList.push(data);
                    this.fetched = true;
                });
                resolve();
            });
        })
    }
    selectRandomNum() {
        if(this.taskList.length > 0) {
            this.randomNum = Math.floor(Math.random() * this.taskList.length);
        } else {
            alert('game over');
        }
    }

    getCurrentTask() {
        return this.currentTask;
    }

    buildRandomTask() {
        if (!this.fetched) this.getTaskData();

        this.selectRandomNum();
        let task = new Task(this.taskList[this.randomNum].image, this.taskList[this.randomNum].answer);
        this.taskList.splice(this.randomNum, 1);
        this.currentTask = task;
        return task;
    }
}

export default new TaskBuilder();
