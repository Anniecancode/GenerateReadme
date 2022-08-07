// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    BSD: `[![BSD license](https://img.shields.io/badge/License-BSD-blue.svg)]`,
    MIT: `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)]`,
    GPL: `[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)]`,
    None: ""
  }
  return badges[license]
}
   

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    BSD: `[BSD](https://choosealicense.com/licenses/bsd-2-clause/)`,
    MIT: `[MIT](https://lbesson.mit-license.org/)`,
    GPL: `[GPL](http://perso.crans.org/besson/LICENSE.html)`,
    None: ""
  }
  return licenseLink[license]
}
   

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `This project is licensed under the ${renderLicenseLink(license)} license.`
  }
}


// Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  ${renderLicenseBadge(data.license)} 

  ## Table of Contents
  - [Project Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
   ${data.description}

  ## Installation
   To install necessary dependencies, run the following command:
   
    ${data.installation}
   

  ## Usage
   ${data.usage}

  ## License
   ${renderLicenseSection(data.license)}

  ## Contributing
   ${data.contribution}

  ## Tests
   To run tests, run the following command:
   
    ${data.test}
    

  ## Questions
   If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://www.github.com/${data.username}).
`;
}


// Export module
module.exports = generateMarkdown;
