export interface User {
  username: string,
  email: string,
  cars: [
    {
      model: String,
      year: Number
    }]
}
