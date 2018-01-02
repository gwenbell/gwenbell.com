var metalsmith   = require('metalsmith'),
    markdown     = require('metalsmith-markdown'),
    layouts      = require('metalsmith-layouts'),
    permalinks   = require('metalsmith-permalinks'),
    collections  = require('metalsmith-collections'),
    moment       = require('moment')

metalsmith(__dirname)
    .metadata({
      site: {
            title: 'Gwen Bell | Technologist, Writer & Yoga Practitioner',
            url: 'http://gwenbell.com/',
            author: 'Gwendolyn Bell',
            photo: 'g.jpg'
      }
     })
    .use(markdown())
    .use(permalinks({
      pattern: ':collections/:title',
      relative: false
     }))
    .use(layouts({
     engine: 'jade',
     moment
    }))
    .destination('./build')
    .build(function(err) {
      if (err) {throw err;}
      else { console.log('success. site built.'); }
    });
