'use strict';
/**
 * @param {?} sometotal
 * @param {?} value
 * @param {!Object} _
 * @return {undefined}
 */
BEN = function(sometotal, value, _) {
  _.d(value, "j", function() {
    return toStringClean;
  });
  _.d(value, "g", function() {
    return prefetchGroupsInfo;
  });
  _.d(value, "p", function() {
    return parse;
  });
  _.d(value, "h", function() {
    return scoreNextPageLinkCandidate;
  });
  _.d(value, "u", function() {
    return toggleFullscreen;
  });
  _.d(value, "i", function() {
    return resize;
  });
  _.d(value, "m", function() {
    return setup;
  });
  _.d(value, "l", function() {
    return checkExceptionProperties;
  });
  _.d(value, "k", function() {
    return randomArrayValue;
  });
  _.d(value, "n", function() {
    return rarityColors;
  });
  _.d(value, "f", function() {
    return init;
  });
  _.d(value, "d", function() {
    return configure;
  });
  _.d(value, "e", function() {
    return load;
  });
  _.d(value, "o", function() {
    return removeUnloadWarning;
  });
  _.d(value, "q", function() {
    return injectLiveStyleScriptIncludeIntoHtml;
  });
  _.d(value, "t", function() {
    return inBlackList;
  });
  _.d(value, "b", function() {
    return 75;
  });
  _.d(value, "s", function() {
    return updateTable;
  });
  _.d(value, "a", function() {
    return 300;
  });
  _.d(value, "r", function() {
    return instrumentTree;
  });
  _.d(value, "c", function() {
    return copy;
  });
  var data = _("N8Vf");
  var s = _("q1tI");
  var elem = _.n(s);
  var change = _("EDFO");
  var flags = _("eJB8");
  var opts = _.n(flags);
  Object(change.addStyles)();
  /**
   * @param {string} _f
   * @return {?}
   */
  var toStringClean = function(_f) {
    return _f || 0 === _f ? _f.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
  };
  /** @type {!Array} */
  var ending = ["st", "nd", "rd", "th"];
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  var prefetchGroupsInfo = function(canCreateDiscussions) {
    return canCreateDiscussions % 100 < 11 || canCreateDiscussions % 100 > 13 ? canCreateDiscussions % 10 == 1 ? ending[0] : canCreateDiscussions % 10 == 2 ? ending[1] : canCreateDiscussions % 10 == 3 ? ending[2] : ending[3] : ending[3];
  };
  /** @type {!Array} */
  var mathNumberThingy = ["\u2070", "\u00b9", "\u00b2", "\u00b3", "\u2074", "\u2075", "\u2076", "\u2077", "\u2078", "\u2079"];
  /**
   * @param {number} value
   * @return {?}
   */
  var parse = function(value) {
    /** @type {number} */
    var result = value;
    if (value >= 1000) {
      /** @type {!Array} */
      var suffixes = ["", "K", "M", "B", "T"];
      /** @type {number} */
      var i = Math.floor((value.toString().length - 1) / 3);
      if (i < suffixes.length) {
        /** @type {string} */
        var bytes = "";
        /** @type {number} */
        var precision = 3;
        for (; precision >= 1; precision--) {
          if ((bytes = parseFloat((0 !== i ? value / Math.pow(1000, i) : value).toPrecision(precision))).toString().replace(/[^a-zA-Z 0-9]+/g, "").length <= 3) {
            break;
          }
        }
        if (bytes % 1 != 0) {
          /** @type {string} */
          bytes = bytes.toFixed(1);
        }
        result = bytes + suffixes[i];
      } else {
        /** @type {number} */
        var w = value;
        /** @type {number} */
        var numbersmt = 0;
        for (; w >= 100;) {
          /** @type {number} */
          w = Math.floor(w / 10);
          /** @type {number} */
          numbersmt = numbersmt + 1;
        }
        /** @type {string} */
        result = "".concat(w / 10, " \u00d7 10").concat(function(pingErr) {
          /** @type {string} */
          var previousSource = "";
          return pingErr.toString().split("").forEach(function(value) {
            previousSource = previousSource + mathNumberThingy[Number(value)];
          }), previousSource;
        }(numbersmt + 1));
      }
    }
    return result;
  };
  /**
   * @param {string} link
   * @return {?}
   */
  var scoreNextPageLinkCandidate = function(link) {
    /** @type {!Array<string>} */
    var row = window.location.search.substring(1).split("&");
    /** @type {number} */
    var CR_index = 0;
    for (; CR_index < row.length; CR_index++) {
      /** @type {!Array<string>} */
      var children = row[CR_index].split("=");
      if (children[0] === link) {
        return children[1];
      }
    }
    return false;
  };
  /**
   * @return {?}
   */
  var toggleFullscreen = function() {
    var d = window.document;
    var docEl = d.documentElement;
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var deltaUpdate = d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen;
    return d.fullscreenElement || d.mozFullScreenElement || d.webkitFullscreenElement || d.msFullscreenElement ? (deltaUpdate && deltaUpdate.call(d), false) : (requestFullScreen && requestFullScreen.call(docEl), true);
  };
  /**
   * @return {?}
   */
  var resize = function() {
    var document = window.document;
    return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || window.screen.width === window.innerWidth && window.screen.height === window.innerHeight);
  };
  /**
   * @param {number} DSWMan
   * @param {string} PWASet
   * @return {?}
   */
  var setup = function(DSWMan, PWASet) {
    return Math.floor(Math.random() * (PWASet - DSWMan)) + DSWMan;
  };
  /**
   * @param {number} callback
   * @param {string} watchPanel
   * @return {?}
   */
  var checkExceptionProperties = function(callback, watchPanel) {
    return Math.random() * (watchPanel - callback) + callback;
  };
  /**
   * @param {!Object} result
   * @return {?}
   */
  var randomArrayValue = function(result) {
    return result[Math.floor(Math.random() * result.length)];
  };
  var rarityColors = {
    Common : "#ffffff",
    Uncommon : "#4bc22e",
    Rare : "#0a14fa",
    Epic : "#be0000",
    Legendary : "#ff910f",
    Chroma : "#00ccff",
    Unique : "#008080",
    Mystical : "#a335ee"
  };
  /**
   * @param {string} data
   * @param {string} pbar
   * @return {?}
   */
  var init = function(data, pbar) {
    if (!data) {
      return data;
    }
    var index = data.indexOf("upload/");
    if (-1 === index || data.includes("images.unsplash.com")) {
      return data;
    }
    index = index + 7;
    /** @type {string} */
    var testMiddlewares = pbar ? "f_auto" : "c_limit,f_auto,h_250,fl_lossy,q_auto:low";
    return "".concat(data.slice(0, index)).concat(testMiddlewares).concat(data.slice(index - 1, data.length));
  };
  /**
   * @param {string} data
   * @return {?}
   */
  var configure = function(data) {
    if (!data) {
      return data;
    }
    var index = data.indexOf("upload/");
    if (-1 === index) {
      return data;
    }
    return index = index + 7, "".concat(data.slice(0, index)).concat("f_auto,q_auto:best").concat(data.slice(index - 1, data.length));
  };
  /**
   * @param {?} sections
   * @param {string} start
   * @param {number} data
   * @return {?}
   */
  var load = function(sections, start, data) {
    return sections.map(function($tags, awsKey) {
      return elem.a.createElement("div", {
        className : opts.a.correctContainer,
        key : awsKey
      }, 0 !== awsKey ? elem.a.createElement("span", {
        className : opts.a.leftBack
      }, "&\u00a0") : null, 2 === $tags.split("`~`").length ? elem.a.createElement("img", {
        src : init($tags.split("`~`")[1]),
        alt : "Answer",
        draggable : false,
        className : opts.a.img,
        style : {
          maxWidth : 1.5 * (data || 20),
          maxHeight : 1.5 * (data || 20)
        }
      }) : "`*`" === $tags.slice(0, 3) ? elem.a.createElement(change.StaticMathField, {
        className : opts.a.mathField,
        style : {
          color : start || "#3a3a3a",
          borderColor : start || "#3a3a3a",
          fontSize : "".concat(data || 20, "px")
        }
      }, $tags.slice(3, $tags.length - 3)) : elem.a.createElement("span", null, $tags));
    });
  };
  /**
   * @param {string} event
   * @return {?}
   */
  var onMousedown = function(event) {
    var e = event || window.event;
    return e && (e.returnValue = "Are you sure you want to leave?"), "Are you sure you want to leave?";
  };
  /**
   * @return {undefined}
   */
  var removeUnloadWarning = function() {
    window.removeEventListener("beforeunload", onMousedown);
  };
  /**
   * @param {string} next
   * @return {?}
   */
  var injectLiveStyleScriptIncludeIntoHtml = function(next) {
    return next ? next.indexOf('"') >= 0 ? "Emails can't have quotations." : function(next) {
      return /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i.test(String(next).toLowerCase());
    }(next) ? next.length > 50 ? "Ok, that email is a little too long." : null : "That's not a real email, silly." : "Where's the email?";
  };
  /**
   * @param {string} url
   * @return {?}
   */
  var inBlackList = function(url) {
    return url ? url.indexOf(" ") >= 0 ? "Usernames can't have spaces." : url.indexOf("\t") >= 0 ? "Usernames can't have tabs." : url.indexOf('"') >= 0 ? "Usernames can't have quotations." : function(str_url) {
      return /[^-\]_.~!*'();:@&+$,/%#[A-z0-9]/.test(str_url);
    }(url) ? "Usernames can't have extra special characters." : Object(data.a)().test(url) ? "Sorry, no emojis allowed." : url.length > 15 ? "Sorry, that name is too long." : null : "Where's The Name?";
  };
  /**
   * @param {string} options
   * @return {?}
   */
  var updateTable = function(options) {
    return options ? options.length > 75 ? "Sorry, that title is too long." : null : "Where's The Title?";
  };
  /**
   * @param {!NodeList} outFile
   * @return {?}
   */
  var instrumentTree = function(outFile) {
    return outFile.length > 300 ? "Sorry, that description is too long." : null;
  };
  /**
   * @param {!Object} txt
   * @return {undefined}
   */
  var copy = function(txt) {
    /** @type {!Element} */
    var elem = document.createElement("textarea");
    /** @type {!Object} */
    elem.value = txt;
    elem.setAttribute("readonly", "");
    /** @type {string} */
    elem.style.position = "absolute";
    /** @type {string} */
    elem.style.left = "-9999px";
    document.body.appendChild(elem);
    var stored_selection = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    if (stored_selection) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(stored_selection);
    }
  };
};
