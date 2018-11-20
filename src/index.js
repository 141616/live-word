import './style.css'
import AUDIO from './audio.mp3'

var data = {
  title: '另一个我的一生',
  author: '西川',
  content: [
    '我会在十二岁爱上一个小仙女',
    '陪她穿过超市的小巷',
    '阳光闪烁的广场',
    '我会为她花光手里的钱',
    '为的是吻一下',
    '她善变的嘴唇',
    '抱住她，像抱住',
    '头顶的月亮',
    '而假如她拒绝我',
    '我会一点一滴地品味',
    '我浪漫的迷惘'
  ]
}

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
  var content = document.getElementsByClassName('content')
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

renderTitle(data.title)
renderAuthor(data.author)
renderContent(data.content)
function createAudio() {
  var audio = new Audio()
  audio.src = AUDIO
  document.body.appendChild(audio)
  return audio
}
// audio controls
var audioDom = createAudio()
var playButton = document.getElementById('play')
var nextButton = document.getElementById('next')
var beforeButton = document.getElementById('before')
var playTime = document.getElementById('playTime')
var allTime = document.getElementById('allTime')
var progress = document.getElementById('progress')
// 滚动相关
var content = document.getElementById('content')
var clientHeight = content.clientHeight
var scrollHeight = content.scrollHeight
function audioTransTime(time) {
  if (!time > 0) {
    return ''
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
  // 更新progress
  progress && (progress.style.width = parseInt(time * 100 / duration) + '%')
}
function updateScroll(time, duration) {
  content.scrollTop = (time / duration) * (scrollHeight - clientHeight)
}

function audioReset() {
  console.log('audio reset')
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
      audioDom.classList.remove('pause')
    } else {
      audioDom.pause && audioDom.pause()
      audioDom.classList.add('pause')
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