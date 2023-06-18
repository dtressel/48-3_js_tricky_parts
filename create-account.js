function createAccount(pin, balance = 0) {
  class AccountActions {
    static checkBalance(pinInput) {
      if (pinInput === pin) return `$${balance}`;
      return "Invalid PIN.";
    }
    static deposit(pinInput, depositAmount) {
      if (pinInput === pin) {
        balance += depositAmount;
        return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`;
      }
      return "Invalid PIN.";
    }
    static withdraw(pinInput, withdrawalAmount) {
      if (pinInput === pin) {
        if (withdrawalAmount > balance) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
        balance -= withdrawalAmount;
        return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${balance}.`;
      }
      return "Invalid PIN.";
    }
    static changePin(oldPin, newPin) {
      if (oldPin === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      }
      return "Invalid PIN.";
    }
  }
  return AccountActions;
}

module.exports = { createAccount };
