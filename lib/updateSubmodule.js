var gutil = require('gulp-util');
var exec = require('child_process').exec;

module.exports = function(opt, cb){
  if(!opt) opt = {};
  if(!opt.cwd) opt.cwd = process.cwd();
  if(!opt.args) opt.args = ' ';

  var cmd = "git submodule update " + opt.args;
  return exec(cmd, {cwd: opt.cwd}, function(err, stdout, stderr){
    if(err && cb) cb(err);
    gutil.log(stdout, stderr);
    if(cb) cb();
  });
};
