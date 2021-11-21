class Calc {
   constructor(number) {
      this.number = number;
   }
   Plus(num) {
      this.number += num;
      return this;
   }
   Minus(num) {
      this.number -= num;
      return this;
   }
   Multiply(num) {
      this.number *= num;
      return this;
   }
   Devide(num) {
      this.number /= num;
      return this;
   }
}
result = new Calc(50).Plus(6).Minus(30).Multiply(3).Devide(2);

console.log(Object.values(result)[0]);