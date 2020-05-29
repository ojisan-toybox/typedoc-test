import * as url from "url";
import { Service } from "./Service";
import { ShouldHandleError } from "./ShouldHandleError";
import { ERRORS } from "./Error";

export class Usecase {
  constructor(private service: Service) {}

  getUserData(request: any) {
    const urlParse = url.parse(request.url, true);
    const { id } = urlParse.query;
    if (typeof id !== "string") {
      throw new ShouldHandleError(ERRORS.INVALID_USER_ID_FORMAT);
    }
    const parsedId = this.validateRequest(id);
    const user = this.service.getUserData(parsedId);
    return user;
  }

  private validateRequest(id: any): number {
    const parsedId = parseInt(id);
    console.info("parsedId", parsedId);
    if (isNaN(parsedId)) {
      throw new ShouldHandleError(ERRORS.INVALID_USER_ID_FORMAT);
    }
    return parsedId;
  }
}
