interface exerciseCalculator {
    periodLength: number
    trainingDays: number
     target: number
     average: number
     reached: boolean
     rating: number
     ratingDescription: string
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

    data.forEach((ele) => {
        if(ele >= 1) trainingDays++;
    })

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

console.log(exerciseCalculator([10,3]));


