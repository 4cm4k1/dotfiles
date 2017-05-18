import fs from 'fs';
import childProcess from 'child_process';

fs.readFile('./package.json', (err, data) => {
	if (err) {
		throw err;
	}

	const dependencies = JSON.parse(data).dependencies;
	Object.keys(dependencies).forEach(dependency => {
		console.log('Upgrading ' + dependency);
		childProcess.execSync('yarn global upgrade ' + dependency);
	});
});
