const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value;
    } else {
        user.balance = user.balance - transaction.value;
    }
    user.transactions.push(transaction);
    console.log(user)
}

function getHigherTransactionByType(transactionType) {
    let higherTransaction = 0;
    for (let transaction of user.transactions) {
        if (transaction.type === transactionType) {
            if (transaction.value > higherTransaction) {
                higherTransaction = transaction.value;
            }
        }
    }
    console.log(`The highest ${transactionType} transaction is ${higherTransaction}`)
}

function getAverageTransactionValue(user) {
    let sum = 0;
    for (let transactionValue of user.transactions) {
        sum = sum + transactionValue.value;
    }
    const average = sum / user.transactions.length
    console.log(`The average transaction value is ${average}.`)
}

function getTransactionsCount(transactionCount) {
    let creditCount = 0
    let debitCount = 0
    for (let transaction of transactionCount.transactions) {
        if (transaction.type === 'credit') {
            creditCount++
        } else {
            debitCount++
        }
    }
    console.log(`credit = ${creditCount}, debit = ${debitCount}`)

}



createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

getHigherTransactionByType('credit')
getAverageTransactionValue(user)
getTransactionsCount(user)