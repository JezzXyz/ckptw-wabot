const {
    pinterest
} = require('../lib/scraper.js');
const {
    bold,
    monospace
} = require('@mengkodingan/ckptw');

module.exports = {
    name: 'pinterest',
    aliases: ['pin', 'pint'],
    category: 'internet',
    code: async (ctx) => {
        const input = ctx._args.join(' ');

        if (!input) return ctx.reply(
            `${bold('[ ! ]')} Masukkan parameter!\n` +
            `Contoh: ${monospace(`${ctx._used.prefix + ctx._used.command} rei ayanami`)}`
        );

        try {
            const pinterest = await pinterest(input);

            await ctx.reply({
                image: {
                    url: pinterest
                },
                caption: `• Kueri: ${input}`
            });
        } catch (error) {
            console.error('Error:', error);
            return ctx.reply(`${bold('[ ! ]')} Terjadi kesalahan: ${error.message}`);
        }
    }
};