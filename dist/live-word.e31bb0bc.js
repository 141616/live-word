// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"index.js":[function(require,module,exports) {
var data = {
  title: '另一个我的一生',
  author: '西川',
  content: ['我会在十二岁爱上一个小仙女', '陪她穿过超市的小巷', '阳光闪烁的广场', '我会为她花光手里的钱', '为的是吻一下', '她善变的嘴唇', '抱住她，像抱住', '头顶的月亮', '而假如她拒绝我', '我会一点一滴地品味', '我浪漫的迷惘']
};

function renderTitle(val) {
  var title = document.getElementsByClassName('title');
  title[0] && (title[0].innerText = val);
  document.title = val;
}

function renderAuthor(val) {
  var author = document.getElementsByClassName('author');
  author[0] && (author[0].innerText = val);
}

function renderContent(vals) {
  var content = document.getElementsByClassName('content');
  content = content && content[0];
  vals.forEach(function (val) {
    var line = document.createElement('p');
    line.innerText = val;

    if (content.append) {
      content.append(line);
    } else {
      content.appendChild(line);
    }
  });
}

renderTitle(data.title);
renderAuthor(data.author);
renderContent(data.content); // audio controls

var audioDom = document.getElementById('audio');
var playButton = document.getElementById('play');
var nextButton = document.getElementById('next');
var beforeButton = document.getElementById('before');
var playTime = document.getElementById('playTime');
var allTime = document.getElementById('allTime');
var progress = document.getElementById('progress');

function audioTransTime(time) {
  if (!time > 0) {
    return '';
  }

  if (time === Infinity) {
    return '--:--';
  }

  var duration = parseInt(time);
  var minute = parseInt(duration / 60);
  var sec = duration % 60 + '';
  var isM0 = ':';

  if (minute === 0) {
    minute = '00';
  } else if (minute < 10) {
    minute = '0' + minute;
  }

  if (sec.length === 1) {
    sec = '0' + sec;
  }

  return minute + isM0 + sec;
}

function updateTime(time, duration) {
  // 更新时间
  playTime && (playTime.innerText = audioTransTime(time)); // 更新progress

  progress && (progress.style.width = parseInt(time * 100 / duration) + '%');
}

function audioReset() {
  console.log('audio reset');
}

function audioInit() {
  var _this = this;

  if (audioDom.duration) {
    allTime && (allTime.innerText = audioTransTime(audioDom.duration));
  } // 监听音频播放时间并更新进度条


  var updateProgress = function updateProgress() {
    if (audioDom.currentTime > 0 && audioDom.duration !== Infinity) {
      // this.loadingClass = false
      updateTime(audioDom.currentTime, audioDom.duration);
    }
  }; // 监听播放完成事件


  var audioEnded = function audioEnded() {
    audioReset();
  }; // 处理播放错误


  var handleError = function handleError(e) {
    var errorCode = e && e.currentTarget && e.currentTarget.error.code;

    switch (errorCode) {
      case 2:
        toast(_this.__('MEDIA_ERR_NETWORK'));
        break;

      case 3:
        toast(_this.__('MEDIA_ERR_DECODE'));
        break;

      case 4:
        toast(_this.__('MEDIA_ERR_SRC_NOT_SUPPORTED'));
        break;

      default:
        toast(_this.__('MEDIA_ERR_UNKNOWN'));
    }

    audioEnded();
  }; // 播放


  var handlePlay = function handlePlay() {
    if (audioDom.paused) {
      audioDom.play && audioDom.play();
      audioDom.classList.remove('pause');
    } else {
      audioDom.pause && audioDom.pause();
      audioDom.classList.add('pause');
    }
  }; // 是否支持 onended 监听播放完成事件


  _addEventListener(audioDom, 'ended', audioEnded); // error


  _addEventListener(audioDom, 'error', handleError); // 是否支持 ontimeupdate 监听更新事件


  _addEventListener(audioDom, 'timeupdate', updateProgress); // 点击播放


  _addEventListener(playButton, 'click', handlePlay);
}

function _addEventListener(elem, type, func) {
  if (elem['_is' + type]) {
    return;
  }

  if (elem['on' + type] === undefined) {
    elem.addEventListener(type, func, false);
  } else {
    elem['on' + type] = func;
  }

  elem['_is' + type] = true;
}

audioInit();
},{}],"C:/Users/17173/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63900" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:/Users/17173/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/live-word.e31bb0bc.map