/**
 * Another advanced technique is called "currying", which is to use a function
 * to dynamically create another which has been pre-seeded with the arguments
 * of the first.
 *
 * The source for the "jlogger" logging module is reproduced below. Examine
 * line 37 for an example of currying.
 */
module.exports = function(logFile) {
  var fs     = require('fs');
  var stream = fs.createWriteStream(logFile, {flags: 'a'});

  // helper function to format a log entry
  function makeEntry (level, msg) {
    var timeStamp = new Date().toString();

    // format the message if it is an object
    if (typeof msg == 'object') { msg = JSON.stringify(msg, null, 2); }
    var logEntry  = timeStamp + " - " + level.toUpperCase() + ": " + msg + "\n";
    return logEntry;
  }

  // helper function to write to disk
  function write (logEntry, callback) {
    stream.write(
      logEntry,
      'utf8',
      (typeof callback == 'function') ? callback : null
    );
  }

  // Assemble the logger object
  var jlogger = {
    logFile: logFile,

    // creates a new log level
    addLogLevel: function(level) {
      this[level] = function(msg, callback) {
        write(makeEntry(level, msg), callback);
      }
    },
  };

  // prepare some default log levels
  jlogger.addLogLevel('info');
  jlogger.addLogLevel('debug');
  jlogger.addLogLevel('warn');
  jlogger.addLogLevel('error');
  jlogger.addLogLevel('critical');

  // return the logger
  return jlogger;
};
