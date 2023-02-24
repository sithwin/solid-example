import { PaymentProcessor } from "./PaymentProcessor";

export class Store {
  paymentProcessor: PaymentProcessor
  constructor(paymentProcessor: PaymentProcessor) {
    this.paymentProcessor = paymentProcessor
  }

  purchase(quality: number) {
    this.paymentProcessor.pay(15 * quality)
  }
}