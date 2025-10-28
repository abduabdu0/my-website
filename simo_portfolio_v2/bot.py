
# bot.py - simple Telegram bot example
# Requires: python-telegram-bot (pip install python-telegram-bot)
# Replace TOKEN with your bot token from @BotFather

import logging
from telegram import Update, ReplyKeyboardMarkup, KeyboardButton
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters, CallbackContext, ConversationHandler

TOKEN = 'PASTE_YOUR_BOT_TOKEN_HERE'

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)

ASK_CONTACT, ASK_MESSAGE = range(2)

def start(update: Update, context: CallbackContext):
    update.message.reply_text('Привет! Я бот Simo Studio. Хотите оставить контакты для связи? Отправьте "да" или используйте кнопку.')
    return ASK_CONTACT

def ask_contact(update: Update, context: CallbackContext):
    kb = [[KeyboardButton("Отправить контакт", request_contact=True)]]
    update.message.reply_text('Нажмите кнопку, чтобы прислать номер или напишите свой телефон.', reply_markup=ReplyKeyboardMarkup(kb, one_time_keyboard=True, resize_keyboard=True))
    return ASK_MESSAGE

def save_contact(update: Update, context: CallbackContext):
    contact = update.message.contact
    if contact:
        phone = contact.phone_number
        name = contact.first_name
        update.message.reply_text(f'Спасибо, {name}! Мы получили ваш номер: {phone}. Оставьте короткое сообщение.')
    else:
        phone = update.message.text
        update.message.reply_text(f'Спасибо! Мы получили номер: {phone}. Оставьте короткое сообщение.')
    return ConversationHandler.END

def cancel(update: Update, context: CallbackContext):
    update.message.reply_text('Отменено.')
    return ConversationHandler.END

def main():
    updater = Updater(TOKEN, use_context=True)
    dp = updater.dispatcher

    conv = ConversationHandler(
        entry_points=[CommandHandler('start', start)],
        states={
            ASK_CONTACT: [MessageHandler(Filters.text | Filters.contact, ask_contact)],
            ASK_MESSAGE: [MessageHandler(Filters.text | Filters.contact, save_contact)],
        },
        fallbacks=[CommandHandler('cancel', cancel)]
    )
    dp.add_handler(conv)
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
