import { History } from 'history';
import UniversalRouter, { Params } from 'universal-router'
import generateUrls from 'universal-router/generateUrls'

export class Navigator {
  private history: History;
  private url: (routeName: string, params?: Params | undefined) => string;

  constructor(history: History, router: UniversalRouter) {
    this.history = history;
    this.url = generateUrls(router)
  }

  private nav = (routeName: string, params?: any) => {
    this.history.push(this.url(routeName, params));
  }

  public back = () => {
    this.history.goBack();
  }

  public toMain = () => {
    this.nav('main');
  }

  public toProp = (id: string) => {
    this.nav('prop', {id});
  }
}
