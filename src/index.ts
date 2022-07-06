class BankAccount {
  protected balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  withdraw(amount: number) {
    if (amount <= this.balance) this.balance -= amount;
  }
  deposit(amount: number) {
    if (amount > 0) this.balance += amount;
  }
}
class SavingAccount extends BankAccount {
  static readonly interestRate = 3.5;
  private readonly debitCard: number;

  constructor(balance: number, debitCard: number) {
    super(balance);
    this.debitCard = debitCard;
  }

  public getInterest() {
    return this.balance * SavingAccount.interestRate;
  }
}

class FixdAccount extends BankAccount {
  static readonly interestRate = 5;

  constructor(balance: number) {
    super(balance);
  }

  getInterest() {
    if (this.balance < 10000) return this.balance;
    return this.balance * FixdAccount.interestRate;
  }
}

const myAcc1 = new SavingAccount(100, 12345);

myAcc1.deposit(100);

console.log(myAcc1.getInterest());
