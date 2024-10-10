require("./database/module")

//https://whatsapp.com/channel/0029VaqzRtc8PgsKVcs3vS2D

// RAMEIN CH BARU GW BRE


// -----------------( SETTINGS DI SINI )-------------------
global.owner = "923074060856"
global.namabot = "ѕαηιтувυg"
global.nomorbot = "923074060856"
global.namaCreator = "LaMods"
global.linkyt = "https://youtube.com/@lac"
global.autoJoin = false
global.antilink = false
global.versisc = '5.0.0'
global.codeInvite = ""
global.imageurl = 'https://telegra.ph/file/6eea1a2b9ba754870a2e8.jpg'
global.isLink = 'https://whatsapp.com/channel/0029VaqzRtc8PgsKVcs3vSD'
global.packname = "Lods"
global.author = "LyMods"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})