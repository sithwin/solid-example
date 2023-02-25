export class Stripe {
	user: any

  constructor(user: any) {
		this.user = user
	}

	pay(amount: number) {
		console.log(`${this.user} make payment of $${amount} with stripe`)
	}
}