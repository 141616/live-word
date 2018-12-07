// function format(data) {
//   var res = []
//   for (var i = 1; i < 100; i++) {
//     var cItem = data.split(`${i+1}、`)[0].split(`${i}、`)[1]
//     var list = cItem.split('\n')
//     var mdata = {
//       title: '',
//       author: '',
//       content: [],
//       bgm: '',
//       bgmSource: '',
//       reporter: ''
//     }
//     list.forEach(line => {
//       if (line === '') {
//         return
//       }
//       // 标题
//       if (!mdata.title) {
//         return mdata.title = line
//       }
//       // 作者
//       if (!mdata.author) {
//         return mdata.author = line
//       }
//       // 内容 + bgm
//       if (!mdata.bgm) {
//         if (line.indexOf('BGM：') > -1) {
//           return mdata.bgm = line.replace('BGM：', '')
//         } else {
//           return mdata.content.push(line)
//         }
//       }
//       // bgmsource
//       if (!mdata.bgmSource) {
//         if (line.indexOf('BGM来源：') > -1) {
//           return mdata.bgmSource = line.replace('BGM来源：', '')
//         }
//       }
//       //  朗诵
//       if (!mdata.reporter) {
//         if (line.indexOf('朗读者：') > -1) {
//           return mdata.reporter = line.replace('朗读者：', '')
//         }
//       }
//     })
//     res.push(mdata)
//   }
//   console.log(JSON.stringify(res))
// }

