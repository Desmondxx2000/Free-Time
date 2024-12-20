var app = new function() {
    this.name = "Free Time", 
    this.version = "1",
    this.date = "2024", 
    this.folder = "asset-v1/", 
    this.looptime = 12709,
    this.bpm = 151, 
    this.totalframe = 610, 
    this.nbpolo = 7, 
    this.nbloopbonus = 8, 
    this.bonusloopA = !0, 
    this.bonusendloopA = !1,
    this.recmaxloop = 34, 
    this.recminloop = 4, 
    this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, 
    this.spritepolo = "polo-sprite.png", 
    this.spritepicto = "game-picto.png", 
    this.colBck = "#00ffff", 
    this.col0 = "#00ffff", 
    this.col1 = "#00ffff", 
    this.col2 = "#00ffff", 
    this.col3 = "#00ffff", 
    this.col4 = "#00ffff", 
    this.animearray = [
    {name: "01_Bits", color: "#00ffff", uniqsnd: !0},
    {name: "02_Dash", color: "#00ffff", uniqsnd: !1},
    {name: "03_Menac", color: "#db0000", uniqsnd: !0},
    {name: "04_Beep", color: "#00ffff", uniqsnd: !0},
    {name: "05_Berm", color: "#ffaa00", uniqsnd: !0},
    {name: "06_Chipper", color: "#ffff00", uniqsnd: !0},
    {name: "07_Deprss", color: "#00ffff", uniqsnd: !1}], 
    this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
    var a = this.animearray[n].name;
    this.animearray[n].soundA = a + "_a", 
    this.animearray[n].soundB = 
    this.animearray[n].uniqsnd ? a + "_a" : a + "_b", 
    this.animearray[n].anime = a + "-sprite.png", 
    this.animearray[n].animeData = a + ".json"
    }
};
