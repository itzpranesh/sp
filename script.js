var domainroot = "scribblepositive.com";
function Gsitesearch(curobj) {
    curobj.q.value = "site:" + domainroot + ": " + curobj.qfront.value;
}