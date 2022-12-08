import generator from 'generate-password';

export function generatorId(lengthId:number):string{
	const password:string = generator.generate({
		length: lengthId,
		numbers: true
	});

	return password;
}