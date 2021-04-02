# remark-fix-relative-uris

[**remark**][remark] plugin to resolve relative URIs.

## Install

[npm][]:

```sh
npm install remark-fix-relative-uris
```

## Use

```js
var remark = require('remark')
var fixRelativeUris = require('remark-fix-relative-uris')

remark()
  .use(fixRelativeUris, {baseURI: 'https://www.craftz.dog/'})
  .processSync('[About](/about)\n')
  .toString()
// => "[About](https://www.craftz.dog/about)\n"
```

## API

### `remark().use(fixRelativeUris, args)`

Resolve relative URIs.

- `args.baseURI` — The base URI to append

## Related

- [`mdast-util-fix-relative-uris`][mdast-util-fix-relative-uris]
  — [**mdast**][mdast] utility that is in the core of this plugin

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Takuya Matsuyama][author]

[npm]: https://docs.npmjs.com/cli/install
[health]: https://github.com/remarkjs/.github
[contributing]: https://github.com/remarkjs/.github/blob/HEAD/contributing.md
[support]: https://github.com/remarkjs/.github/blob/HEAD/support.md
[coc]: https://github.com/remarkjs/.github/blob/HEAD/code-of-conduct.md
[license]: LICENSE
[author]: https://www.craftz.dog/
[remark]: https://github.com/remarkjs/remark
[mdast]: https://github.com/syntax-tree/mdast
[mdast-util-fix-relative-uris]: https://github.com/inkdropapp/mdast-util-fix-relative-uris
[hast]: https://github.com/syntax-tree/hast
