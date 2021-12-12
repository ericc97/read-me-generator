const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkDown = require('./utils/generateMarkdown');

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
        name: 'license',
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
        message: 'Enter your github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email'
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
        .then(data => {
            const markDown = generateMarkDown(data)
            writeToFile('README.md', markDown)
        })
}

// Function call to initialize app
init();
