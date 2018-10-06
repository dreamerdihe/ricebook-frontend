export class Follower {
  public portrait: string;
  public accountName: string;
  public headline: string;
  public displayName?: string;

  constructor(portrait: string, accountName: string, headline: string,
              displayName?: string) {
              this.portrait = portrait;
              this.accountName = accountName;
              this.headline = headline;
              this.displayName = displayName;
              }
}
