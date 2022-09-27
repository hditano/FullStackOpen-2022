interface exerciseCalculator {
     periodLength: number
     trainingDays: number
     target: number
     average: number
     reached: boolean
     rating: number
     ratingDescription: string
}

interface input {
    data: number[]
}

const parsedArguments = (args: Array<string>):input => {
    if(args.length < 4 ) throw new Error('not enough arguments');
    if(args.length > 4) throw new Error('too many arguments');

    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            data: args.map((ar) => Number((ar).slice(3)))
        }
    } else {
        throw new Error('Provided values were not numbers')
    }
}

const exerciseCalculator = (data: number[]): exerciseCalculator => {
    let periodLength = data.length;
    let trainingDays = 0;
    let totalHours = data.reduce((prev, curr) => prev + curr, 0);
    let ratingDescription = '';
    let target = 2;
    let average = data.reduce((prev, curr) => prev + curr, 0) / data.length;
    let rating = 0;
    let reached = false;

    //calculates training days
    data.forEach((ele) => {
        if(ele >= 1) trainingDays++;
    })

    // Checks how many hours the user has worked out
    if(totalHours < 14) {
        rating = 1
        ratingDescription = 'You gotta improved asap'
    } else if (totalHours > 14 && totalHours < 30) {
        rating = 2
        ratingDescription = 'You almost there keep going!'
    } else {
        rating = 3
        ratingDescription = 'You are amazing!!'
    }

    // Checks if rating has been reached as per metrics
    if(rating >= target) {
        reached = true;
    } else {
        reached = false;
    }


    return {
        periodLength,
        trainingDays,
        target,
        average,
        rating,
        ratingDescription,
        reached
    }
}

const {data} = parsedArguments(process.argv);
console.log(exerciseCalculator(data));


