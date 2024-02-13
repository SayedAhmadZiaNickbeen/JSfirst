
function calculatePotatoSupply(name, currentAge, maxAge, amountPerWeek) {
    const yearsRemaining = maxAge - currentAge;
    const weeksRemaining = yearsRemaining * 52;
    const totalPotatoes = weeksRemaining * amountPerWeek;
    return `${name} has ${currentAge} years and will eat ${totalPotatoes} potatoes until the age of ${maxAge}.`;
}

function calculateTotalWeeksRemaining(name, currentAge, maxAge, amountPerWeek) {
    const yearsRemaining = maxAge - currentAge;
    const weeksRemaining = yearsRemaining * 52;
    const totalPotatoes = weeksRemaining * amountPerWeek;
    return `${name} has ${weeksRemaining} weeks remaining from maximam age.`;
}



const user1 = {
    name: "Ahmad",
    currentAge: 30,
    maxAge: 80,
    amountPerWeek: 5
};

const user2 = {
    name: "Mahmood",
    currentAge: 25,
    maxAge: 90,
    amountPerWeek: 3
};

const user3 = {
    name: "Salim",
    currentAge: 40,
    maxAge: 75,
    amountPerWeek: 7
};

// Test the function for each user
console.log(calculatePotatoSupply(user1.name, user1.currentAge, user1.maxAge, user1.amountPerWeek));
console.log(calculatePotatoSupply(user2.name, user2.currentAge, user2.maxAge, user2.amountPerWeek));
console.log(calculatePotatoSupply(user3.name, user3.currentAge, user3.maxAge, user3.amountPerWeek));
 
console.log(calculateTotalWeeksRemaining(user1.name, user1.currentAge, user1.maxAge));
console.log(calculateTotalWeeksRemaining(user2.name, user2.currentAge, user2.maxAge));
console.log(calculateTotalWeeksRemaining(user3.name, user3.currentAge, user3.maxAge));