interface Employee extends Entity {
  calculatePay(): number;
  reportHours(): PaySummary;
}