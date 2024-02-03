const http = require("http");
const PORT = 6000;

const behavior = require("./behavior"); // import from behavior

const server = http.createServer(behavior);


server.listen(6000, () => {
    console.log(`Server is running on port ${PORT}`)
});


// const money = 10_000_000 + 500
// console.log(money - 10)

// const today = new Date();
// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDate());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.toLocaleDateString());
// console.log(Date.now()); // Milliseconds since 1970 January 1st

// const tomorrow = new Date('2024-01-21');
// console.log(tomorrow.getTime());
// console.log(tomorrow.getTime() - today.getTime());
// const secondsLeft = (tomorrow.getTime() - today.getTime() / 1000);
// console.log(secondsLeft);
// console.log('hours left', secondsLeft / 60 /60);


// console.log(today);


