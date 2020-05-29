/**
 * @file usecase file
 */

import * as url from "url";
import { Service } from "./Service";
import { ShouldHandleError } from "./ShouldHandleError";
import { ERRORS } from "./Error";
import { UserType, UID } from "./types";

/**
 * ユーザー情報を取得するUsecaseクラス
 */
export class Usecase {
  constructor(private service: Service) {}

  /**
   * リクエストを元にuser情報を取得する。
   * @param request HTTP Request
   * @returns ユーザー情報
   * @throws フォーマットエラー(idがstringではないとき)
   * @throws フォーマットエラー(idがnumberに変換できないとき. ※validateRequestが投げる例外)
   */
  getUserData(request: any): UserType {
    const urlParse = url.parse(request.url, true);
    const { id } = urlParse.query;
    if (typeof id !== "string") {
      throw new ShouldHandleError(ERRORS.INVALID_USER_ID_FORMAT);
    }
    const parsedId = this.validateRequest(id);
    const user = this.service.getUserData(parsedId);
    return user;
  }

  /**
   * 渡されたidがuserIdかを検証し、userIdに変換して返す。
   * @param id userId候補
   * @returns userId
   * @example
   * validateRequest("1");
   * // 1
   *
   * validateRequest("a")
   * // Raise Error
   */
  private validateRequest(id: any): UID {
    const parsedId = parseInt(id) as UID;
    if (isNaN(parsedId)) {
      throw new ShouldHandleError(ERRORS.INVALID_USER_ID_FORMAT);
    }
    return parsedId;
  }
}
