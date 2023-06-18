function createAccount(pin, balance = 0) {
  return {
    checkBalance: (pinInput) => {
      if (pinInput === pin) return `$${balance}`;
      return "Invalid PIN.";
    },
    deposit: (pinInput, depositAmount) => {
      if (pinInput === pin) {
        balance += depositAmount;
        return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`;
      }
      return "Invalid PIN.";
    },
    withdraw: (pinInput, withdrawalAmount) => {
      if (pinInput === pin) {
        if (withdrawalAmount > balance) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
        balance -= withdrawalAmount;
        return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${balance}.`;
      }
      return "Invalid PIN.";
    },
    changePin: (oldPin, newPin) => {
      if (oldPin === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      }
      return "Invalid PIN.";
    }
  }
}

module.exports = { createAccount };
