const package = require('./package.json');
const {
    bold,
    quote
} = require('@mengkodingan/ckptw');

// API Key
global.apiKey = {
    imgbb: 'REPLACE_THIS_WITH_YOUR_API_KEY', // Dapatkan di: https://id.imgbb.com/
    lowline: 'REPLACE_THIS_WITH_YOUR_API_KEY' // Dapatkan di: https://chat.openai.com/ (Optional)
};

// Bot
global.bot = {
    name: 'Rei Ayanami',
    prefix: /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i,
    thumbnail: 'https://camo.githubusercontent.com/a71a3d7b6e8cee0a85fe87e32cfd860a034603b97bbb8fb98d2a12828d6a3005/68747470733a2f2f696d61676573332e616c706861636f646572732e636f6d2f3636322f7468756d622d3335302d3636323231392e706e67',
    groupChat: ''
};

// MSG (Message / Pesan)
global.msg = {
    // Akses perintah
    admin: `${bold('[ ! ]')} Perintah hanya dapat diakses oleh admin grup!`,
    owner: `${bold('[ ! ]')} Perintah hanya dapat diakses Owner!`,
    group: `${bold('[ ! ]')} Perintah hanya dapat diakses dalam grup!`,
    private: `${bold('[ ! ]')} Perintah hanya dapat diakses dalam obrolan pribadi!`,

    // Antarmuka perintah
    watermark: `${package.name}@^${package.version}`,
    footer: quote('Dibuat oleh @jisaat_ | Take care of yourself.'),

    // Proses perintah
    argument: `${bold('[ ! ]')} Masukkan argumen!`,
    botAdmin: `${bold('[ ! ]')} Bot bukan admin, tidak bisa menggunakan perintah!`,
    notFound: `${bold('[ ! ]')} Tidak ada hasil yang ditemukan!`,
    urlInvalid: `${bold('[ ! ]')} URL tidak valid!`,
    wait: `${bold('[ ! ]')} Tunggu sebentar...`
};

// Owner
global.owner = {
    name: 'ItsReimau',
    number: '6281226769432',
    organization: 'Kumaha Aing'
};

// Sticker
global.sticker = {
    packname: 'Take care of yourself.',
    author: '@jisaat_'
};

// System
global.system = {
    startTime: null,
    timeZone: 'Asia/Jakarta'
};