export default [{
  "title": "《一握砂》节选",
  "author": "作者：石川啄木",
  "content": ["我所抱的一切思想", "仿佛都是没有钱而引起的；", "秋风吹起来了。"],
  "bgm": "Kevin MacLeod-Gymnopedie No 2",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《锈》",
  "author": "作者：弗里德里希·威廉·尼采",
  "content": ["生锈也有必要", "光是锐利也不行", "否则人们常常会说你：", "他太年轻！"],
  "bgm": "Kevin MacLeod-Gymnopedie No 1",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《寂寞》",
  "author": "作者：戴望舒",
  "content": ["园中野草渐离离，", "托根于我旧时的脚印，", "给他们披青春的彩衣，", "星下的盘从兹消隐。", "日子过去，寂寞永存，", "寄魂于离离的野草，", "像那些可怜的灵魂，",
          "长得如我一般高。", "我今不复到园中去，", "寂寞已如我一般高，", "我夜坐听风，昼眠听雨，", "悟得月如何缺，天如何老"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《爱眉小札》节选",
  "author": "作者：徐志摩",
  "content": ["爱的出发点，", "不一定是身体，", "但爱到了身体", "就到了顶点。", "厌恶的出发点，", "也不一定是身体，", "但厌恶到了身体，", "也就到了顶点。"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《人间失格》两则",
  "author": "作者：太宰治",
  "content": ["早晨，我睁眼醒来翻身下床，", "又变成了原来那个浅薄无知、", "善于伪装的滑稽角色。", "胆小鬼连幸福都会惧怕，", "碰到棉花都会受伤，", "有时也会被幸福所伤。",
          "趁着还没有受伤，", "我想就这样赶快分道扬镳。", "我又放出了惯用的逗笑烟幕弹。", "所谓世人，不就是你吗？"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《而已集·小杂感》节选",
  "author": "作者：鲁迅",
  "content": [],
  "bgm": "Josh Woodward-Autumn",
  "bgmSource": "http://joshwoodward.com/",
  "reporter": "右石先生"
}, {
  "title": "《寂寞的时候》",
  "author": "作者：金子美玲",
  "content": ["我寂寞的时候", "别人不知道", "我寂寞的时候", "朋友们在笑", "我寂寞的时候", "妈妈的脾气最好", "我寂寞的时候", "佛祖也寂寞"],
  "bgm": "Kevin MacLeod-Starry",
  "bgmSource": "https://incompetech.com",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《如梦记》节选",
  "author": "作者：石川啄木",
  "content": ["比人先知道了恋爱的甜味，", "知道了悲哀的我，", "也比人先老了。"],
  "bgm": "雨の夜",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "四夕"
}, {
  "title": "《沙与沫》节选",
  "author": "作者：纪·哈·纪伯伦",
  "content": ["仅仅在昨天，", "我认为我自己只是一个碎片，", "无韵律地在生命的穹苍中颤抖。", "现在我晓得，", "我就是那穹苍，", "一切生命都是在我里面有韵律地转动的碎片。",
          "他们在觉醒的时候对我说：", "“你和你所居住的世界，只不过是无边海洋的无边沙岸上的一粒沙子。”", "在梦里我对他们说：", "“我就是那无边的海洋，大千世界只不过是我的沙岸上的沙粒。”"],
  "bgm": "雨の夜",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "右石先生"
}, {
  "title": "《谁终将声震人间》",
  "author": "作者：弗里德里希·威廉·尼采",
  "content": ["谁终将声震人间，", "必长久深自缄默；", "谁终将点燃闪电，", "必长久如云漂泊。"],
  "bgm": "Josh Woodward-Ships-NoVox",
  "bgmSource": "http：//joshwoodward.com/",
  "reporter": "四夕"
}, {
  "title": "《爱的哲学》",
  "author": "作者：雪莱",
  "content": ["泉水总是向河水汇流，", "河水又汇入海中，", "天宇的轻风永远融有", "一种甜蜜的感情；", "世上哪有什么孤零零？", "万物由于自然律", "都必融会于一种精神。",
          "何以你我却独异？", "你看高山也在吻着碧空，", "波浪也相互拥抱；", "谁曾见花儿彼此不容：", "姊妹把弟兄轻蔑？", "阳光紧紧地拥抱着大地，", "月光在吻着海波：",
          "但这些接吻又有何益，", "要是你不肯吻我？"],
  "bgm": "SundaysChild",
  "bgmSource": "https://audionautix.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《拜伦致托马斯·摩尔》",
  "author": "作者：乔治·戈登·拜伦",
  "content": ["小艇停在岸边，", "舟楫泊在海里；", "在我临走之前，托姆·摩尔，", "我将双倍的祝福奉献给你！", "爱我的，我报以叹息。", "恨我的，我付之一笑。", "无论头上的苍穹如何不测，",
          "我对任何一种命运都不在意！", "即使海涛围着我咆哮，", "它仍将载行我的舟楫；", "即使沙漠将我困住，", "也仍有泉源让我寻觅。", "即令我挣扎在生命的悬崖，", "泉水决不会枯无一滴；",
          "在我衰微的灵魂离开之前，", "为了你，我将啜饮不已…", "且把那时的泉水当作今日的醇醪，", "我将把这杯奠酒泼洒在地；", "但愿你我安康无恙，", "啊，托姆·摩尔，祝福你！"],
  "bgm": "Josh Woodward-Ships-NoVox",
  "bgmSource": "http：//joshwoodward.com/",
  "reporter": "四夕"
}, {
  "title": "毛姆二则",
  "author": "作者：毛姆",
  "content": ["你要克服的是你的虚荣心", "是你的炫耀欲", "你要对付的是你的时刻想要冲出来想要出风头的小聪明", "我从来都无法得知，", "人们是究竟为什么会爱上另一个人，",
          "我猜也许我们的心上都有一个缺口，", "它是个空洞，呼呼的往灵魂里灌着刺骨的寒风，", "所以我们急切的需要一个正好形状的心来填上它，", "就算你是太阳一样完美的正圆形，", "可是我心里的缺口，",
          "或许却恰恰是个歪歪扭扭的锯齿形，", "所以你填不了。"],
  "bgm": "Kevin MacLeod-Oh Holy Night",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《一剪梅·雨打梨花深闭门》",
  "author": "作者：唐寅",
  "content": ["雨打梨花深闭门，忘了青春，误了青春。", "赏心乐事共谁论？花下销魂，月下销魂。", "愁聚眉峰尽日颦，千点啼痕，万点啼痕。", "晓看天色暮看云，行也思君，坐也思君。"],
  "bgm": "hyoutouka",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "《木兰词·拟古决绝词柬友》",
  "author": "作者：纳兰性德",
  "content": ["人生若只如初见，何事秋风悲画扇。", "等闲变却故人心，却道故人心易变。", "骊山语罢清宵半，泪雨零铃终不怨。", "何如薄幸锦衣郎，比翼连枝当日愿。"],
  "bgm": "お地蔵様のいる小道",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "汇文"
}, {
  "title": "《如果我不曾见过太阳》",
  "author": "作者：艾米莉.狄金森",
  "content": ["我本可以忍受黑暗", "如果我不曾见过太阳", "然而阳光已使我的荒凉", "成为更新的荒凉"],
  "bgm": "Josh Woodward-Ships-NoVox",
  "bgmSource": "http：//joshwoodward.com/",
  "reporter": "汇文"
}, {
  "title": "《偶然》",
  "author": "作者：徐志摩",
  "content": ["我是天空里的一片云", "偶尔投影在你的波心", "你不必讶异", "更无须欢喜", "在转瞬间消灭了踪影", "你我相逢在黑夜的海上", "你有你的，我有我的，方向", "你记得也好",
          "最好你忘掉", "在这交会时互放的光亮"],
  "bgm": "Kevin MacLeod-Sapphire Isle",
  "bgmSource": "https://incompetech.com",
  "reporter": "四夕"
}, {
  "title": "《飞鸟集》节选",
  "author": "作者：泰戈尔",
  "content": ["When I stand before thee at the day's end,", "thou shalt see my scars and know that",
          "I had my wounds and also my healing.", "长日尽处，我站在你的面前，", "你将看到我的疤痕，", "知道我曾经受伤，也曾经痊愈。"],
  "bgm": "SundaysChild",
  "bgmSource": "https://audionautix.com/",
  "reporter": "右石先生"
}, {
  "title": "《我可否将你比做一个夏日》",
  "author": "作者：莎士比亚",
  "content": ["我是否可以把你比喻成夏天？", "虽然你比夏天更可爱更温和：", "狂风会使五月娇蕾红消香断，", "夏天拥有的时日也转瞬即过；", "有时天空之巨眼目光太炽热，",
          "它金灿灿的面色也常被遮暗；", "而千芳万艳都终将凋零飘落，", "被时运天道只更替剥尽红颜；", "但你永恒的夏天将没有止尽，", "你所拥有的美貌也不会消失，", "死神终难夸口你游荡于死荫，",
          "当你在不朽的诗中永葆盛时；", "只要人类生存，或人有眼睛，", "我的诗就会流传并赋予你生命。"],
  "bgm": "GreenLeaves",
  "bgmSource": "https://audionautix.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《我见过你哭》",
  "author": "作者：乔治·戈登·拜伦",
  "content": ["我见过你哭", "晶莹的的泪珠", "从蓝眼睛滑落", "像一朵梦中出现的紫罗兰", "滴下清透的露珠", "我见过你笑", "连蓝宝石的光芒", "也因你而失色",
          "它怎能比的上在你凝视的眼中", "闪现的灵活光彩", "就如同夕阳为远方的云朵", "染上绚烂的色彩", "缓缓而来的暮色也不能", "将霞光逐出天外", "你的笑容让沉闷的心灵", "分享纯真的欢乐",
          "这阳光留下的一道光芒", "照亮了心灵上空"],
  "bgm": "雨の夜",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《醒来觉得甚是爱你》三则",
  "author": "作者：朱生豪",
  "content": ["醒来觉得甚是爱你。", "要是世上只有我们两个人多么好，我一定要把你欺负得哭不出来。", "我想要在茅亭里看雨、假山边看蚂蚁，看蝴蝶恋爱，看蜘蛛结网，看水，看船，看云，",
          "看瀑布，看宋清如甜甜地睡觉。"],
  "bgm": "Rafael Krux-Pond",
  "bgmSource": "https://freepd.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《微言》节选",
  "author": "作者：纪·哈·纪伯伦",
  "content": ["在我今日的悲伤里，", "最为苦涩的是我昨日欢乐的回忆。", "记忆是一种相聚的方式。", "忘却是一种自由的方式。", "除了黑暗之路，人不可能到达黎明。",
          "除非我的心碎了，否则它又怎能被开启？"],
  "bgm": "Kevin MacLeod-Bethlehem",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《花儿的眼泪》",
  "author": "作者：金子美玲",
  "content": ["谁都不要告诉", "好吗？", "清晨庭院角落里，", "花儿悄悄掉眼泪的事。", "万一这事说出去了，", "传到蜜蜂耳朵里，", "它会像做了亏心事一样，", "飞回去还蜂蜜的。"],
  "bgm": "Rafael Krux-Lovely Piano Song",
  "bgmSource": "https://freepd.com",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《于我，过去，现在以及未来》",
  "author": "作者：西格里夫·萨松",
  "content": ["于我，过去、现在和未来", "商讨聚会 各执一词 纷扰不息。", "林林总总的欲望，掠取着我的现在", "把“理性”扼杀于它的宝座", "我的爱情纷纷越过未来的藩篱",
          "梦想解放出它们的双脚 舞蹈不停", "于我，穴居人攫取了先知，", "佩戴花环的阿波罗神", "向亚伯拉罕的聋耳唱叹歌吟。", "心有猛虎，细嗅蔷薇。", "审视我的内心吧，亲爱的朋友，你应颤栗，",
          "因为那才是你本来的面目。"],
  "bgm": "Josh Woodward-Ships-NoVox",
  "bgmSource": "http：//joshwoodward.com/",
  "reporter": "右石先生"
}, {
  "title": "《一握砂》节选",
  "author": "作者：石川啄木",
  "content": ["假期的最后一天", "躺在沙滩上让潮水淹没", "等天亮了就爬起来上班", "路旁的狗打了个长长的哈欠", "我也学它的样子", "因为羡慕的缘故"],
  "bgm": "Kevin MacLeod-Gymnopedie No 1",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《沙与沫》节选",
  "author": "作者：纪·哈·纪伯伦",
  "content": ["你在白天的太阳前面是自由的，", "在黑夜的星辰前面也是自由的；", "在没有太阳，没有月亮，没有星辰的时候，", "你也是自由的。", "但是你是你所爱的人的奴隶，", "因为你爱了他。",
          "你也是爱你的人的奴隶，", "因为他爱了你。"],
  "bgm": "Kevin MacLeod-Gymnopedie No 2",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《你多么可爱》",
  "author": "亚历山大·谢尔盖耶维奇·普希金",
  "content": [" “你最可爱”，我说时来不及思索，", "而思索之后，还是这样说。", "我对她说: 你多么可爱! ，", "心里却在说: 我多么爱你!", "你尽可注视别人的脸，", "但请信任我这颗心。",
          "在你孤独、悲伤的日子，", "请你悄悄地念一念我的名字，", "并且说：有人在思念我，", "在世间我活在一个人的心里。"],
  "bgm": "Rafael Krux-Lovely Piano Song",
  "bgmSource": "https://freepd.com",
  "reporter": "四夕"
}, {
  "title": "《造一个草原》",
  "author": "作者：艾米莉·狄金森",
  "content": ["去造一个草原", "需要一株三叶草和一只蜜蜂，", "一株三叶草和一只蜜蜂，", "还有梦。", "如果蜜蜂不多，", "单靠梦也行。"],
  "bgm": "Kevin MacLeod-Midsummer Sky",
  "bgmSource": "https://incompetech.com",
  "reporter": "Nj宫袭"
}, {
  "title": "夏目漱石二则",
  "author": "作者：夏目漱石",
  "content": ["你不要说我喜欢你 你要说这夏夜的月色真美丽", "此刻烦躁的心情就像用十除以三得出的结果一样，无穷无尽"],
  "bgm": "Kevin MacLeod-Starry",
  "bgmSource": "https://incompetech.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《寂寞人心》",
  "author": "作者：徐志摩",
  "content": ["我的世界太过安静，", "静得可以听见自己心跳的声音。", "心房的血液慢慢流回心室，", "如此这般的轮回。", "聪明的人，喜欢猜心，", "也许猜对了别人的心，", "却也失去了自己的。",
          "傻气的人，喜欢给心，", "也许会被人骗，", "却未必能得到别人的。", "你以为我刀枪不入，", "我以为你百毒不侵。"],
  "bgm": "Rafael Krux-Nostalgic Piano",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《我曾七次鄙视自己的灵魂》",
  "author": "作者：纪·哈·纪伯伦",
  "content": ["曾有七次我鄙视了自己的灵魂：", "第一次，当它本可进取时，却故作谦卑", "第二次，当它在空虚时，用爱欲来填充", "第三次，在困难和容易之间，它选择了容易",
          "第四次，它犯了错，却借由别人也会犯错来宽慰自己", "第五次，它自由软弱，却把它认为是生命的坚韧", "第六次，当它鄙夷一张丑恶的嘴脸时，却不知那正是自己面具中的一副；",
          "第七次，它侧身于生活的污泥中，虽不甘心，却又畏首畏尾。"],
  "bgm": "Kevin MacLeod-Oh Holy Night",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《西江月·世事一场大梦》",
  "author": "作者：苏轼",
  "content": ["世事一场大梦，人生几度秋凉。", "夜来风叶已鸣廊。", "看取眉头鬓上。", "酒贱常愁客少，月明多被云妨。", "中秋谁与共孤光。", "把盏凄然北望。"],
  "bgm": "夏色叙情",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "四夕"
}, {
  "title": "《蒹葭》",
  "author": "作者：佚名",
  "content": ["蒹葭苍苍，白露为霜。所谓伊人，在水一方。溯洄从之，道阻且长。溯游从之，宛在水中央。", "蒹葭萋萋，白露未晞。所谓伊人，在水之湄。溯洄从之，道阻且跻。溯游从之，宛在水中坻。",
          "蒹葭采采，白露未已。所谓伊人，在水之涘。溯洄从之，道阻且右。溯游从之，宛在水中沚。"],
  "bgm": "nezame",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "四夕"
}, {
  "title": "《我是逃跑的那个》",
  "author": "作者：费尔南多·佩索阿",
  "content": ["我是逃跑的那个，", "我出生后", "他们把我锁在我里面", "可我跑了。", "我的灵魂寻找我，", "穿过山岗与山谷，", "我希望我的灵魂", "永远找不到我"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《越人歌》",
  "author": "作者：",
  "content": ["今夕何夕兮搴洲中流。", "今日何日兮得与王子同舟。", "蒙羞被好兮不訾诟耻。", "心几烦而不绝兮得知王子。", "山有木兮木有枝。", "心悦君兮君不知。"],
  "bgm": "桜雲",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《生命是我们拥有的一切》",
  "author": "作者：D.H. 劳伦斯",
  "content": ["活着时，生命是我们拥有的一切；", "如果你不在生命中活着，你是一坨粪。", "工作是生命，生命寓于工作，", "除非你是工资的奴隶。", "当工资的奴隶工作，他将生命搁置一旁，",
          "站在那里像一坨粪。", "人应该拒绝毫无生气地工作。", "人应该拒绝变为一堆堆赚工资的粪。", "人应该彻底拒绝作为工资的奴隶而工作。", "人应该要求为自己工作，做自己的工作，将生命投入其中。",
          "因为如果人的工作里没有生命，他基本上是一堆粪。"],
  "bgm": "アイリッシュの風",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "右石先生"
}, {
  "title": "《1927年春，帕斯捷尔纳克致茨维塔耶娃》",
  "author": "鲍利斯·列奥尼多维奇·帕斯捷尔纳克",
  "content": ["我们多么草率地成为了孤儿。 玛琳娜，", "这是我最后一次呼唤你的名字。", "大雪落在我锈迹斑斑的气管和肺叶上，", "说吧：今夜，我的嗓音是一列被截停的火车，",
          "你的名字是俄罗斯漫长的国境线。", "我想象我们的相遇，在一场隆重的死亡背面", "（玫瑰的矛盾贯穿了他硕大的心）；", "在一九二七年春夜，我们在国境线相遇", "因此错过了",
          "这个呼啸着奔向终点的世界。", "而今夜，你是舞曲，世界是错误。", "当新年的钟声敲响的时候，百合花盛放", "——他以他的死宣告了世纪的终结，", "而不是我们尴尬的生存。",
          "为什么我要对你们沉默？", "当华尔兹舞曲奏起的时候，我在谢幕。", "因为今夜，你是旋转，我是迷失。", "当你转换舞伴的时候，我将在世界的留言册上", "抹去我的名字。", "玛琳娜，国境线的舞会",
          "停止，大雪落向我们各自孤单的命运。", "我歌唱了这寒冷的春天，我歌唱了我们的废墟", "……然后我又将沉默不语。"],
  "bgm": "Rafael Krux-Nostalgic Piano",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《夏天》",
  "author": "作者：罗伯特.瓦尔泽",
  "content": ["在夏天，我们吃绿豆，", "桃，樱桃和甜瓜。", "在各种意义上都漫长且愉快", "日子发出声响。", "列车经过乡下，", "旗帜悦动在屋顶上。", "在船上多么惬意", "周围是渐长的水面。",
          "山顶上覆盖着雪，", "花散发香味。在湖上", "你可以花所有时间", "享受唱歌的乐趣。", "我不知道什么使我满足，", "你躺在草地上看书", "听到你的四周是", "无力的蚊蝇嗡嗡着。"],
  "bgm": "OneFineDay",
  "bgmSource": "https://audionautix.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《歌颂智慧之美》",
  "author": "作者：雪莱",
  "content": ["Thy light alone - like mist o'er the mountains driven，",
          "Or music by the night-wind sent through strings of some still instrument，",
          "Or moonlight on a midnight stream.", "唯有你的光辉 能像漫过山岭的薄雾", "像和风从静谧的世界琴弦里带来的夜曲", "像朗照溪水的月色"],
  "bgm": "Kevin MacLeod-Sapphire Isle",
  "bgmSource": "https://incompetech.com",
  "reporter": "汇文"
}, {
  "title": "《雨巷》",
  "author": "作者：戴望舒",
  "content": ["撑着油纸伞，独自", "彷徨在悠长、悠长", "又寂寥的雨巷", "我希望逢着", "一个丁香一样地", "结着愁怨的姑娘", "她是有", "丁香一样的颜色", "丁香一样的芬芳",
          "丁香一样的忧愁", "在雨中哀怨", "哀怨又彷徨", "她彷徨在这寂寥的雨巷", "撑着油纸伞", "像我一样", "像我一样地", "默默彳亍着", "冷漠、凄清，又惆怅", "她默默地走近",
          "走近，又投出", "太息一般的眼光", "她飘过", "像梦一般地", "像梦一般地凄婉迷茫", "像梦中飘过", "一枝丁香地", "我身旁飘过这女郎", "她静默地远了、远了", "到了颓圮的篱墙",
          "走尽这雨巷", "在雨的哀曲里", "消了她的颜色", "散了她的芬芳", "消散了，甚至她的", "太息般的眼光", "丁香般的惆怅", "撑着油纸伞，独自", "彷徨在悠长、悠长", "又寂寥的雨巷",
          "我希望飘过", "一个丁香一样地", "结着愁怨的姑娘"],
  "bgm": "Kevin MacLeod-Gymnopedie No 1",
  "bgmSource": "https://incompetech.com",
  "reporter": "四夕"
}, {
  "title": "《诗经·黍离》",
  "author": "作者：",
  "content": ["彼黍离离，彼稷之苗。行迈靡靡，中心摇摇。知我者，谓我心忧；不知我者，谓我何求。悠悠苍天，此何人哉？",
          "彼黍离离，彼稷之穗。行迈靡靡，中心如醉。知我者，谓我心忧；不知我者，谓我何求。悠悠苍天，此何人哉？",
          "彼黍离离，彼稷之实。行迈靡靡，中心如噎。知我者，谓我心忧；不知我者，谓我何求。悠悠苍天，此何人哉？"],
  "bgm": "omiwatari",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "四夕"
}, {
  "title": "《干草堆》",
  "author": "作者：奥西普·埃米尔耶维奇·曼德尔施塔姆",
  "content": ["我顺手搭起一架木梯", "爬上披散的干草棚顶，", "我在呼吸银河的碎屑，", "我在呼吸宇宙的病症。"],
  "bgm": "Kevin MacLeod-Starry",
  "bgmSource": "https://incompetech.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《心的歌》",
  "author": "作者：卡瓦菲斯",
  "content": ["有了你，我想，一切愉快的事物都朝我微笑，", "在你眼睛的镜子里反映着欢乐。", "留下来，我的光，所有那些只要你看我一眼", "便充满激情地荡漾在我心上、",
          "涌到我唇间的感觉，我还没有告诉你哪怕一半。", "如果你希望，你可以不跟我讲，", "也不要说些爱和倾慕的迷人话。", "这些已足够：有你在近旁，", "我可以告诉你我需要你，可以接触你，",
          "可以呼吸你呼吸的早晨的清新；", "而如果你觉得就连这些也是多余的，", "那么仅仅见到你也已足够！", "希望以后你看到的都是属于自己的幸福，", "努力着的是属于自己幸福的小事。",
          "珍惜着的是靠近你的心。", "而不是别人的。", "关于爱这件小事，", "要和别人一起发生。", "才能抵达那似乎遥不可及的爱的彼岸。"],
  "bgm": "Kevin MacLeod-Midsummer Sky",
  "bgmSource": "https://incompetech.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《云》",
  "author": "作者：金子美玲",
  "content": ["我想变成一朵云。", "又松又软", "飘在蓝天里", "从这头到那头", "看够了风景，", "晚上就跟月亮捉迷藏。", "玩腻了", "就变成雨。", "跟雷公", "结个伴，",
          "一起跳到", "人家的池塘里去。"],
  "bgm": "Rafael Krux-Pond",
  "bgmSource": "https://freepd.com",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《长久沉默后》",
  "author": "作者：威廉·巴特勒·叶芝",
  "content": ["长久沉默后开口：没错，", "别的情人都已疏远或死去，", "不友好的灯光用灯罩挡住，", "不友好的夜晚用窗帘挡住，", "我们谈啊谈啊", "反复谈论艺术和歌这最高主题：",
          "身体衰老智慧方开，年轻时", "我们曾相爱却浑然不知"],
  "bgm": "Josh Woodward-Autumn",
  "bgmSource": "http：//joshwoodward.com/",
  "reporter": "四夕"
}, {
  "title": "《吉檀迦利》节选",
  "author": "作者：泰戈尔",
  "content": ["Eyes are raining for her,", "heart is holding umbrella for her,", "this is love.", "眼睛为她下着雨，",
          "心却为她打着伞，", "这就是爱情。"],
  "bgm": "Kevin MacLeod-Sapphire Isle",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《一握砂》节选",
  "author": "作者：石川啄木",
  "content": ["挨了骂", "哇的一声就哭出来的儿童的心情；", "我也想要有那种心情。"],
  "bgm": "Rafael Krux-Nostalgic Piano",
  "bgmSource": "https://freepd.com",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《我想和你一起生活》",
  "author": "玛琳娜·伊万诺夫娜·茨维塔耶娃",
  "content": ["我想和你一起生活在某个小镇，", "共享无尽的黄昏和绵绵不绝的钟声。", "在这个小镇的旅店里——", "古老时钟敲出的微弱响声", "像时间轻轻滴落。",
          "有时候，在黄昏，自顶楼某个房间传来笛声，", "吹笛者倚著窗牖，", "而窗口大朵郁金香。", "此刻你若不爱我，我也不会在意。", "在房间中央，一个磁砖砌成的炉子", "每一块磁砖上画著一幅画",
          "一颗心，一艘帆船，一朵玫瑰", "而自我们唯一的窗户张望", "雪，雪，雪。", "你会躺成我喜欢的姿势", "慵懒，淡然，冷漠", "一两回点燃火柴的刺耳声", "香烟的火苗由旺转弱，",
          "烟的末梢颤抖著，颤抖著", "短小灰白的烟蒂", "连灰烬 你都懒得弹落", "香烟遂飞舞进火中"],
  "bgm": "Rafael Krux-Pond",
  "bgmSource": "https://freepd.com",
  "reporter": "汇文"
}, {
  "title": "《也是微云》",
  "author": "作者：胡适",
  "content": ["也是微云，", "也是微云过后月光明。", "只不见去年得游伴，", "也没有当日的心情。", "不愿勾起相思，", "不敢出门看月。", "偏偏月进窗来，", "害我相思一夜。"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "汇文"
}, {
  "title": "《西洲曲》",
  "author": "作者：",
  "content": ["忆梅下西洲，折梅寄江北。", "单衫杏子红，双鬓鸦雏色。", "西洲在何处？两桨桥头渡。", "日暮伯劳飞，风吹乌臼树。", "树下即门前，门中露翠钿。", "开门郎不至，出门采红莲。",
          "采莲南塘秋，莲花过人头。", "低头弄莲子，莲子清如水。", "置莲怀袖中，莲心彻底红。", "忆郎郎不至，仰首望飞鸿。", "鸿飞满西洲，望郎上青楼。", "楼高望不见，尽日栏杆头。",
          "栏杆十二曲，垂手明如玉。", "卷帘天自高，海水摇空绿。", "海水梦悠悠，君愁我亦愁。", "南风知我意，吹梦到西洲。"],
  "bgm": "桜雲",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《你不喜欢的每一天不是你的 》",
  "author": "作者：费尔南多·佩索阿",
  "content": ["你不喜欢的每一天不是你的", "你仅仅度过了它 无论你过着什么样的", "没有喜悦的生活，你都没有生活", "你无须去爱，或者去饮酒或者微笑", "阳光倒映在水坑里",
          "就足够了，如果它令你愉悦", "幸福的人，把他们的欢乐", "放在微小的事物里，永远也不会剥夺", "属于每一天的、天然的财富"],
  "bgm": "yuubenohoshi",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《诗经》节选",
  "author": "作者：佚名",
  "content": ["正月开岁", "二月绀香", "三月桃良", "四月秀蔓", "五月鸣蜩", "六月精阳", "七月流火", "八月未央", "九月授衣", "十月获稻", "葭月潜龙", "腊月嘉年"],
  "bgm": "古里の風",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《亚当的诅咒》",
  "author": "作者：威廉·巴特勒·叶芝",
  "content": ["有你闺中密友，还有你和我，", "她温柔而美丽，我们在谈诗。", "我说：“一行诗有时要几个小时；", "但若显得不像是即席之作，", "我们的推敲就算是白忙活。", "还不如弓着脊背趴在地面，",
          "去擦厨房地板，或像穷光蛋", "无论刮风下雨都忙着采石；", "要把美的声音组织在一起，", "真比上面的活儿都辛苦，但", "一帮人却吵吵说你是懒汉，", "银行家、教师还有神职人员，",
          "殉道者所谓的世人。”", "***************话刚完，", "那温柔美丽的女人接着说，", "许多人若发现她声音这么", "甜美而柔和，心儿就会狂跳，", "她回答我：“生为女人都知道――",
          "尽管在学校里没人这么说――", "要想美丽我们就得勤劳作。”", "我说：“我断言自从亚当堕落，", "再没有好东西不需勤劳作。", "恋人们曾经认为爱情应当", "充满着高贵殷勤礼仪有方，",
          "他们就长吁短叹引经据典，", "如饱学之士举出先例万千；", "如今这事似乎可算够偷懒。”", "说到了爱情我们沉寂一片；", "白日余烬在我们眼前燃完，", "在那摇曳着蓝绿色的天边，",
          "有一弯残月，消磨得如贝壳", "被时间之水冲刷，当它起落", "群星之间、升降在日日年年。", "我有一个心思只想对你言，", "我想说你很美丽，我也竭力", "用古老而高贵的方式爱过你；",
          "这看起来皆大欢喜，但我们", "内心疲惫却似那中空一轮。"],
  "bgm": "Josh Woodward-Autumn",
  "bgmSource": "http://joshwoodward.com/",
  "reporter": "右石先生"
}, {
  "title": "尼采五则",
  "author": "作者：尼采",
  "content": ["每一个不曾起舞的日子，都是对生命的辜负。", "其实人跟树是一样的，越是向往高处的阳光，它的根就越要伸向黑暗的地底。", "一个人知道自己为什么而活，就可以忍受任何一种生活。",
          "但凡不能杀死你的，最终都会使你更强大。", "当你凝视深渊时，深渊也在凝视着你。"],
  "bgm": "Kevin MacLeod-Bethlehem",
  "bgmSource": "https://incompetech.com",
  "reporter": "四夕"
}, {
  "title": "民国结婚证书誓词",
  "author": "作者：佚名",
  "content": ["两姓联姻，一堂缔约，", "良缘永结，匹配同称。", "看此日桃花灼灼，宜室宜家，", "卜他年瓜瓞绵绵，尔昌尔炽。", "谨以白头之约，书向鸿笺，", "好将红叶之盟，载明鸳谱。", "此证。"],
  "bgm": "古里の風",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "汇文"
}, {
  "title": "《无常》",
  "author": "作者：雪莱",
  "content": ["Whilst skies are blue and bright", "Whilst flowers are gay", "Whilst eyes that change ere night",
          "Make glad the day", "Whilst yet the calm hours creep", "Dream thou-and from thy sleep",
          "Then wake to weep", "趁天空还明媚，蔚蓝", "趁着花朵鲜艳", "趁眼睛看来一切美好", "趁夜幕还没降临", "呵 趁现在时流还平静", "做你的梦吧 且憩息", "等醒来再哭泣"],
  "bgm": "Rafael Krux-Nostalgic Piano",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《我曾经爱过你》",
  "author": "作者：亚历山大·谢尔盖耶维奇·普希金",
  "content": ["我曾经爱过你：爱情，也许", "在我的心灵里还没有完全消亡，", "但愿它不会再去打扰你，", "我也不想再让你难过悲伤。", "我曾经默默无语地、毫无指望地爱过你，",
          "我既忍受着羞怯，又忍受着嫉妒的折磨，", "我曾经那样真诚、那样温柔地爱过你，", "但愿上帝保佑你，", "另一个人也会像我一样地爱你"],
  "bgm": "Josh Woodward-Ships-NoVox",
  "bgmSource": "http：//joshwoodward.com/",
  "reporter": "汇文"
}, {
  "title": "《惶然录》节选",
  "author": "作者：费尔南多·佩索阿",
  "content": [],
  "bgm": "Rafael Krux-Pond",
  "bgmSource": "https://freepd.com",
  "reporter": "Nj羽凡"
}, {
  "title": "《周南·关雎》",
  "author": "作者：",
  "content": ["关关雎鸠，在河之洲。窈窕淑女，君子好逑。", "参差荇菜，左右流之。窈窕淑女，寤寐求之。", "求之不得，寤寐思服。悠哉悠哉，辗转反侧。", "参差荇菜，左右采之。窈窕淑女，琴瑟友之。",
          "参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。"],
  "bgm": "弥生の空に",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "四夕"
}, {
  "title": "《一剪梅·舟过吴江》",
  "author": "作者：蒋捷",
  "content": ["一片春愁待酒浇。江上舟摇。楼上帘招。秋娘度与泰娘娇。风又飘飘。雨又萧萧。", "何日归家洗客袍。银字笙调。心字香烧。流光容易把人抛。红了樱桃。绿了芭蕉。"],
  "bgm": "風紋",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《飞鸟集》节选",
  "author": "作者：泰戈尔",
  "content": ["The water in a vessel is sparkling;", "the water in the sea is dark.",
          "The small truth has words that are clear;", "the great truth has great silence.", "一杯水是清澈的，",
          "而海水却是黑色的。", "就像小的道理可以说明，", "真正的大道理却是沉默的。"],
  "bgm": "Kevin MacLeod-Bethlehem",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《鹊桥仙·纤云弄巧》",
  "author": "作者：秦观",
  "content": ["纤云弄巧，飞星传恨，银汉迢迢暗度。金风玉露一相逢，便胜却人间无数。", "柔情似水，佳期如梦，忍顾鹊桥归路？两情若是久长时，又岂在朝朝暮暮。"],
  "bgm": "kamunabi",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "《你是人间四月天》",
  "author": "作者：林徽因",
  "content": ["我说你是人间的四月天；", "笑响点亮了四面风；", "轻灵在春的光艳中交舞着变。", "你是四月早天里的云烟，", "黄昏吹着风的软，", "星子在无意中闪，", "细雨点洒在花前。",
          "那轻，那娉婷，你是，", "鲜妍百花的冠冕你戴着，", "你是天真，庄严，", "你是夜夜的月圆。", "雪化后那片鹅黄，你像；", "新鲜初放芽的绿，你是；", "柔嫩喜悦，",
          "水光浮动着你梦期待中白莲。", "你是一树一树的花开，", "是燕在梁间呢喃，", "——你是爱，是暖，是希望，", "你是人间的四月天！"],
  "bgm": "Rafael Krux-Pond",
  "bgmSource": "https://freepd.com",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《未选择的路》",
  "author": "作者：罗伯特·弗罗斯特",
  "content": ["黄树林里分出两条路，", "可惜我不能同时涉足，", "我在那路口久久伫立，", "我向着一条路极目望去，", "直到它消失在丛林深处。", "但我却选择了另外一条路，",
          "它荒草萋萋，十分幽寂，", "显得更诱人，更美丽；", "虽然在这条小路上，", "很少留下旅人的足迹。", "那天清晨落叶满地，", "两条路都未经脚印污染。", "啊，留下一条路等改日再见!",
          "但我知道路径延绵无尽头,", "恐怕我难以再回返。", "也许多少年后在某个地方，", "我将轻声叹息将往事回顾：", "一片树林里分出两条路，", "而我选择了人迹更少的一条，",
          "从此决定了我一生的道路。"],
  "bgm": "OnWaldenPond",
  "bgmSource": "https://audionautix.com/",
  "reporter": "右石先生"
}, {
  "title": "《红豆》",
  "author": "作者：闻一多",
  "content": ["相思是不做声的蚊子", "偷偷地咬了一口", "陡然痛了一下", "以后便是一阵的奇痒"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "四夕"
}, {
  "title": "《南歌子词二首 / 新添声杨柳枝词》",
  "author": "作者：温庭筠",
  "content": ["一尺深红胜曲尘，天生旧物不如新。", "合欢桃核终堪恨，里许元来别有人。", "井底点灯深烛伊，共郎长行莫围棋。", "玲珑骰子安红豆，入骨相思知不知。"],
  "bgm": "nezame",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "《像这样细细地听》",
  "author": "玛琳娜·伊万诺夫娜·茨维塔耶娃",
  "content": ["像这样细细地听", "像这样细细地听，", "如河口凝神倾听自己的源头。", "像这样深深地嗅一朵小花，", "直到知觉化为乌有。", "像这样，在蔚蓝的空气里", "溶进了无底的渴望。",
          "像这样，在床单的蔚蓝里", "孩子遥望记忆的远方。", "像这样．莲花般的少年", "默默体验血的温泉", "就像这样，与爱情相恋", "就像这样，落入深渊。"],
  "bgm": "GreenLeaves",
  "bgmSource": "https://audionautix.com/",
  "reporter": "汇文"
}, {
  "title": "《飞鸟集》节选",
  "author": "作者：泰戈尔",
  "content": ["After the night I burned all memory,", "my dream becomes transparent,",
          "as I trashed all yesterdays,", "my step becomes lighter.", "有一个夜晚我烧毁了所有的记忆，", "从此我的梦就透明了；",
          "有一个早晨我扔掉了所有的昨天，", "从此我的脚步就轻盈了。"],
  "bgm": "SundaysChild",
  "bgmSource": "https://audionautix.com/",
  "reporter": "右石先生"
}, {
  "title": "《铜官窑瓷器题诗二十一首》",
  "author": "作者：佚名",
  "content": ["君生我未生,我生君已老。", "君恨我生迟,我恨君生早。", "君生我未生,我生君已老。", "恨不生同时,日日与君好。", "我生君未生,君生我已老。", "我离君天涯,君隔我海角。",
          "我生君未生,君生我已老。", "化蝶去寻花,夜夜栖芳草。"],
  "bgm": "風紋",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "王尔德四则",
  "author": "作者：王尔德",
  "content": ["We are all in the gutter, but some of us are looking at the stars.", "我们都在阴沟里，但仍有人仰望星空。",
          "When I was young, I thought money was everything. Now I'm old enough to know that it is true.",
          "年轻时我以为钱就是一切，现在老了才知道确实如此。", "Be yourself, everyone else is already taken.", "做你自己，因为别人都有人做了。",
          "To love oneself is the beginning of a lifelong romance.", "爱自己是终身浪漫的开始。"],
  "bgm": "Kevin MacLeod-Bethlehem",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "歌德三则",
  "author": "作者：歌德",
  "content": ["If who is the game of life，", "he accomplishes nothing；", "Who cannot control himself，",
          "he is always a slave。", "谁若游戏人生，他就一事无成；谁不能主宰自己，便永远是一个奴隶。",
          "If I love you, what business is it of yours?", "我爱你，与你无关。",
          "\"Do you know why you close your eyes when you kiss?\"",
          "\"because they shine too much on each other.\"", "“知道为什么亲吻的时候要闭着双眼吗？”", "“因为他们彼此都太闪耀。”"],
  "bgm": "Kevin MacLeod-Oh Holy Night",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《梦与诗》",
  "author": "作者：胡适",
  "content": ["都是平常经验，", "都是平常影象，", "偶然涌到梦中来，", "变幻出多少新奇花样!", "都是平常情感，", "都是平常言语，", "偶然碰着个诗人，", "变幻出多少新奇诗句!",
          "醉过才知酒浓，", "爱过才知情重——", "你不能做我的诗，", "正如我不能做你的梦。"],
  "bgm": "Kevin MacLeod-Sapphire Isle",
  "bgmSource": "https://incompetech.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《向着明亮那方》",
  "author": "作者：金子美玲",
  "content": ["向着明亮那方。", "向着明亮那方。", "哪怕一片叶子", "也要向着日光洒下的方向。", "灌木丛中的小草啊。", "向着明亮那方", "向着明亮那方。", "哪怕烧焦了翅膀",
          "也要飞向灯火闪烁的方向。", "寒夜里的飞虫啊。", "向着明亮那方", "向着明亮那方。", "哪怕只是分寸的宽敞", "也要向着阳光照射的方向。", "住在都会的孩子们啊。"],
  "bgm": "SundaysChild",
  "bgmSource": "https://audionautix.com/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《补偿》",
  "author": "作者：艾米莉·狄金森",
  "content": ["为每一个狂喜的瞬间", "我们必须偿以痛苦至极", "刺痛和颤抖，和狂喜成正比", "为每一个可爱的时刻", "必偿以多年的付出", "辛酸争夺的半分八厘", "和浸满泪水的钱箱", "作者：艾米莉·狄金森"],
  "bgm": "Kevin MacLeod-Oh Holy Night",
  "bgmSource": "https://incompetech.com",
  "reporter": "汇文"
}, {
  "title": "《清平调》",
  "author": "作者：李白",
  "content": ["云想衣裳花想容， 春风拂槛露华浓。", "若非群玉山头见， 会向瑶台月下逢。", "一枝红艳露凝香， 云雨巫山枉断肠。", "借问汉宫谁得似？ 可怜飞燕倚新妆。",
          "名花倾国两相欢， 长得君王带笑看。", "解释春风无限恨， 沉香亭北倚阑干。"],
  "bgm": "kamunabi",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "《当你老了》",
  "author": "作者：威廉·巴特勒·叶芝",
  "content": ["当你老了，头白了，睡意昏沉，", "炉火旁打盹，请取下这部诗歌，", "慢慢读，回想你过去眼神的柔和，", "回想它们昔日浓重的阴影；", "多少人爱你青春欢畅的时辰，",
          "爱慕你的美丽，假意或真心，", "只有一个人爱你那朝圣者的灵魂，", "爱你衰老了的脸上痛苦的皱纹；", "垂下头来，在红光闪耀的炉子旁，", "凄然地轻轻诉说那爱情的消逝，",
          "在头顶的山上它缓缓踱着步子，", "在一群星星中间隐藏着脸庞。"],
  "bgm": "Josh Woodward-Autumn",
  "bgmSource": "http：//joshwoodward.com/",
  "reporter": "汇文"
}, {
  "title": "《记得旧时好》",
  "author": "作者：陈白沙",
  "content": ["记得旧时好，跟随阿娘去吃茶。", "门前磨螺壳，巷口弄泥沙。", "而今人长大，心事乱如麻。", "记得旧时遥，喜看阿婆纺线纱。", "瓦凹泡新茧，院内惹雏鸭。", "而今人长大，心绪淡若茶。",
            "记得旧时小，爱卷丫小衣襟角。", "檐底蹲蚁巢，树上共攀枣。", "而今人长大，心情恍比潮。", "记得旧时淘，总嫌先生讲乖巧。", "车马混鱼龙，睁眼乐妖娆。",
            "而今人长大，心思飘成草。", "记得旧时闹，偏要哥哥教捉虾。", "墙角挖青苔，梢头斗知了。", "而今人长大，心湖荡起潮。"],
  "bgm": "懐かしい風情",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《人月圆·山中书事》",
  "author": "作者：张可久",
  "content": ["兴亡千古繁华梦，诗眼倦天涯。", "孔林乔木，吴宫蔓草，楚庙寒鸦。", "数间茅舍，藏书万卷，投老村家。", "山中何事？松花酿酒，春水煎茶。"],
  "bgm": "nezame",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "《将进酒·君不见》",
  "author": "作者：李白",
  "content": ["君不见，黄河之水天上来，奔流到海不复回。", "君不见，高堂明镜悲白发，朝如青丝暮成雪。", "人生得意须尽欢，莫使金樽空对月。", "天生我材必有用，千金散尽还复来。",
          "烹羊宰牛且为乐，会须一饮三百杯。", "岑夫子，丹丘生，将进酒，杯莫停。", "与君歌一曲，请君为我倾耳听。", "钟鼓馔玉不足贵，但愿长醉不复醒。", "古来圣贤皆寂寞，惟有饮者留其名。",
          "陈王昔时宴平乐，斗酒十千恣欢谑。", "主人何为言少钱，径须沽取对君酌。", "五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。"],
  "bgm": "omiwatari",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "四夕"
}, {
  "title": "《我的书本去的地方》",
  "author": "作者：威廉·巴特勒·叶芝",
  "content": ["我所学到的所有语言，", "我所写出的所有语言，", "必然要展翅，不倦的飞翔，", "绝不会在飞行中停一停。", "一直飞到你悲伤的心所在的地方，", "在夜色中向着你歌唱，",
          "远方，河水正在流淌，", "乌云密布，或是星光灿烂。"],
  "bgm": "Rafael Krux-Pond",
  "bgmSource": "https://freepd.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《周南·桃夭》",
  "author": "作者：佚名",
  "content": ["桃之夭夭，灼灼其华。之子于归，宜其室家。", "桃之夭夭，有蕡其实。之子于归，宜其家室。", "桃之夭夭，其叶蓁蓁。之子于归，宜其家人。"],
  "bgm": "nezame",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《惶然录》节选",
  "author": "作者：费尔南多·佩索阿",
  "content": ["像一支没有完成的琴弓，", "灵魂从来不能存在于它的自身。", "伟大的景观统统属于我们已经亲历过的一个明天。", "而永不间断的交谈已经是一个失败。", "谁曾猜出生活就像这个样子？",
          "我找到自己之日，就是失落自己之时。", "如果我相信，我就必然怀疑。", "我紧紧抓住一些东西的时候，我的手里必定空无一物。", "我去睡觉就如我正在出去散步。", "生活毕竟是一次伟大的失眠，",
          "我们做过或想过的一切，都处在清澈的半醒状态之中。", "如果我能够入睡，我会快乐。", "至少我现在思考的时候我就睡不成。", "夜晚是一个巨大的重压，", "压得我在寂静的覆盖之下的梦里自我窒息。",
          "我有一种灵魂的反胃症。"],
  "bgm": "Kevin MacLeod-Bethlehem",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《失窃的孩子》",
  "author": "作者：威廉·巴特勒·叶芝",
  "content": ["走吧", "人间的孩子", "走向那荒野和河流", "与一个精灵手牵手", "因为这个世界的悲伤太深了 而你不能懂"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "汇文"
}, {
  "title": "《爱》",
  "author": "作者：托马斯.布朗",
  "content": ["我爱你，不是因为你是一个怎样的人，", "而是因为我喜欢与你在一起时的感觉。", "没有人值得你流泪，", "值得让你这么做的人不会让你哭泣。", "失去某人，最糟糕的莫过于，",
          "他近在身旁，却犹如远在天边。", "纵然伤心，也不要悉眉不展，", "因为你不知是谁会爱上你的笑容。", "对于世界而言，你是一个人；", "但是对于某人，你是他的整个世界。",
          "不要为那些不愿在你身上花费时间的人而浪费你的时间。", "爱你的人如果没有按你所希望的方式爱你，", "那并不代表他们没有全心全意地爱你。", "不要着急，最好的总会在最不经意的时候出现。",
          "在遇到梦中人之前，上天也许会安排我们先遇到别人；", "在我们终于遇见心仪的人时，便应当心存感激。", "不要因为结束而哭泣，微笑吧，为你的曾经拥有。", "“生命是束纯净的火焰，",
          "我们依靠自己内心看不见的太阳而存在。”"],
  "bgm": "Rafael Krux-Lovely Piano Song",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《季候》",
  "author": "作者：邵洵美",
  "content": ["初见你时你给我你的心，", "里面是一个春天的早晨。", "再见你时你给我你的话，", "说不出的是炽烈的火夏。", "三次见你你给我你的手，", "里面藏着个叶落的深秋。",
          "最后见你是我做的短梦，", "梦里有你还有一群冬风。"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《烦忧》",
  "author": "作者：戴望舒",
  "content": ["说是寂寞的秋的清愁，", "说是辽远的海的相思。", "假如有人问我的烦忧，", "我不敢说出你的名字。", "我不敢说出你的名字，", "假如有人问我的烦忧：", "说是辽远的海的相思，",
          "说是寂寞的秋的清愁。"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "四夕"
}, {
  "title": "《凤求凰》",
  "author": "作者：司马相如",
  "content": ["有美人兮，见之不忘，一日不见兮，思之如狂。", "凤飞遨翔兮，四海求凰，无奈佳人兮，不在东墙。", "将琴代语兮，聊写衷肠，愿言配德兮，携手相将。",
          "何时见许兮，慰我旁徨，不得于飞兮，使我沦亡，使我沦亡。"],
  "bgm": "今昔ノ絆",
  "bgmSource": "http://www.rengoku-teien.com/",
  "reporter": "四夕"
}, {
  "title": "《折桂令·春情》",
  "author": "作者：徐再思",
  "content": ["平生不会相思，才会相思，便害相思。", "身似浮云，心如飞絮，", "气若游丝，空一缕馀香在此，", "盼千金游子何之。", "证候来时，正是何时？", "灯半昏时，月半明时。"],
  "bgm": "nezame",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《飞鸟集》节选",
  "author": "作者：泰戈尔",
  "content": ["我的心是旷野和鸟", "已经在你的眼睛里找到了天空", "你的眼睛是早上的摇篮", "你的眼睛是繁星的王国", "我的歌声消失在你眼睛的深处", "就让我翱翔在那一片天空里吧",
          "就让我翱翔在那一片孤寂无垠的天空里", "就让我排开它朵朵的云彩", "在它的阳光里展翅飞翔"],
  "bgm": "Rafael Krux-Lovely Piano Song",
  "bgmSource": "https://freepd.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《双城记》节选",
  "author": "作者：狄更斯",
  "content": ["这是一个最好的时代，这是一个最坏的时代；", "这是一个智慧的年代，这是一个愚蠢的年代；", "这是一个信仰的时期，这是一个怀疑的时期；", "这是一个光明的季节，这是一个黑暗的季节；",
          "这是希望之春，这是失望之冬；", "人们面前应有尽有，人们面前一无所有；", "人们正踏上天堂之路，人们正走向地狱之门。"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "四夕"
}, {
  "title": "《临江仙·送钱穆父》",
  "author": "作者：苏轼",
  "content": ["一别都门三改火，", "天涯踏尽红尘。", "依然一笑作春温。", "无波真古井，有节是秋筠。", "惆怅孤帆连夜发，", "送行淡月微云。", "尊前不用翠眉颦。",
          "人生如逆旅，我亦是行人。"],
  "bgm": "恋獄の彩",
  "bgmSource": "http://www.rengoku-teien.com/",
  "reporter": "四夕"
}, {
  "title": "《浣溪沙·细雨斜风作晓寒》",
  "author": "作者：苏轼",
  "content": ["细雨斜风作晓寒，", "淡烟疏柳媚晴滩。", "入淮清洛渐漫漫。", "雪沫乳花浮午盏，", "蓼茸蒿笋试春盘。", "人间有味是清欢。"],
  "bgm": "今昔ノ絆",
  "bgmSource": "http://www.rengoku-teien.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《题龙阳县青草湖》",
  "author": "作者：唐珙",
  "content": ["西风吹老洞庭波，", "一夜湘君白发多。", "醉后不知天在水，", "满船清梦压星河。"],
  "bgm": "hyoutouka",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine//hakuu_amabine/",
  "reporter": "四夕"
}, {
  "title": "《长相思·九月西风兴》",
  "author": "作者：白居易",
  "content": ["九月西风兴，月冷露华凝。", "思君秋夜长，一夜魂九升。", "二月东风来，草拆花心开。", "思君春日迟，一日肠九回。", "妾住洛桥北，君住洛桥南。", "十五即相识，今年二十三。",
          "有如女萝草，生在松之侧。", "蔓短枝苦高，萦回上不得。", "人言人有愿，愿至天必成。", "愿作远方兽，步步比肩行。", "愿作深山木，枝枝连理生。"],
  "bgm": "hyoutouka",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "《颂古五十五首其一》",
  "author": "作者：无门慧开禅师",
  "content": ["春有百花秋有月，", "夏有凉风冬有雪。", "若无闲事挂心头，", "便是一年好时节。"],
  "bgm": "懐かしい風情",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "四夕"
}, {
  "title": "《简卢陟》",
  "author": "作者：韦应物",
  "content": ["可怜白雪曲，未遇知音人。", "恓惶戎旅下，蹉跎淮海滨。", "涧树含朝雨，山鸟哢馀春。", "我有一瓢酒，可以慰风尘。"],
  "bgm": "hyoutouka",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "四夕"
}, {
  "title": "《汴河阻冻》",
  "author": "作者：杜牧",
  "content": ["千里长河初冻时，", "玉珂瑶佩响参差。", "浮生恰似冰底水，", "日夜东流人不知。"],
  "bgm": "恋獄の彩",
  "bgmSource": "http://www.rengoku-teien.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《长命女·春日宴》",
  "author": "作者：冯延己",
  "content": ["春日宴，", "绿酒一杯歌一遍。", "再拜陈三愿：", "一愿郎君千岁，", "二愿妾身常健，", "三愿如同梁上燕，岁岁长相见。"],
  "bgm": "懐かしい風情",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《先秦·卿云歌》",
  "author": "作者：佚名",
  "content": ["卿云烂兮，糺缦缦兮。", "日月光华，旦复旦兮。", "明明上天，烂然星陈。", "日月光华，弘于一人。", "日月有常，星辰有行。", "四时从经，万姓允诚。", "于予论乐，配天之灵。",
          "迁于圣贤，莫不咸听。", "鼚乎鼓之，轩乎舞之。", "菁华已竭，褰裳去之。"],
  "bgm": "弥生の空に",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "汇文"
}, {
  "title": "《蝶恋花·阅尽天涯离别苦》",
  "author": "作者：王国维",
  "content": ["阅尽天涯离别苦，", "不道归来，零落花如许。", "不道归来，零落花如许。", "花底相看无一语，", "绿窗春与天俱莫。", "待把相思灯下诉，", "一缕新欢，旧恨千千缕。",
          "最是人间留不住，", "朱颜辞镜花辞树。"],
  "bgm": "恋獄の彩",
  "bgmSource": "http://www.rengoku-teien.com/",
  "reporter": "右石先生"
}]
