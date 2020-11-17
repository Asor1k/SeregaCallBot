const { Telegraf } = require('telegraf');
const bot = new Telegraf("1433450434:AAEfsJruGIPGPaSRy2kbnKQqtexnqmEGTMQ") //сюда помещается токен, который дал botFather

bot.on('sticker', (ctx) => {
    if(ctx.message.sticker.file_unique_id === 'AgADwwADX93uLA'){
        ctx.reply("@OcheretenkoS");
    };
});


const start = () => {   
try {
    bot.launch() // запуск бота
} catch (error){
    console.log("Bot failed to launch");
    return error;
}
};
const callback = start();
if(callback) {
    console.log(error);
}else{
    console.log("Bot started successfuly");
}


