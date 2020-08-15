# debounce-ctx

A simple debounce utility that optionally takes a specific context

## Install

```
npm install debounce-ctx
```

## Usage

### debounce(f, wait, ctx)

```
<script src="debounce-ctx.min.js"></script>
<script>
window.addEventListener('resize', debounce(resize, 400));
</script>
```

(for TypeScript users, refer `Notes` bellow)

or

```
const debounce = require('debounce-ctx');
window.addEventListener('resize', debounce(resize, 400));
```

If you want to bind the function to a certain context,
you can either simply bind it:

```
var ctx = new MyClass();
window.addEventListener('resize', debounce(resize.bind(ctx), 400));
```

or, you can give the context as the third argument:

```
var ctx = new MyClass();
window.addEventListener('resize', debounce(resize, 400, ctx));
```

## Test

### Testing CommonJS
```shell
node ./test/cjs/test.js
```

### Testing UMD
Firstly, build the bundle for browser:
```shell
yarn build
```
Launch your browser, open `test/umd/index.html`, and click the button to see if it works.


## Notes

### (a) TypeScript: "import/export"

You may encounter several errors when you attempt
to use the module with our TypeScript based projects
depending on the version of TypeScript you use.

```
TS1259: Module '"/home/minagawah/local/workspace/git/my-simple-webpack-typescript/node_modules/debounce-ctx/index"' can only be default-imported using the 'allowSyntheticDefaultImports' flag
```

Referencing exteral modules using TypeScript could be often a time tricky.
For the above error, `import` syntax of ES6 does not reference `default` export.
To resolve the issue, if you are using v2.7 or over,
you may use `--esModuleInterop` flag as you compile your TypeScript projects,
or specify the flag in your `tsconfig.json`.

```
"compilerOptions": {
  "esModuleInterop": true
}
```

https://stackoverflow.com/questions/54701255/importing-victor-js-in-typescript#answer-54785103


### (b) TypeScript: "addEventListener"

```
TS2345: Argument of type 'Function' is not assignable to parameter of type 'EventListenerOrEventListenerObject'.
  Property 'handleEvent' is missing in type 'Function' but required in type 'EventListenerObject'.
```

From v2.6, TypeScript no longer accept event if it is not `CustomEvent` type.  
There are several workarounds for this, but the easiest would be
to tell TypeScript compiler by casting `any` to the element you deal with
to not to bother with the type.

```
(<any>window).addEventListener('resize', debounce(reset, 400), false);
```

https://stackoverflow.com/questions/46925133/how-to-add-passive-option-to-addeventlistener-in-typescript#answer-46925923

Or, if you want to be more strict about it, consider the options presented in:

https://stackoverflow.com/questions/47166369/argument-of-type-e-customevent-void-is-not-assignable-to-parameter-of-ty?rq=1#answer-47171216


## License

MIT License  
Copyright (c) 2019-2020 Hiroki Minagawa

See [LICENSE](./LICENSE) for details.
