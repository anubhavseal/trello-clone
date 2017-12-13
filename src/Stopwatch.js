function Stopwatch(params) {
    this._startedAt = null;
    this._previousElapsed = 0;
    this._lap = 0;
    this._status = 'Not Initialized'
}

Stopwatch.prototype._ticking = function(){
    var currentTime = Date.now();
    this._lap = currentTime - this._startedAt + this._previousElapsed;
    this.getDuration();
}
Stopwatch.prototype._millisecondsToString = function(milliseconds){
    var ms, secs, mins, hrs;
    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }
    ms = milliseconds % 1000;
    milliseconds = (milliseconds - ms) / 1000;
    secs = milliseconds % 60;
    milliseconds = (milliseconds - secs) / 60;
    mins = milliseconds % 60;
    hrs = (milliseconds - mins) / 60;
    return hrs + ':' + mins + ':' + pad(secs);
}
Stopwatch.prototype.start = function(){
    this._startedAt = Date.now();
    this._status = 'Running';
    setInterval(this._ticking.call(this),1000);
}
Stopwatch.prototype.pause = function(){
    this._previousElapsed = this._lap;
    this._startedAt = null;
    this._status = 'Paused';
}
Stopwatch.prototype.stop = function(){
    this._startedAt = null;
    this._status = 'Stopped';
}
Stopwatch.prototype.getDuration = function(){ return this._millisecondsToString(this._lap); }
Stopwatch.prototype.getStatus = function(){ return this._status; }
