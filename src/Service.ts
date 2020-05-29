import { Repository } from "./Repository";

export class Service {
  constructor(private repositoy: Repository) {}

  getUserData(id: number) {
    const user = this.repositoy.getUserData(id);
    return user;
  }
}
