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

// audio controls
var audio = document.getElementById('audio')
var playButton = document.getElementById('play')
var nextButton = document.getElementById('next')
var beforeButton = document.getElementById('before')

_addEventListener(playButton, function() {
  console.log('play audio')
  audio && audio.play && audio.play()
})

function _addEventListener(ele, fn) {
  if (!ele) {
    console.warn('element can not be null')
    return
  }
  if (ele.onclick) {
    ele.onclick = fn
  } else {
    ele.addEventListener('click', fn)
  }
}