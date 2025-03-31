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

const jsonData = JSON.parse(fs.readFileSync(options.input, 'utf-8'));

const minAsset = jsonData.reduce((min, asset) => (asset.value < min.value ? asset : min), jsonData[0]);

const outputString = `${minAsset.txt}:${minAsset.value}`;

if (options.display) {
  console.log(outputString);
}

if (options.output) {
  fs.writeFileSync(options.output, outputString, 'utf-8');
  console.log(`Result written to ${options.output}`);
}
