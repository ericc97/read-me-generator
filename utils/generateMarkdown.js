
  function renderLicense(license) {
    console.log('license: ', license);
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache':
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'BSD':
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      case 'GNU':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'ISC':
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      default:
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkDown(data) {
    console.log('data is =>', data);
    return `
  # Title
  ${data.title}

  # Table of Contents
  * [Title](#Title)\n
  * [Description](#Description)\n
  * [Installation](#Installation)\n
  * [Usage](#Usage)\n
  * [Contributors](Contributors)\n
  * [Tests](#Tests)\n
  * [Questions](#Questions)\n
  * [License](#Licenses)\n
    

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
    
  ### Contributors
  ${data.contribute}

  ### Tests
  ${data.test}

  ### Github information 
  (github.com/${data.questions})

  ### Contact info
  If you have any questions please feel free to shoot me an email:
  ${data.email}

  ### Licenses
  ${renderLicense(data.license)}

  `;
  
  }
  
  module.exports = generateMarkDown;
  