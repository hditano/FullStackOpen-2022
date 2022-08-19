const mongoose = require('mongoose');

if (process.argv.length < 3) {
    console.log('add last argv as expected (entry to create');
    process.exit(1);
}

const password = process.argv[2];
const URL = `mongodb+srv://fullstackopen:${password}@cluster0.txqggwq.mongodb.net/PhonebookApp?retryWrites=true&w=majority`;


const PhonebookSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const person = mongoose.model('phonebook', PhonebookSchema);



mongoose
    .connect(URL)
    .then((result) => {

        console.log('connected');

            if(process.argv.length > 3) {
                const myPhonebook = new person({
                    name: process.argv[3],
                    number: process.argv[4]
                })
                console.log(`Added ${process.argv[3]} number ${process.argv[4]} to phonebook`);
                return myPhonebook.save()
            }

            if(process.argv.length < 4) {
                person.find({}).then((result) => {
                    console.log('phonebook: ')
                    result.map(ele => {
                        console.log(`${ele.name} ${ele.number}`)
                    })
                })
            }
        })
        .then((result) => {
            mongoose.connection.close();
        })