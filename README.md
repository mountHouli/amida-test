# amida-test

Amida Test

## Notes

- This server uses `async/await` without babel.  Therefore, you must use a Node version that supports `async/await`.  For example, during development, Node v9.8.0 was used.

## How-to

### Setup

```
unzip the contents

cd amida-test

npm install
```

### Part 1

git checkout at the "part 1 complete" commit.

This will run a function that parses the example data file (`input/cms_sample.txt`) and returns a JSON string in the format specified by `example/example.json`.  For convenience, it `console.log()`s this string as well.

```
npm run etl
```

### Part 2

git checkout at the "Part 2 complete" commit.

To start the server in dev mode (using nodemon rather than node)

```
npm start
```

To run the test suite against the server
```
npm run test
```
