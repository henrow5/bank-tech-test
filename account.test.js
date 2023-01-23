const Account = require('./account');

describe('Account', () => {
  it('can make a deposit', () => {
    const account = new Account();

    account.deposit(5000);

    expect(account.balance).toBe(5000);
    expect(account.transactions[0].type).toBe('credit');
    expect(account.transactions[0].amount).toBe(5000);
    expect(account.transactions[0].balance).toBe(5000);
  });

  it('can make a withdrawal', () => {
    const account = new Account();

    account.deposit(5000);
    account.withdraw(500);

    expect(account.balance).toBe(4500);
    expect(account.transactions[0].type).toBe('debit');
    expect(account.transactions[0].amount).toBe(500);
    expect(account.transactions[0].balance).toBe(4500);
  });

  it('throws an error with an invalid deposit amount', () => {
    const account = new Account();

    expect(() => account.deposit(0)).toThrow('Invalid deposit amount');
  });

  it('throws an error if the withdrawal amount exceeds the balance', () => {
    const account = new Account();

    account.deposit(5000);

    expect(() => account.withdraw(5001)).toThrow(
      'Withdrawal amount cannot exceed balance'
    );
  });
});
