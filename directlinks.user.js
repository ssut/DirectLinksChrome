// ==UserScript==
// @name DirectLinks
// @namespace http://ssut.me/directlinks
// @version 0.1.0
// @description Do not track what I do on a website
// @updateURL https://raw.githubusercontent.com/ssut/DirectLinksChrome/stable/directlinks.user.js
// @downloadURL https://raw.githubusercontent.com/ssut/DirectLinksChrome/stable/directlinks.user.js
// Targets
// @include https://*.google*
// @copyright 2015 SuHun Han (ssut)
// @grant none
// ==/UserScript==

var dlinks = {
    google: {
        urlpattern: 'google.',
        pattern: /[?&]url=[^&]+/,
        replaceTo: function(link) {
            if(link.getAttribute('onmousedown')) {
                link.removeAttribute('onmousedown');
            }

            if(link.pathname === '/url') {
                if ((/[?&]url=[^&]+/).test(link.search)) {
                    return decodeURIComponent(link.search.split(/[?&]url=/)[1].split('&')[0]);
                }
            }

            return null;
        },
        checkValid: function(hostname, pathname, fullpath) {
            return (hostname.indexOf('www.') > -1 || hostname.indexOf('encrypted') > -1) &&
                   (pathname === '/' || pathname === '/search' || pathname === '/webhp');
        }
    }
};
var match = undefined;

function onClick(e) {
    var et = e.target, lc = -1;
    while(et && !(et instanceof HTMLAnchorElement) && (3 > lc++)) {
        et = et.parentElement;
    }
    if(!et || !et.href) return;
    var link = et;
    e.stopPropagation();
    var newlink = match.replaceTo(link);
    if(newlink) link.href = newlink;
}

function execute() {
    var hostname = window.location.hostname,
        pathname = window.location.pathname,
        param = [window.location.search, window.location.hash].join('');
    for(var name in dlinks) {
        var rule = dlinks[name];
        if(hostname.indexOf(rule.urlpattern) > -1) {
            if(rule.checkValid(hostname, pathname, param)) {
                match = rule;
                document.addEventListener('mousedown', onClick, false);
                break;
            }
        }
    }
}

if(document.readyState === 'interactive' || document.readyState === 'complete') {
    execute();
} else {
    window.addEventListener('DOMContentLoaded', execute, true);
}
