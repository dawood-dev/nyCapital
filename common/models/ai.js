'use strict';

module.exports = function(Ai) {
  Ai.pagination = function(msg, cb) {
    cb(null, 'pagination... ' + msg);
  };
  Ai.remoteMethod('pagination', {
    accepts: {arg: 'msg', type: 'string'},
    returns: {arg: 'pagination', type: 'string'},
  });
};
