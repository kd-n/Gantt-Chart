//gantt{
//    version:"4.1.0"
//}

//gantt.event = function (el, event, handler) {
//    if (el.addEventListener)
//        el.addEventListener(event, handler, false);
//    else if (el.attachEvent)
//        el.attachEvent("on" + event, handler);
//}

//gantt.eventRemove = function (el, event, handler) {
//    if (el.removeEventListener)
//        el.removeEventListener(event, handler, false)
//    else if (el.detachEvent)
//        el.detachEvent("on" + event, handler);
//}

//gantt._eventable = function (obj) {
//    obj._silent_mode = false;
//    obj._silentStart = function () {
//        this.silent_mode = true;
//    };
//    obj.attachEvent = function (name, catcher, callObj) {
//        name = 'ev_' + name.toLowerCase();
//        if (!this[name])
//            this[name] = new this._eventCatcher(callObj || this);

//        return (name + ':' + this[name].addEvent(catcher));
        
//    };

//    obj.callEvent = function (name, arg0) {
//        if (this._silent_mode) return true;
//        name = 'ev_' + name.toLowerCase();
//        if (this[name])
//            return this[name].apply(this, arg0);
//        return true;
//    };
    
//    obj.checkEvent = function (name) {
//        return (!!this['ev_' + name.toLowerCase()]);
//    };

//    obj._eventCatcher = function (obj) {
//        var dhx_catch = [];
//        var z = function () {
//            var res = true;
//            for (var i = 0; i < dhx_catch.length; i++) {
//                if (dhx_catch[i]) {
//                    var zr = dhx_catch[i].apply(obj, arguments);
//                    res = res && zr;
//                }
//            }
//            return res;
//        };

//}
