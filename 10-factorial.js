const args = process.argv.slice(2);

const num = parseInt(args[0], 10);  

function factorial(n)
{
	if (n < 0)
		return (-1);
	else if (n == 0)
		return (1);
	else
		return (n * factorial(n - 1));
}

factorial(num);
