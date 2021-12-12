const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkDown = require('./');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project'
    },
    {
        type: 'input',
        name: 'tableOfCont',
        message: 'Please list a table of contents for your project'
    },
    {
        type: 'input',
        name: 'install',
        message: 'describe how to install your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'describe the use cases for your project'
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What licenses did you use?',
        choices: [
            {name: 'MIT'},
			{name: 'Apache'},
			{name: 'BSD'},
			{name: 'GNU'},
			{name: 'ISC'},
        ]
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'please those who contributed on this project'
    },
    {
        type: 'input',
        name: 'test',
        message: 'describe how to test this project'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'list some questions for the project, ex. future directions'
    }
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) =>{
        if (err){
            throw Error(err)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const markDown = generateMarkDown(answers)
            writeToFile('README.md', markDown)
        })
}

// Function call to initialize app
init();
