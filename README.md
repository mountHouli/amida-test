# amida-test

Amida Test

## Notes

- This server uses `async/await` without babel.  Therefore, you must use a Node version that supports `async/await`.  For example, during development, Node v9.8.0 was used.

## How-to

### Setup

Right after finishing, I had a phone call with Jacob, in which he said just passing along the github repo link, rather than zipping the contents, was just fine.  This requires a slight instructions change, as reflected below...

```
git clone git@github.com:mountHouli/amida-test.git

cd amida-test

npm install
```

### Part 1

This will run a function that parses the example data file (`input/cms_sample.txt`) and returns a JSON string in the format specified by `example/example.json`.  For convenience, it `console.log()`s this string as well.

```
npm run etl
```

### Part 2

To start the server in dev mode (using nodemon rather than node)

```
npm start

// Then browse to http://localhost:4000/api/sample
```

To run the test suite against the server
```
npm run test
```

### Part 3 (almost complate)

```
npm start
```

- Navigate to http://localhost:4000
- Click "Choose File"
- Browse to this repo, to the `input/` dir, and select `cms_sample.txt`
- Click "Upload File"
- This will create a file called `output/post.not_converted_to_json`
- Please see comment in `src/router.js`
