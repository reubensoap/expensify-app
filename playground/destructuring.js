console.log("destructive");

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Phily',
        temp: 92
    }
};

const { name, age } = person;

console.log(`${name} is ${age}.`);

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);


const address = ['1299 S Juniper Street', 'Phily', 'PE', '19147'];

const [street, city, state, zip] = address;

console.log(`you are in ${street} ${state}.`);