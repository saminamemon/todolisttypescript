#!/user/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.neon("lets start  'TO DO LIST'");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let todolist = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "what do you want to do:?"
        },
        {
            type: "input",
            name: "addmore",
            message: " Do you want to add more ?",
            default: false
        },
    ]);
    const { TODO, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (TODO) {
        todolist.push(TODO);
    }
    else {
        console.log("Kindly Add Valid Input");
    }
}
if (todolist.length > 0) {
    console.log("Your Todo List:");
    todolist.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No Todos Found!");
}
