from aiogram import Bot, Dispatcher, types
from aiogram.utils import executor

# 🔑 Вставь сюда токен своего бота
bot = Bot(token="7761119013:AAH6657V3j6peZwLZA41bGLsqrRNX8v03pE")
dp = Dispatcher(bot)

# /start — запускает кнопку для сайта
@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.InlineKeyboardMarkup()
    markup.add(types.InlineKeyboardButton(
        text="📩 Оставить сообщение",
        web_app=types.WebAppInfo(url="https://abduabdu0.github.io/my-website/app/contact.html")
    ))
    await message.answer("Здравствуйте! Хотите оставить сообщение? 👇", reply_markup=markup)

# Получаем заказ с сайта
@dp.message_handler(content_types='web_app_data')
async def web_app_data(message: types.Message):
    data = eval(message.web_app_data.data)
    text = (
        f"📩 *Новый заказ!*\n\n"
        f"👤 {data['firstname']} {data['lastname']}\n"
        f"🏙 Город: {data['city']}\n"
        f"📞 Телефон: {data['phone']}\n"
        f"💬 Сообщение: {data['subject']}"
    )
    await bot.send_message(message.chat.id, text, parse_mode="Markdown")

executor.start_polling(dp)
