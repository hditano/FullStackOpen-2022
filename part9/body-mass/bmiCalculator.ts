interface calculateBmi {
    weight: number
    height: number
    bmi: string
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
        height,
        weight,
        bmi: status
    }

}

console.log(calculateBmi(200, 100));