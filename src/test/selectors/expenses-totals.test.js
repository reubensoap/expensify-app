import getExpenseTotals from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should test the functionality of expenses total function', () => {
    const sumTotal = getExpenseTotals(expenses);
    expect(sumTotal).toBe(7595);
});

test('should return 0 if there are no expenses', () => {
    const sumTotal = getExpenseTotals([]);
    expect(sumTotal).toBe(0);
});

test('should return a value even if only 1 expense', () => {
    const sumTotal = getExpenseTotals([expenses[0]]);
    expect(sumTotal).toBe(expenses[0].amount);
});
