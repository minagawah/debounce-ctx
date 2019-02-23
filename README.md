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
document.body.addEventListener('resize', debounce(resize, 400));
</script>
```

or

```
const debounce = require('debounce-ctx');
document.body.addEventListener('resize', debounce(resize, 400));
```

If you want to bind the function to a certain context,
you can either simply bind it:

```
var ctx = new MyClass();
document.body.addEventListener('resize', debounce(resize.bind(ctx), 400));
```

or, you can give the context as the third argument:

```
var ctx = new MyClass();
document.body.addEventListener('resize', debounce(resize, 400, ctx));
```

## License

MIT License  
Copyright (c) 2019 Hiroki Minagawa

See [LICENSE](./LICENSE) for details.
