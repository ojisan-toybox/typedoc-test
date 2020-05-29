import { ErrorMessageType } from "./types";

/**
 * このアプリケーションにおける例外表現。
 * 好き放題例外を投げれないように制約を加えることが目的。
 * (constructorに渡せるものを縛ってある)
 */
export class ShouldHandleError extends Error {
  constructor(private errorInfo: ErrorMessageType, e?: string) {
    super(e);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  toJSON() {
    return this.errorInfo;
  }
}
