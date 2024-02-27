process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
	const input = process.stdin.read();

	if (input !== null) {
		name = input.toString().trim();
		process.stdout.write(`Your name is: ${name}\n`);
	}
});

process.stdin.on('end', () => {
	process.stdout.write('This important software is now closing\n');
});
