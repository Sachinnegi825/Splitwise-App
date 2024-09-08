export const calculateBalances = (transactions) => {
  const balances = { Sachin: 0, Ankit: 0, Mehak: 0, Ajit: 0 };

  transactions.forEach((txn) => {
    const amountPerPerson = txn.amount / txn.splitAmong.length;

    balances[txn.paidBy] += txn.amount;
    txn.splitAmong.forEach((person) => {
      if (person !== txn.paidBy) {
        balances[person] -= amountPerPerson;
        balances[txn.paidBy] -= amountPerPerson;
      }
    });
  });

  return balances;
};
