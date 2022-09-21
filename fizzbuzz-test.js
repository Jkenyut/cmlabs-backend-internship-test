// satria nur saputro
// Intership Backend
// looping 1 sampe 100
for (let i = 1; i < 101; i++) {
  // jika i kelipatan  3 dan 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    // jika i adalah kelipatan 3
  } else if (i % 3 === 0) {
    console.log("Fizz");
    // jika i adalah kelipatan 5
  } else if (i % 5 === 0) {
    console.log("Buzz");
    //jika i bukan pernyataan kelipatan
  } else {
    console.log(i);
  }
}
