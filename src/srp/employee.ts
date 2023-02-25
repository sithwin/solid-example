import * as mongodb from 'mongodb';

type EmployeeType = 'fullTime' | 'partTime' | 'contractor';

interface Employee {
  type: EmployeeType;
  hourlyRate: number;
  hoursWorked: number;
  salary: number;
}

class PayCalculator {
  static calculatePay(employee: Employee): number {
    switch (employee.type) {
      case 'fullTime':
        return employee.salary;
      case 'partTime':
      case 'contractor':
        return employee.hourlyRate * employee.hoursWorked;
      default:
        throw new Error('Invalid employee type.');
    }
  }

  static reportHours(employee: Employee): void {
    switch (employee.type) {
      case 'fullTime':
        console.log('Full-time employee does not report hours.');
        break;
      case 'partTime':
      case 'contractor':
        console.log(`Hours worked: ${employee.hoursWorked}`);
        break;
      default:
        throw new Error('Invalid employee type.');
    }
  }

  static async save(employee: Employee): Promise<void> {
    const client = await mongodb.MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
    const db = client.db('mydb');
    await db.collection('employees').insertOne(employee);
    await client.close();
  }
}

// Example usage
const fullTimeEmployee: Employee = {
  type: 'fullTime',
  hourlyRate: 0,
  hoursWorked: 0,
  salary: 60000,
};
const partTimeEmployee: Employee = {
  type: 'partTime',
  hourlyRate: 25,
  hoursWorked: 20,
  salary: 0,
};
const contractorEmployee: Employee = {
  type: 'contractor',
  hourlyRate: 50,
  hoursWorked: 10,
  salary: 0,
};

PayCalculator.save(fullTimeEmployee);
PayCalculator.save(partTimeEmployee);
PayCalculator.save(contractorEmployee);
