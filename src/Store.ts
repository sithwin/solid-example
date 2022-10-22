import { Stripe } from "./Stripe";

export class Store {
  stripe: Stripe

  constructor(user: any) {
    this.stripe = new Stripe(user)
  }

  purchase(quality: number) {
    this.stripe.pay(15 * quality)
  }
}