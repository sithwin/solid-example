import * as mongodb from 'mongodb';

interface Employee {
  calculatePay(): number;
  reportHours(): void;
  save(): Promise<void>;
}

class FullTimeEmployee implements Employee {
  constructor(private salary: number) {}

  calculatePay(): number {
    return this.salary;
  }

  reportHours(): void {
    console.log('Full-time employee does not report hours.');
  }

  async save(): Promise<void> {
    const client = await mongodb.MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
    const db = client.db('mydb');
    await db.collection('employees').insertOne({ type: 'fullTime', salary: this.salary });
    await client.close();
  }
}

class PartTimeEmployee implements Employee {
  constructor(private hourlyRate: number, private hoursWorked: number) {}

  calculatePay(): number {
    return this.hourlyRate * this.hoursWorked;
  }

  reportHours(): void {
    console.log(`Hours worked: ${this.hoursWorked}`);
  }

  async save(): Promise<void> {
    const client = await mongodb.MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
    const db = client.db('mydb');
    await db.collection('employees').insertOne({ type: 'partTime', hourlyRate: this.hourlyRate, hoursWorked: this.hoursWorked });
    await client.close();
  }
}

class ContractorEmployee implements Employee {
  constructor(private hourlyRate: number, private hoursWorked: number) {}

  calculatePay(): number {
    return this.hourlyRate * this.hoursWorked;
  }

  reportHours(): void {
    console.log(`Hours worked: ${this.hoursWorked}`);
  }

  async save(): Promise<void> {
    const client = await mongodb.MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
    const db = client.db('mydb');
    await db.collection('employees').insertOne({ type: 'contractor', hourlyRate: this.hourlyRate, hoursWorked: this.hoursWorked });
    await client.close();
  }
}

// Example usage
const fullTimeEmployee: Employee = new FullTimeEmployee(60000);
const partTimeEmployee: Employee = new PartTimeEmployee(25, 20);
const contractorEmployee: Employee = new ContractorEmployee(50, 10);

const employees: Employee[] = [fullTimeEmployee, partTimeEmployee, contractorEmployee];

async function processEmployees(): Promise<void> {
  for (const employee of employees) {
    const pay = employee.calculatePay();
    console.log(`Pay: ${pay}`);
    employee.reportHours();
    await employee.save();
  }
}

processEmployees();
