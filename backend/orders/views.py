# Create your views here.
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import requests
import json
import logging

logger = logging.getLogger(__name__)

# 🔧 Telegram configuration
TELEGRAM_TOKEN = "7761119013:AAH6657V3j6peZwLZA41bGLsqrRNX8v03pE"
CHAT_ID = "5085102551"

def home(request):
    return render(request, 'contact.html')

@csrf_exempt
def send_order(request):
    if request.method == "POST":
        try:
            # Логируем полученные данные
            logger.info(f"Получены данные POST: {dict(request.POST)}")
            
            # Получаем данные из формы
            name = request.POST.get("firstname", "")
            lastname = request.POST.get("lastname", "")
            city = request.POST.get("city", "")
            phone = request.POST.get("phone", "")
            message = request.POST.get("subject", "")

            # Проверяем наличие обязательных полей
            if not all([name, phone]):
                logger.error("Отсутствуют обязательные поля")
                return JsonResponse({"error": "Не заполнены обязательные поля"}, status=400)

            text = (
                f"📩 Новый заказ с сайта:\n\n"
                f"👤 Имя: {name} {lastname}\n"
                f"🏙️ Город: {city}\n"
                f"📞 Телефон: {phone}\n"
                f"💬 Сообщение: {message}"
            )

            # Отправка в Telegram
            url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
            response = requests.post(url, 
                                  data={
                                      "chat_id": CHAT_ID,
                                      "text": text,
                                      "parse_mode": "HTML"
                                  },
                                  timeout=10)  # timeout в 10 секунд
            
            # Проверяем ответ от Telegram
            response.raise_for_status()
            response_data = response.json()
            
            if response_data.get('ok'):
                logger.info("Сообщение успешно отправлено в Telegram")
                return JsonResponse({"status": "success"})
            else:
                logger.error(f"Ошибка Telegram API: {response_data}")
                return JsonResponse({"error": "Ошибка отправки в Telegram"}, status=500)

        except requests.RequestException as e:
            logger.error(f"Ошибка сети при отправке в Telegram: {str(e)}")
            return JsonResponse({"error": "Ошибка сети"}, status=500)
        
        except Exception as e:
            logger.error(f"Необработанная ошибка: {str(e)}")
            return JsonResponse({"error": "Внутренняя ошибка сервера"}, status=500)

    return JsonResponse({"error": "Метод не поддерживается"}, status=405)


def portfolio(request):
    return render(request, 'portfolio.html')
