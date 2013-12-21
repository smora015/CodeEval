var currEvent = null;

function getEvtType(evt) {
currEvent = evt.type;
eventKey = event.keyCode ? event.keyCode : event.charCode; 
document.getElementById("Etype").firstChild.nodeValue = currEvent;
document.getElementById("KeyPressed").firstChild.nodeValue = eventKey;
}
