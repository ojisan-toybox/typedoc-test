import { Repository } from "./Repository";
import { UID } from "./types";

export class Service {
  constructor(private repositoy: Repository) {}

  /**
   * UIDを元にuser情報を取得する処理
   * @param id userId
   */
  getUserData(id: UID) {
    const user = this.repositoy.getUserData(id);
    return user;
  }
}
