interface calculateBmi {
    weight: number
    height: number
    bmi: string
}

const parseArguments = (args: Array<string>):calculateBmi => {
    if(args.length < 4 ) throw new Error('not enough arguments');
    if(args.length > 4) throw new Error('too many arguments');

    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            weight: Number(args[2]),
            height: Number(args[3]),
            bmi: String(args[4])
        }
    } else {
        throw new Error('Provided values were not numbers')
    }
}

const calculateBmi = (height: number, weight: number): calculateBmi => {

    const result = (weight / height / height) * 1000;
    let status = '';

    if(result < 18.5) {
        status = 'underweight';
    }
    if(result < 24.9) {
        status = 'normal';
    }
    if(result < 29.9) {
        status = 'overweight'
    } else {
        status = 'obece'
    }
    return {
        weight,
        height,
        bmi: status
    }
}

const {weight, height} = parseArguments(process.argv);
console.log(calculateBmi(weight, height));
