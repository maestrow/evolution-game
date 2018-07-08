import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import Main from './components/main/main.jsx'
import UniversalRouter from 'universal-router'
import * as queryStr from 'query-string';
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

interface ILocation {
  pathname: string;
  search: string;
  hash: string;
  state: any;
  key?: string;
}

const pageOne = () =>
  <div>
    <div>Page One</div>
    <a onClick={() => history.push('/two', {})}>two</a>
  </div>

const pageTwo = () =>
  <div>
    <div>Page Two</div>
    <a onClick={() => history.push('/three', {})}>three</a>
  </div>

const pageThree = () =>
  <div>
    <div>Page Three</div>
    <a onClick={() => history.push('/one', {})}>one</a>
  </div>

const routes = [
  { path: '/one', action: pageOne },
  { path: '/two', action: pageTwo },
  { path: '/three', action: pageThree },
  { path: '(.*)', action: () => <div>Page not found</div> },
]

const router = new UniversalRouter(routes);

async function renderByPath(location: ILocation, action: string) {
  console.log(location);
  console.log(action);
  const query = queryStr.parse(location.search);
  const pathname = location.pathname;
  const content = await router.resolve({ pathname, query });
  console.log(content);
  ReactDOM.render(content, window.document.getElementById('app'));
}

window.document.title = 'Эволюция - справочник';
history.listen(renderByPath);

if (history.location.hash !== '') {
  history.push(history.location.hash.replace(/^#/, ''), {});
} else {
  history.push('/one', {});
}
