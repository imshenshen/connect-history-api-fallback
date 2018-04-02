'use strict'

var url = require('url')

module.exports = (options = {}, app) => {
  const logger = getLogger(options)

  return async function historyApiFallback(ctx, next) {
    const headers = ctx.headers
    if (ctx.method !== 'GET' || !ctx.accepts(options.accepts || 'html')) {
      return next()
    }
    var parsedUrl = url.parse(ctx.url)
    var rewriteTarget
    options.rewrites = options.rewrites || []
    for (var i = 0; i < options.rewrites.length; i++) {
      var rewrite = options.rewrites[i]
      var match = parsedUrl.pathname.match(rewrite.from)
      if (match !== null) {
        rewriteTarget = evaluateRewriteRule(parsedUrl, match, rewrite.to, ctx)
        ctx.url = rewriteTarget
        return next()
      }
    }

    var pathname = parsedUrl.pathname
    if (
      pathname.lastIndexOf('.') > pathname.lastIndexOf('/') &&
      options.disableDotRule !== true
    ) {
      return next()
    }

    rewriteTarget = options.index || '/index.html'
    logger('Rewriting', ctx.method, ctx.url, 'to', rewriteTarget)
    ctx.url = rewriteTarget
    next()
  }

  function evaluateRewriteRule(parsedUrl, match, rule, ctx) {
    if (typeof rule === 'string') {
      return rule
    } else if (typeof rule !== 'function') {
      throw new Error('Rewrite rule can only be of type string or function.')
    }

    return rule({ parsedUrl, match, ctx })
  }

  function getLogger(options) {
    if (options && options.logger) {
      return options.logger
    } else if (options && options.verbose) {
      return console.log.bind(console)
    }
    return function() {}
  }
}
