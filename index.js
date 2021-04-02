'use strict'

var fixRelativeUris = require('mdast-util-fix-relative-uris')

module.exports = function (args = {}) {
  var baseURI = args.baseURI
  return transformer

  function transformer(tree) {
    return fixRelativeUris(tree, baseURI)
  }
}
