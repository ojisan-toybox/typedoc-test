import { data } from "./data";
import { ShouldHandleError } from "./ShouldHandleError";
import { ERRORS } from "./Error";

export class Repository {
  getUserData(id: number) {
    const user = data.find((d) => d.id === id);
    if (!user) {
      throw new ShouldHandleError(ERRORS.USER_RESOURCE_NOTFOUND);
    }
    return user;
  }
}
