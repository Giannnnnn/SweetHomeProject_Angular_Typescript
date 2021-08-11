export class Tokens {
  public jwt: string;
  public refreshToken: string;
  /**
   *
   */
  constructor(jwt: string, refreshToken: string) {
    this.jwt = jwt;
    this.refreshToken = refreshToken;
  }
}
