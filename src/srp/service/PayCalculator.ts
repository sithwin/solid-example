class PayCalculator<T extends Employee> {
  constructor(private employees: T[], private databaseService: DatabaseService<T>) {}

  async processEmployees(): Promise<void> {
    for (const employee of this.employees) {
      const pay = employee.calculatePay();
      console.log(`Pay: ${pay}`);
      const paySummary = employee.reportHours();
      await this.databaseService.save(employee);
    }
  }
}