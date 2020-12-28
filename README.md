# nestjs-lib-name-issue

if a lib's name is another's name's prefix, e2e test will fail. [issue link](https://github.com/nestjs/nest/issues/6020)

1. `nest new`
2. `nest g lib demo`
3. `nest g lib demo2`
4. import both libs in `AppModule`
5. `npm run test:e2e`

# example output
```
➜  nestjs-lib-name-issue git:(master) npm run test:e2e

> nestjs-lib-name-issue@0.0.1 test:e2e /Users/diluka/Source/Repos/nestjs-lib-name-issue
> jest --config ./test/jest-e2e.json

 FAIL  test/app.e2e-spec.ts
  AppController (e2e)
    ✕ / (GET) (11 ms)

  ● AppController (e2e) › / (GET)

    Nest cannot create the AppModule instance.
    The module at index [1] of the AppModule "imports" array is undefined.

    Potential causes:
    - A circular dependency between modules. Use forwardRef() to avoid it. Read more: https://docs.nestjs.com/fundamentals/circular-dependency
    - The module at index [1] is of type "undefined". Check your import statements and the type of the module.

    Scope [RootTestModule]

       8 | 
       9 |   beforeEach(async () => {
    > 10 |     const moduleFixture: TestingModule = await Test.createTestingModule({
         |                                          ^
      11 |       imports: [AppModule],
      12 |     }).compile();
      13 | 

      at DependenciesScanner.scanForModules (../node_modules/@nestjs/core/scanner.js:49:23)
      at DependenciesScanner.scanForModules (../node_modules/@nestjs/core/scanner.js:57:13)
      at DependenciesScanner.scan (../node_modules/@nestjs/core/scanner.js:25:9)
      at TestingModuleBuilder.compile (../node_modules/@nestjs/testing/testing-module.builder.js:37:9)
      at Object.<anonymous> (app.e2e-spec.ts:10:42)

  ● AppController (e2e) › / (GET)

    TypeError: Cannot read property 'getHttpServer' of undefined

      17 | 
      18 |   it('/ (GET)', () => {
    > 19 |     return request(app.getHttpServer())
         |                        ^
      20 |       .get('/')
      21 |       .expect(200)
      22 |       .expect('Hello World!');

      at Object.<anonymous> (app.e2e-spec.ts:19:24)

  console.log
    [class DemoModule] undefined

      at Object.<anonymous> (../src/app.module.ts:7:9)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.959 s, estimated 4 s
Ran all test suites.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! nestjs-lib-name-issue@0.0.1 test:e2e: `jest --config ./test/jest-e2e.json`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the nestjs-lib-name-issue@0.0.1 test:e2e script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/diluka/.npm/_logs/2020-12-28T13_37_11_997Z-debug.log
```