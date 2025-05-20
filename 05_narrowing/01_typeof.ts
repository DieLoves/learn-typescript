function fn(arg: number | string | null) {
	if (typeof arg === 'number') {
		return arg.toString();
	} else if (typeof arg === 'string') {
		return arg.toUpperCase();
	}

	return arg;
}
