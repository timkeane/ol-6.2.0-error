# ol-6.2.0-error

## Test passed with ol@6.1.1 as specified in package.json

* Run `npm install`
* Run `nmp test`

```
$ npm test

> ol-6.2.0-error@0.0.1 test C:\Users\tkeane\git\ol-6.2.0-error
> jest

PASS __tests__/Wtf.test.js (6.469s)
  √ wtf (4ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        7.568s
Ran all test suites.
```

## Test fails when changing to ol@6.2.0

* Run `npm uninstall ol`
* Run `npm install ol@6.2.0`
* Run `nmp test`

```
$ npm test

> ol-6.2.0-error@0.0.1 test C:\Users\tkeane\git\ol-6.2.0-error
> jest

FAIL __tests__/Wtf.test.js
  ● Test suite failed to run

    TypeError: Object prototype may only be an Object or null: undefined
        at setPrototypeOf (<anonymous>)

    > 1 | import Layer from 'ol/layer/Vector'
        | ^
      2 | import Style from 'ol/style/Style'
      3 |
      4 | class Wtf {

      at extendStatics (node_modules/ol/render/canvas/TextBuilder.js:38:12)
      at node_modules/ol/render/canvas/TextBuilder.js:42:5
      at node_modules/ol/src/render/canvas/TextBuilder.js:32:33
      at Object.<anonymous> (node_modules/ol/src/render/canvas/TextBuilder.js:32:1)
      at Object.<anonymous> (node_modules/ol/src/render/canvas/Executor.js:12:1)
      at Object.<anonymous> (node_modules/ol/src/render/canvas.js:7:1)
      at Object.<anonymous> (node_modules/ol/src/render/canvas/Builder.js:11:1)
      at Object.<anonymous> (node_modules/ol/src/render/canvas/BuilderGroup.js:6:1)
      at Object.<anonymous> (node_modules/ol/src/renderer/canvas/VectorLayer.js:8:1)
      at Object.<anonymous> (node_modules/ol/src/layer/Vector.js:5:1)
      at Object.<anonymous> (src/Wtf.js:1:1)
      at Object.<anonymous> (__tests__/Wtf.test.js:1:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        4.815s, estimated 7s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```