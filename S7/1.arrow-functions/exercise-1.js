const potato = (a = 10, b = 5) => {
    console.log(a + b)
}

potato(); // 15
potato(20); // 25
potato(50, 10); // 60


const potato = (a, b = 5) => {
    console.log(a + b)
}