class PartTimeEmployee implements Employee {
  constructor(public id: string, private hourlyRate: number, private hoursWorked: number) {}

  calculatePay(): number {
    return this.hourlyRate * this.hoursWorked;
  }

  reportHours(): PaySummary {
    const totalHours = this.hoursWorked;
    const totalPay = this.calculatePay();
    console.log(`Hours worked: ${totalHours}`);
    console.log(`Pay: ${totalPay}`);
    return { totalHours, totalPay };
  }
}