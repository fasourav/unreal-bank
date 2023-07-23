document.getElementById('btn-deposit').addEventListener('click', () => {
    const x = document.getElementById('depositAmount')
    const getAmount = x.value
    let amount = parseInt(getAmount)
    const y = document.getElementById('deposit')
    const startingAmount = y.innerText
    let currentAmount = parseInt(startingAmount)
    const totalAmount = currentAmount + amount
    y.innerText = totalAmount

    const a = document.getElementById('balance')
    const b = a.innerText
    let c = parseInt(b)
    const currentBalance = currentAmount + amount
    a.innerText = currentBalance
})

document.getElementById('btn-withdraw').addEventListener('click', () => {
    const x = document.getElementById('withdrawAmount')
    const getAmount = x.value
    let amount = parseInt(getAmount)

    const y = document.getElementById('withdraw')
    const startingAmount = y.innerText
    let currentAmount = parseInt(startingAmount)
    const totalWithdraw = amount + currentAmount
    y.innerText = totalWithdraw

    const a = document.getElementById('balance')
    const b = a.innerText
    let c = parseInt(b)
    const currentBalance = c - getAmount
    a.innerText = currentBalance
    if (amount > c) {
        window.alert('Insufficient Balance')
        currentBalance = 0
    }
})
