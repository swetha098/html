function romanToNum(roman) {
    const romanValues = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let result = 0;
    let prev = 0;
  
    for (let i = roman.length - 1; i >= 0; i--) {
      const current = romanValues[roman[i]];
      if (current < prev) {
        result -= current;
      } else {
        result += current;
      }
      prev = current;
    }
  
    return result;
  }
  
  console.log(romanToNum("IV")); // 4
  console.log(romanToNum("XIX")); // 19
  console.log(romanToNum("CXXIII")); // 123
  