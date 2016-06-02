'use strict';

function fibonacci_series(n) {
	var c = new Array();
	var i = 0;
	for(i = 0; i <= n;i++)
	{
		c.push(fbi(i));
	}
	return c;
}
function fbi(value)
{
	if (value < 2)
	{
		return value;
	}
	else
	{
		return fbi(value - 1) + fbi(value - 2);
	}
}

module.exports = fibonacci_series;
