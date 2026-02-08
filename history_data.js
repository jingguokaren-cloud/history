// 郭正中专属历史复习网页 - 知识点数据（挖空版）
// 可扩展架构：教材 → 单元 → 知识点
// type: 'objective' = 客观题, 'subjective' = 主观题
// blanks: 数组，存放需要挖空的答案关键词

const historyData = {
  // 教材信息
  textbooks: [
    { id: 'world_history_2', name: '中外历史纲要（下）', status: 'active' },
    { id: 'world_history_1', name: '中外历史纲要（上）', status: 'coming' },
    { id: 'elective_1', name: '选择性必修1', status: 'coming' },
    { id: 'elective_2', name: '选择性必修2', status: 'coming' },
    { id: 'elective_3', name: '选择性必修3', status: 'coming' }
  ],

  // 中外历史纲要（下）
  world_history_2: {
    name: '中外历史纲要（下）',
    units: [
      {
        id: 1,
        name: '第一单元 古代文明的产生与发展',
        cards: [
          {
            id: 1,
            type: 'objective',
            question: '人类文明产生的标志是{{阶级}}的产生、{{国家}}的形成、{{文字}}的发明和{{城市}}的出现。',
            blanks: ['阶级', '国家', '文字', '城市'],
            answer: '文明产生的标志包括：<br>① <strong>阶级</strong>的产生<br>② <strong>国家</strong>的形成<br>③ <strong>文字</strong>的发明<br>④ <strong>城市</strong>的出现<br><br>💡 <strong>口诀</strong>：「阶国文城四标志，文明诞生记心里」'
          },
          {
            id: 2,
            type: 'objective',
            question: '两河流域文明的代表性成就是{{楔形文字}}、《{{汉谟拉比法典}}》、{{60进制}}和太阴历。',
            blanks: ['楔形文字', '汉谟拉比法典', '60进制'],
            answer: '<strong>两河流域主要成就</strong>：<br>① <strong>楔形文字</strong>（最早的文字之一）<br>② 《<strong>汉谟拉比法典</strong>》（现存最早的成文法典）<br>③ <strong>60进制</strong>（用于计时）<br>④ 太阴历',
            source: '📜 <strong>《汉谟拉比法典》原文节选</strong>：<br>"倘自由民毁损他人之目，则毁其目；倘折断他人之骨，则折其骨。"<br>——体现"以眼还眼，以牙还牙"的同态复仇原则',
            memory: '🔗 <strong>联想记忆</strong>：<br>两河 → 两个"6"→ 60进制<br>汉谟拉比 → "汉子很霸气" → 严厉的法典'
          },
          {
            id: 3,
            type: 'objective',
            question: '古埃及文明产生于{{尼罗河}}流域，主要成就有{{象形文字}}、{{金字塔}}和太阳历。',
            blanks: ['尼罗河', '象形文字', '金字塔'],
            answer: '<strong>古埃及文明</strong>：<br>• 地理位置：<strong>尼罗河</strong>流域（东北非）<br>• <strong>象形文字</strong><br>• <strong>金字塔</strong>（法老陵墓）<br>• 太阳历（一年365天）<br>• 木乃伊制作技术',
            source: '📜 <strong>古希腊历史学家希罗多德</strong>：<br>"埃及是尼罗河的赠礼。"<br>——说明尼罗河定期泛滥为农业提供肥沃土地',
            memory: '📅 <strong>时间线记忆</strong>：<br>约公元前3100年 → 上下埃及统一<br>约公元前2600年 → 金字塔建造高峰<br><br>🎵 <strong>口诀</strong>：「尼罗河畔金字塔，象形文字刻神话」'
          },
          {
            id: 4,
            type: 'subjective',
            question: '古印度文明的{{种姓制度}}将社会分为哪四个等级？佛教诞生于什么时期？',
            blanks: ['种姓制度'],
            answer: '<strong>种姓制度四等级</strong>：<br>① <strong>婆罗门</strong>（祭司）<br>② <strong>刹帝利</strong>（武士/贵族）<br>③ <strong>吠舍</strong>（商人/农民）<br>④ <strong>首陀罗</strong>（劳动者）<br><br>佛教诞生于<strong>公元前6世纪</strong>',
            source: '📜 <strong>《摩奴法典》关于种姓</strong>：<br>"婆罗门是世界之主，首陀罗只能为其他种姓服务。"<br>——体现严格的等级制度',
            memory: '🎵 <strong>口诀记忆种姓等级</strong>：<br>「婆刹吠首四等分，祭司武士商农分」<br><br>🔗 <strong>联想</strong>：阿拉伯数字 → 其实是印度人发明 → 通过阿拉伯传到欧洲'
          },
          {
            id: 5,
            type: 'subjective',
            question: '古希腊城邦有什么特点？雅典和斯巴达分别实行什么政治制度？',
            blanks: [],
            answer: '<strong>城邦特点</strong>：<br>① <strong>小国寡民</strong>（面积小、人口少）<br>② <strong>独立自治</strong>（各城邦政治独立）<br>③ <strong>公民政治</strong>（公民参与城邦管理）<br><br><strong>典型城邦</strong>：<br>• <strong>雅典</strong> → 民主政治<br>• <strong>斯巴达</strong> → 军事寡头',
            source: '📜 <strong>亚里士多德《政治学》</strong>：<br>"人是天生的政治动物。"<br>"城邦是至高而广涵的社会团体。"',
            memory: '🗺️ <strong>思维导图</strong>：<br>希腊地形（多山多岛）→ 交通不便 → 形成分散城邦 → 各自发展特色政治<br><br>🔗 <strong>对比记忆</strong>：雅典（文）vs 斯巴达（武）'
          },
          {
            id: 6,
            type: 'subjective',
            question: '雅典民主政治经历了哪三次重要改革？分别由谁主导？',
            blanks: [],
            answer: '<strong>三大改革</strong>：<br><br>① <strong>梭伦改革</strong>（前594年）：奠定基础<br>→ 废除债务奴隶制，按财产划分等级<br><br>② <strong>克里斯提尼改革</strong>（前509年）：确立民主制<br>→ 十部落制，五百人议事会，陶片放逐法<br><br>③ <strong>伯里克利时代</strong>（前5世纪）：民主政治顶峰<br>→ 公民直接参政，发放津贴',
            source: '📜 <strong>伯里克利国殇演说</strong>（修昔底德记载）：<br>"我们的制度之所以被称为民主制度，是因为政权在全体公民手中，而不是在少数人手中。"',
            memory: '📅 <strong>时间线</strong>：<br>梭伦(前594) → 克里斯提尼(前509) → 伯里克利(前5世纪)<br><br>🎵 <strong>口诀</strong>：「梭伦奠基克确立，伯里克利达顶峰」'
          },
          {
            id: 7,
            type: 'subjective',
            question: '雅典民主政治有哪些特点和局限？',
            blanks: [],
            answer: '<strong>特点</strong>：<br>① 人民主权（公民大会最高权力）<br>② 轮番而治（抽签选举）<br>③ 法律至上<br>④ 公民平等<br><br><strong>局限</strong>：<br>① 仅限<strong>成年男性公民</strong>（排斥妇女、奴隶、外邦人）<br>② 直接民主易导致多数暴政<br>③ 抽签选举可能选出能力不足者',
            source: '📜 <strong>苏格拉底之死</strong>（前399年）：<br>雅典民主法庭以"腐蚀青年思想"罪名判处苏格拉底死刑<br>→ 说明直接民主可能导致多数人暴政',
            memory: '🔗 <strong>对比现代民主</strong>：<br>雅典（直接民主）→ 公民亲自表决<br>现代（代议制民主）→ 选举代表<br><br>⚠️ 注意：课本强调"雅典民主是少数人的民主"'
          },
          {
            id: 8,
            type: 'subjective',
            question: '古罗马政治制度经历了哪三个发展阶段？重要的法律文献是什么？',
            blanks: [],
            answer: '<strong>三个阶段</strong>：<br><br>① <strong>王政时代</strong>（前753-前509年）→ 国王统治<br><br>② <strong>共和国时代</strong>（前509-前27年）<br>→ 执政官、元老院、公民大会<br>→ 《<strong>十二铜表法</strong>》（前450年，第一部成文法）<br><br>③ <strong>帝国时代</strong>（前27年-476年）<br>→ 屋大维建立元首制<br>→ 476年西罗马灭亡',
            source: '📜 <strong>《十二铜表法》意义</strong>：<br>罗马第一部成文法典，使量刑有法可依，限制了贵族对法律的任意解释<br><br>📜 西塞罗："《十二铜表法》是罗马法律的源头。"',
            memory: '📅 <strong>时间线口诀</strong>：<br>「753建罗马，509共和立，前27帝国始，476西罗亡」'
          },
          {
            id: 9,
            type: 'subjective',
            question: '罗马法的发展经历了哪几个阶段？其核心原则是什么？',
            blanks: [],
            answer: '<strong>发展历程</strong>：<br>① 《十二铜表法》→ 成文法开端<br>② <strong>公民法</strong> → 适用于罗马公民<br>③ <strong>万民法</strong> → 适用于罗马境内各民族<br>④ 《<strong>查士丁尼法典</strong>》→ 罗马法集大成<br><br><strong>核心原则</strong>：<br>• 私有财产神圣不可侵犯<br>• 法律面前人人平等（自由民）<br>• 契约自由',
            source: '📜 <strong>《民法大全》</strong>（6世纪）：<br>东罗马帝国查士丁尼编纂，保存了罗马法精华<br>→ 成为后世欧洲大陆法系的基础',
            memory: '🗺️ <strong>思维导图</strong>：<br>罗马法 → 中世纪保存 → 近代欧洲复兴<br>→ 影响《拿破仑法典》→ 影响现代民法<br><br>🔗 <strong>联想</strong>：罗马法 = 西方法律的"祖宗"'
          },
          {
            id: 10,
            type: 'objective',
            question: '亚历山大东征开始于{{前334年}}，他建立了地跨欧亚非的大帝国，{{前323年}}亚历山大去世后进入{{希腊化}}时代。',
            blanks: ['前334年', '前323年', '希腊化'],
            answer: '<strong>亚历山大东征</strong>（前334-前323年）：<br>马其顿→埃及→波斯→印度河流域<br><br><strong>希腊化时代</strong>（前323-前30年）：<br>• 政治：帝国分裂为三大王国<br>• 文化：希腊文化与东方文化融合<br>• 城市：亚历山大里亚成为文化中心',
            source: '📜 <strong>普鲁塔克《亚历山大传》</strong>：<br>"他（亚历山大）把自己看作是受上天委任来调和所有民族的人。"<br>→ 体现文化融合理念',
            memory: '📅 <strong>关键年份</strong>：<br>前334年 → 东征开始<br>前323年 → 亚历山大去世（33岁）<br>前30年 → 希腊化时代结束（罗马吞并埃及）<br><br>🎵 <strong>口诀</strong>：「334开战323亡，希腊东方融一堂」'
          }
        ]
      }
    ]
  }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = historyData;
}
