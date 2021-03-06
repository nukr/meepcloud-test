import r from 'rethinkdb';
import Router from 'koa-router';

let router = Router();
router.get('/users', get);

function * get (next) {
  var cursor = yield r.table('bills').run(this._rdbConn);
  this._result = yield cursor.toArray();
  yield next;
}

export default router.middleware();

