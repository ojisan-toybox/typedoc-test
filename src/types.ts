export type ErrorMessageType = {
  statusCode: number;
  message: string;
};

export type ErrorsKeyType =
  | "USER_RESOURCE_NOTFOUND"
  | "INVALID_USER_ID_FORMAT"
  | "UNEXPECTED_ERROR";
