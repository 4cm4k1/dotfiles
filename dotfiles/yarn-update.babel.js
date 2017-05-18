import fs from 'fs';
import childProcess from 'child_process';

fs.readFile('./package.json', (err, data) => {
	if (err) {
		throw err;
	}

	const dependencies = JSON.parse(data).dependencies;
	let string = '';
	const yarnCmd = 'yarn global upgrade';
	Object.keys(dependencies).forEach(dependency => {
		string = `${string} ${dependency} `;
	});
	console.log(`Upgrading ${string} now!`);
	childProcess.execSync(`${yarnCmd} ${string}`);
});
