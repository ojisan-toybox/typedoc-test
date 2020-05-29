/**
 * @file Repository Class
 */

import { data } from "./data";
import { ShouldHandleError } from "./ShouldHandleError";
import { ERRORS } from "./Error";

/**
 * User情報ストレージとの疎通を抽象化するクラス
 */
export class Repository {
  /**
   * idを元にuser情報を取得する関数
   * @param id userId
   * @throws RESOURCE_NOT_FOUND
   */
  getUserData(id: number) {
    const user = data.find((d) => d.id === id);
    if (!user) {
      throw new ShouldHandleError(ERRORS.USER_RESOURCE_NOTFOUND);
    }
    return user;
  }
}
