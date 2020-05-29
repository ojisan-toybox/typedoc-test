/**
 * @file このアプリケーションで扱う型を集約するファイル
 */

/**
 * エラーオブジェクトを投げるときのデータ構造
 */
export type ErrorMessageType = {
  statusCode: number;
  message: string;
};

/**
 * このアプリケーションで取りうる例外の種類
 */
export type ErrorsKeyType =
  | "USER_RESOURCE_NOTFOUND"
  | "INVALID_USER_ID_FORMAT"
  | "UNEXPECTED_ERROR";

export type UserType = {
  /** userId */
  id: number;
  /** userName */
  name: string;
};

/**
 * opaqueを実現。
 * @see https://flow.org/en/docs/types/opaque-types/
 */
export type UID = number & { __UID: undefined };
