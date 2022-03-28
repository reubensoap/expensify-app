import { setEndDate, setStartDate, sortByAmount, sortByDate, setTextFilter } from "../../actions/filters";
import moment from 'moment';

test('should setup action object for setTextFilter', () => {
    const action = setTextFilter('water');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'water'
    });
});

test('should setup action object for setTextFilter with no value provided', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should setup action object for setEndDate',  () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});

test('should setup action object for setStartDate', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('should setup action object for sortByDate', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});

test('should setup action object for sortByAmount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});