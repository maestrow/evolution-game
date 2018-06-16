const fs = require ('fs')
const path = require ('path')


// === Common Helpers

const resolve = p => path.resolve(__dirname, p)
const last = arr => arr[arr.length-1]
const stripBom = i => i.charCodeAt(0) === 0xFEFF ? i.slice(1) : i
const isEmpty = obj => Object.keys(obj).length === 0


// === Main code flow

const files = process.argv.slice(2).map(i => resolve(i))

const text = files
  .map(i => fs.readFileSync(i, 'utf8'))
  .join('') |> stripBom

const data = text
  .split('\r\n')
  .reduce((acc, line) => {
    line.match(/^\s*$/)
      ? acc.push([])
      : last(acc).push(line)
    return acc
  }, [[]])
  .map(i => i.length == 0 ? {} : ({
    set        : i[0],
    key        : i[1],
    caption    : i[2],
    description: i[3]
  }))
  .filter(i => !isEmpty(i))

data
|> JSON.stringify
|> console.log
