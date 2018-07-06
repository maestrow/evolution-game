Cards:

```js
const items = [
  'mimicry',
  'tail_loss',
  'swimming',
  'shell',
  'metamorphose',
  'r-strategy'
].map(i => ({ id: i, caption: i, description: `${i} ${i} ${i} ${i}` }));

<Cards items={items} />
```