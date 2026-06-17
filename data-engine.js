// ═══════════════════════════════════════════════
//  365能歌善舞 · 数据引擎
//  更新数据只需修改下方 DATA 对象
// ═══════════════════════════════════════════════

var DATA = {
  homeStats: {
    totalActive:   170,
    pureCount:     53,
    d210Count:     135,
    restCount:     27,
    level3Count:   139,
    level4Count:   31,
    level3Pct:     82,
    level4Pct:     18,
    revivePeople:  18,
    reviveTotal:   22
  },

  students: [
    {
      name: "觉察同修",
      class: "3",
      team: "般若队",
      monthlyDays: 22,
      totalDays: 165,
      effectiveDays: 158,
      danceMin: 1293,
      chantMin: 785,
      todayReached: true,
      status: "纯净全勤",
      isVip: false,
      monthsCleared: [1, 2, 3, 4, 5, 6]
    },
    {
      name: "骨干同修",
      class: "1",
      team: "精进队",
      monthlyDays: 28,
      totalDays: 180,
      effectiveDays: 175,
      danceMin: 1540,
      chantMin: 920,
      todayReached: true,
      status: "双210通关",
      isVip: true,
      monthsCleared: [1, 2, 3, 4, 5, 6, 7]
    },
    {
      name: "暂歇同修",
      class: "2",
      team: "持戒队",
      monthlyDays: 8,
      totalDays: 42,
      effectiveDays: 35,
      danceMin: 380,
      chantMin: 210,
      todayReached: false,
      status: "今日关隘破窗",
      isVip: false,
      monthsCleared: [1, 2]
    },
    {
      name: "莲花同修",
      class: "1",
      team: "精进队",
      monthlyDays: 25,
      totalDays: 170,
      effectiveDays: 168,
      danceMin: 1450,
      chantMin: 880,
      todayReached: true,
      status: "双210通关",
      isVip: true,
      monthsCleared: [1, 2, 3, 4, 5, 6, 7]
    },
    {
      name: "明月同修",
      class: "3",
      team: "般若队",
      monthlyDays: 20,
      totalDays: 150,
      effectiveDays: 145,
      danceMin: 1100,
      chantMin: 650,
      todayReached: true,
      status: "持续精进",
      isVip: false,
      monthsCleared: [1, 2, 3, 4, 5]
    },
    {
      name: "精进新人",
      class: "4",
      team: "持戒队",
      monthlyDays: 15,
      totalDays: 60,
      effectiveDays: 55,
      danceMin: 520,
      chantMin: 310,
      todayReached: false,
      status: "今日关隘破窗",
      isVip: false,
      monthsCleared: [1, 2, 3]
    }
  ]
};

function getData() {
  return DATA;
}
