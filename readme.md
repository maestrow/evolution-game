## Компиляция и запуск

- `.\gulp.cmd serve`. См. `.\gulp.cmd --tasks` и `guilpfile.js`
- `npm run sg`

## Утилиты

- `cd tools`
- `./babel.cmd cmpGen.js -o cmpGen.o.js` - компиляция

`.babelrc` сконфигурирован с `preset-stage-1`, т.о. в утилитах доступен оператор |>.

- `node css.js index` - [css classes extractor](https://github.com/maestrow/css-classes-extractor)
- `node cmpGen.o.js MyAwesomeComponent - layouts` - пример запуска генератора компонентов

### styleguidist

`npm run sg` - запуск. 
Styleguidist по умолчанию загружает компоненты по шаблону `src/components/**/*.{js,jsx,ts,tsx}`.
Настройки см. в `styleguide.config.js`.
Специально для SG были установлены пакеты: `npm i -D css-loader node-sass sass-loader style-loader`.
С помощью [updateExample](https://react-styleguidist.js.org/docs/configuration#updateexample) в код каждого примера автоматически добавляется `require ('./[component-name].scss');`, чтобы не писать эту инструкцию в каждом примере.

## ToDo

- Вместо .bind использовать arrow functions
- Перенести компиляцию tools в gulp, добавить tools/**.*/*.o.js в .gitignore.
- gulp publish в gh-pages.
- switch to [gulp 4.0](https://codeburst.io/switching-to-gulp-4-0-271ae63530c0)