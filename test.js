'use strict'

var test = require('tape')
var remark = require('remark')
var u = require('unist-builder')
var fixRelativeUris = require('.')

test('remark-fix-relative-uris', function (t) {
  const baseURI = 'https://www.craftz.dog/'
  t.deepEqual(
    remark()
      .use(fixRelativeUris, {baseURI: baseURI})
      .runSync(
        u('root', [
          u('link', {url: '#about'}, [u('text', 'About')]),
          u('link', {url: '/about'}, [u('text', 'About')])
        ])
      ),
    u('root', [
      u('link', {url: '#about'}, [u('text', 'About')]),
      u('link', {url: `${baseURI}about`}, [u('text', 'About')])
    ])
  )

  t.end()
})
