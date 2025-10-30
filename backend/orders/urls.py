from django.urls import path
from .views import send_order

urlpatterns = [
    path('send_order/', send_order, name='send_order'),
]
from django.urls import path
from .views import send_order, home

urlpatterns = [
    path('', home, name='home'),              # главная страница
    path('contact.html', home, name='contact'), # 👈 добавь эту строку
    path('send_order/', send_order, name='send_order'),
]
