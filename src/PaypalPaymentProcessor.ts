import { PaymentProcessor } from "./PaymentProcessor"
import { Paypal } from "./Paypal"
import { Stripe } from "./Stripe"

export class PaypalPaymentProcessor implements PaymentProcessor {
  user: any
  paypal: Paypal

  constructor(user: any) {
    this.user = user
    this.paypal = new Paypal()
  }

  pay(amountInDollar: number) {
    this.paypal.pay(this.user, 15 * amountInDollar * 100)
  }
}