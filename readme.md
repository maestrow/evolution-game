## Компиляция и запуск

`.\gulp.cmd --tasks` и см. `guilpfile.js`

## Утилиты

In tools:

- `node css.js index` - [css classes extractor](https://github.com/maestrow/css-classes-extractor)
- `node cmpGen MyAwesomeComponent` - пример запуска генератора компонентов

### styleguidist

`npm run sg` - запуск. 
Styleguidist по умолчанию загружает компоненты по шаблону `src/components/**/*.{js,jsx,ts,tsx}`.
Настройки см. в `styleguide.config.js`.
Специально для SG были установлены пакеты: `npm i -D css-loader node-sass sass-loader style-loader`.
С помощью [updateExample](https://react-styleguidist.js.org/docs/configuration#updateexample) в код каждого примера автоматически добавляется `require ('./[component-name].scss');`, чтобы не писать эту инструкцию в каждом примере.

## ToDo

- Вместо .bind использовать arrow functions