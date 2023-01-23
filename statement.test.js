const Statement = require('./statement');

describe('Statement', () => {
  it('returns only the statement header with no transactions', () => {
    const mockAccount = {
      transactions: [],
    };

    const statement = new Statement(mockAccount);
    expect(statement.print()).toBe('date || credit || debit || balance');
  });

  it('returns a statement string with 1 transaction type', () => {
    const mockAccount = {
      transactions: [
        {
          date: '23/01/2023',
          type: 'credit',
          amount: 5000,
          balance: 5000,
        },
      ],
    };

    const statement = new Statement(mockAccount);

    expect(statement.print()).toBe(
      'date || credit || debit || balance\n23/01/2023 || 5000.00 || || 5000.00'
    );
  });

  it('returns a statement string with both transaction types', () => {
    const mockAccount = {
      transactions: [
        {
          date: '23/01/2023',
          type: 'debit',
          amount: 500,
          balance: 4500,
        },
        {
          date: '23/01/2023',
          type: 'credit',
          amount: 5000,
          balance: 5000,
        },
      ],
    };

    const statement = new Statement(mockAccount);

    expect(statement.print()).toBe(
      'date || credit || debit || balance\n23/01/2023 || || 500.00 || 4500.00\n23/01/2023 || 5000.00 || || 5000.00'
    );
  });

  it('returns a statement string with three transactions, most recent date first', () => {
    const mockAccount = {
      transactions: [
        {
          date: '23/01/2023',
          type: 'credit',
          amount: 100,
          balance: 4600,
        },
        {
          date: '22/01/2023',
          type: 'debit',
          amount: 500,
          balance: 4500,
        },
        {
          date: '21/01/2023',
          type: 'credit',
          amount: 5000,
          balance: 5000,
        },
      ],
    };

    const statement = new Statement(mockAccount);

    expect(statement.print()).toBe(
      'date || credit || debit || balance\n23/01/2023 || 100.00 || || 4600.00\n22/01/2023 || || 500.00 || 4500.00\n21/01/2023 || 5000.00 || || 5000.00'
    );
  });
});
