import './style.css'
import datas from './data'
import bgs from './bgs'
import audios from './audios'

var PAUSE_CLASS = 'pause'
var changeColorList = ["5", "9", "15", "18", "27", "35", "36", "43", "46", "52", "53", "56", "64", "69", "72", "82", "83", "90", "92"]
var idx = location.search.replace('?id=', '')
var data = datas[parseInt(idx) - 1]
var bg = bgs[idx]
document.getElementById('wrapper').style.backgroundImage = `url('./${bg}')`

function renderTitle(val) {
  var title = document.getElementsByClassName('title')
  title[0] && (title[0].innerText = val)
  document.title = val
}

function renderAuthor(val) {
  var author = document.getElementsByClassName('author')
  author[0] && (author[0].innerText = val)
}

function renderContent(vals) {
  var content = document.getElementsByClassName('content-p')
  content = content && content[0]
  vals.forEach(function(val) {
    var line = document.createElement('p')
    line.innerText = val
    if (content.append) {
      content.append(line)
    } else {
      content.appendChild(line)
    }
  })
}

function renderBgm(val) {
  var bgm = document.getElementsByClassName('bgm')
  bgm[0] && (bgm[0].innerText = val)
}

function renderBgmSource(val) {
  document.getElementById('bgmSourceFix').innerText = 'BGM来源：'
  var bgmSource = document.getElementsByClassName('bgm-source')
  bgmSource[0] && (bgmSource[0].innerText = val) && (bgmSource[0].href = val)
}

function renderReporter(val) {
  var reporter = document.getElementsByClassName('reporter')
  reporter[0] && (reporter[0].innerText = val)
}

renderTitle(data.title)
renderAuthor(data.author)
renderContent(data.content)
renderBgm(`BGM：${data.bgm}`)
renderBgmSource(`${data.bgmSource}`)
renderReporter(`朗诵者：${data.reporter}`)
function createAudio() {
  var audio = new Audio()
  // var _id = parseInt(idx) + 1
  audio.src = audios[idx]
  document.body.appendChild(audio)
  return audio
}
// audio controls
var audioDom = createAudio()
var playButton = document.getElementById('play')
var nextButton = document.getElementById('next')
var beforeButton = document.getElementById('pre')
var playTime = document.getElementById('playTime')
var allTime = document.getElementById('allTime')
var progress = document.getElementById('progress')
var timeControls = document.getElementById('timeControls')
// 滚动相关
var content = document.getElementById('content')
var clientHeight = content.clientHeight
var scrollHeight = content.scrollHeight

function changeColor() {
  if (changeColorList.indexOf(idx) > -1) {
    playButton.classList.add('play-grey')
    nextButton.classList.add('next-grey')
    beforeButton.classList.add('pre-grey')
    timeControls.classList.add('grey')
    PAUSE_CLASS = 'pause-grey'
  }
}
changeColor()
function audioTransTime(time) {
  if (!time > 0) {
    return '00:00'
  }
  if (time === Infinity) {
    return '--:--'
  }
  var duration = parseInt(time)
  let minute = parseInt(duration / 60)
  let sec = duration % 60 + ''
  var isM0 = ':'
  if (minute === 0) {
    minute = '00'
  } else if (minute < 10) {
    minute = '0' + minute
  }
  if (sec.length === 1) {
    sec = '0' + sec
  }
  return minute + isM0 + sec
}

function updateTime(time, duration) {
  // 更新时间
  playTime && (playTime.innerText = audioTransTime(time))
  const durationFormat = audioTransTime(duration)
  allTime && (allTime.innerText !== durationFormat) && (allTime.innerText = durationFormat)
  // 更新progress
  progress && (progress.style.width = parseInt(time * 100 / duration) + '%')
}

// var scrollPos = 0
var interval = null
var isStart = false
function goScroll(content, val) {
  interval = setInterval(() => {
    content.scrollBy(0, 1)
  }, val);
}
function updateScroll(time, duration) {
  if (!isStart && duration && time > 15 && (scrollHeight - clientHeight) > 0) {
    var val = ((duration - time) * 1000) / (scrollHeight - clientHeight)
    goScroll(content, val)
    isStart = true
  }
  if (time === duration) {
    clearInterval(interval)
    content.scrollBy(0, 0)
  }
}

function audioReset() {
  playButton.classList.remove(PAUSE_CLASS)
  updateTime(audioDom.currentTime, audioDom.duration)
  updateScroll(audioDom.currentTime, audioDom.duration)
  isStart = false
}

function audioInit() {
  if (audioDom.duration) {
    allTime && (allTime.innerText = audioTransTime(audioDom.duration))
  }
  // 监听音频播放时间并更新进度条
  var updateProgress = function() {
    if (audioDom.currentTime > 0 && audioDom.duration !== Infinity) {
      // this.loadingClass = false
      updateTime(audioDom.currentTime, audioDom.duration)
      updateScroll(audioDom.currentTime, audioDom.duration)
    }
  }
  // 监听播放完成事件
  var audioEnded = function() {
    audioDom.currentTime = 0
    audioReset()
  }
  // 处理播放错误
  var handleError = e => {
    var errorCode = e && e.currentTarget && e.currentTarget.error.code
    switch (errorCode) {
      case 2:
        console.log('MEDIA_ERR_NETWORK')
        break
      case 3:
        console.log('MEDIA_ERR_DECODE')
        break
      case 4:
        console.log('MEDIA_ERR_SRC_NOT_SUPPORTED')
        break
      default:
        console.log('MEDIA_ERR_UNKNOWN')
    }
    audioEnded()
  }
  // 播放
  var handlePlay = function() {
    if (audioDom.paused) {
      audioDom.play && audioDom.play()
      playButton.classList.add(PAUSE_CLASS)
    } else {
      audioDom.pause && audioDom.pause()
      playButton.classList.remove(PAUSE_CLASS)
    }
  }

  // 是否支持 onended 监听播放完成事件
  _addEventListener(audioDom, 'ended', audioEnded)
  // error
  _addEventListener(audioDom, 'error', handleError)
  // 是否支持 ontimeupdate 监听更新事件
  _addEventListener(audioDom, 'timeupdate', updateProgress)
  // 点击播放
  _addEventListener(playButton, 'click', handlePlay)
}

function _addEventListener(elem, type, func) {
  if (elem['_is' + type]) {
    return
  }
  if (elem['on' + type] === undefined) {
    elem.addEventListener(type, func, false)
  } else {
    elem['on' + type] = func
  }
  elem['_is' + type] = true
}

audioInit()