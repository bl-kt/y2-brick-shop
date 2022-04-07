# GET

```js
app.get('apiPathgoeshere', async (req, res, next) => {
  try {
    const result = await database.query('query goes here');

    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

let res = await fetch('api/getallbricks');
let data = await res.json();

```
