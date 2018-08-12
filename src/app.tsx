import * as React from 'react'
import * as ReactDOM from 'react-dom'
import UniversalRouter from 'universal-router'
import * as queryStr from 'query-string';
import { Location, Action } from 'history';
import createHistory from 'history/createHashHistory'
import CardsPage from 'layouts/cards-page/cards-page';
import CardPage from 'layouts/card-page/card-page';
import { Navigator } from './navigator';
const history = createHistory();

let nav: Navigator;
const routes = [
  {
    name: 'main',
    path: '/',
    action: () => <CardsPage onNavigateToCard={nav.toProp} />,
  },
  {
    name: 'prop',
    path: '/prop/:id',
    action: (ctx: any, {id}: any) => <CardPage cardId={id} onNavigateBack={nav.back} onNavigateToCard={nav.toProp} />,
  },
  {
    path: '(.*)',
    action: () => <div>Page not found</div>,
  },
];

const router = new UniversalRouter(routes);
nav = new Navigator(history, router);

async function renderByPath(location: Location, action: Action) {
  const query = queryStr.parse(location.search);
  const pathname = location.pathname;
  const content = await router.resolve({ pathname, query });
  ReactDOM.render(content, window.document.getElementById('app'));
}

window.document.title = 'Эволюция - справочник';
history.listen(renderByPath);
history.push(history.location.pathname);
