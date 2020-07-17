const inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type : 'input',
        message: `What Is You're Trainers name ?`,
        name: 'trainerName'
    },
    {
        type : 'password',
        message: `Password :`,
        name : `trainerPassword`
    },
    {
        type: 'list',
        message: `Choose You're First Pokemon`,
        choices: [`Pickachu`, `Bulbasaur`,`Squirtle`],
        name: 'trainerChoice'
    },
    {
        type: 'input',
        message: `What Would You like to Name your Pokemon`,
        name:`trainerPokemonName`
    },
    {
        type: "confirm",
        message: 'Are You Sure:',
        default: true,
        name: 'trainerConfirm'
    }
  ])
   .then(answers => {
       if(answers.trainerConfirm === true){
            if(answers.trainerPokemonName !== 'no'){
                console.log(`Hello ${answers.trainerName}, ${answers.trainerPokemonName} The ${answers.trainerChoice} is ready for battle!`);
               } else{
                console.log(`Hello ${answers.trainerName},${answers.trainerChoice} is ready for battle!`)
               } 
            } else {
           console.log(`Please Come Back ${answers.trainerName}`);
       }
   }).catch((error) => {
    console.log('You Had An Error');
  });