import fs from 'fs';
import childProcess from 'child_process';
import chalk from 'chalk';

const log = console.log;
const yarnCmd = 'yarn global upgrade';

fs.readFile('./dotfiles/package.json', (err, data) => {
	if (err) {
		throw err;
	}

	const dependencies = JSON.parse(data).dependencies;
	let computerString = '';
	let humanString = '';
	Object.keys(dependencies).forEach(dependency => {
		computerString = `${computerString}${dependency}@latest `;
		humanString = `${humanString}${dependency}\n`;
	});
	log(`${chalk.green('Upgrading…\n')}${chalk.cyan(humanString)}${chalk.green('…now!')}`);
	childProcess.execSync(`${yarnCmd} ${computerString}`, {
		stdio: [0, 1, 2]
	});
});
