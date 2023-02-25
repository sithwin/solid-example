class FullTimeEmployee implements Employee {
  constructor(public id: string, private salary: number) {}

  calculatePay(): number {
    return this.salary;
  }

  reportHours(): PaySummary {
    console.log('Full-time employee does not report hours.');
    return { totalHours: 0, totalPay: 0 };
  }
}