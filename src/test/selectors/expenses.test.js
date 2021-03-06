import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {

    const filters = {
        text: 'a',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2]]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(345600000),
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2]]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(200000000)
    };

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);

});