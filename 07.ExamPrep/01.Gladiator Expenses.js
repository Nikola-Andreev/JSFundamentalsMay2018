function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let totalSum = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            totalSum += helmetPrice
        }
        if (i % 3 === 0) {
            totalSum += swordPrice
        }
        if (i % 6 === 0) {
            totalSum += shieldPrice
        }
        if (i % 12 === 0) {
            totalSum += armourPrice
        }
    }
    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`)
}

solve(7, 2, 3, 4, 5)
console.log()
solve(23, 12.50, 21.50, 40, 200)