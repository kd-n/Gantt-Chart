gantt{
    version:"4.1.0"
}

gantt.event = function (el, event, handler) {
    if (el.addEventListener)
        el.addEventListener(event, handler, false);
    else if (el.attachEvent)
        el.attachEvent("on" + event, handler);
}

gantt.eventRemove = function (el, event, handler) {
    if (el.removeEventListener)
        el.removeEventListener(event, handler, false)
    else if (el.detachEvent)
        el.detachEvent("on" + event, handler);
}

gantt._eventable = function (obj) {
    obj.silent_mode = false;
}