import { Stripe } from "./Stripe"

export class StripePaymentProcessor {
  user: any
  stripe: Stripe

  constructor(user: any) {
    this.user = user
    this.stripe = new Stripe(user)
  }

  pay(amountInDollar: number) {
    this.stripe.pay(15 * amountInDollar)
  }
}