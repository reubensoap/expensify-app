import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: '195',
    createdAt: moment(0).valueOf()
}, {
    id: '2',
    description: 'Party purchase',
    note: 'walmart run for party supplies',
    amount: '5400',
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Gas',
    note: '',
    amount: '2000',
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default expenses;