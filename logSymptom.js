const Firebase = require('firebase');
const symptomLog =  new Firebase('https://adhd-symptom-log.firebaseio.com/');
symptomLog.update({ [new Date()]: process.argv.slice(2).join(' ') }, (error) => {
  error ? console.error(error) : console.log('logged successfully 🌈');
  process.exit();
});
