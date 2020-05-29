import { ErrorMessageType, ErrorsKeyType } from "./types";

/**
 * このアプリケーションで取りうる例外の種類とそれに対応したエラーコード
 */
export const ERRORS: { [key in ErrorsKeyType]: ErrorMessageType } = {
  USER_RESOURCE_NOTFOUND: {
    statusCode: 404,
    message: "Userテーブルからデータ見つからない",
  },
  INVALID_USER_ID_FORMAT: {
    statusCode: 400,
    message: "フォーマットと異なるid",
  },
  UNEXPECTED_ERROR: {
    statusCode: 500,
    message: "予期せぬエラー",
  },
};
