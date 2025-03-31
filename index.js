const { program } = require('commander');
const fs = require('fs');

program
  .option('-i, --input <path>', 'Path to input JSON file')
  .option('-o, --output <path>', 'Path to output file')
  .option('-d, --display', 'Display result in console');

program.parse(process.argv);

const options = program.opts();

if (!options.input) {
  console.error('Please, specify input file');
  process.exit(1);
}

if (!fs.existsSync(options.input)) {
  console.error('Cannot find input file');
  process.exit(1);
}

console.log('Input file:', options.input);

if (options.display) {
  console.log('Displaying results...');
}

if (options.output) {
  console.log('Output file:', options.output);
}

