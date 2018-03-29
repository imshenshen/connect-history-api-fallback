'use strict';

const mock = require('egg-mock');

describe('test/history-api-fallback.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/history-api-fallback-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, historyApiFallback')
      .expect(200);
  });
});
