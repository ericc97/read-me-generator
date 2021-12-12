

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderTitle(data) {
    if (data === true) {
      return;
    }
  }
  
  function renderDescription(data) {
    if (data === true){
      return;
    }
  }
  
  function renderTableOfCont(data) {
    if (data === true){
      return;
    }
  }
  function renderInstall(data) {
    if (data === true){
      return;
    }
  }
  
  function renderUsage(data) {
    if (data === true){
      return;
    }
  }
  
  function renderContribute(data) {
    if (data === true){
      return;
    }
  }
  
  function renderTest(data) {
    if (data === true){
      return;
    }
  }
  function renderQuestions(data) {
    if (data === true){
      return;
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    console.log('license: ', license);
    switch (license) {
      case 'MIT':
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      case 'Apache':
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      case 'BSD':
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      case 'GNU':
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      case 'ISC':
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
        `
      default:
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
  
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkDown(data) {
    console.log('data is =>', data);
    
  
  }
  
  module.exports = generateMarkDown;
  