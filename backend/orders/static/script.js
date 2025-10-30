document.addEventListener('DOMContentLoaded', function() {
    // Обработка отправки формы
    const form = document.getElementById('orderForm');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Получаем CSRF токен
            const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]')?.value;
            
            try {
                const formData = new FormData(form);
                
                // Отправляем запрос на бэкенд
                const response = await fetch(form.action, {
                    method: 'POST',
                    headers: {
                        'X-CSRFToken': csrfToken
                    },
                    body: formData
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    alert("✅ Сообщение успешно отправлено!");
                    form.reset();
                } else {
                    throw new Error(data.error || 'Ошибка отправки');
                }
            } catch (error) {
                console.error('Ошибка:', error);
                alert("❌ Произошла ошибка при отправке. Пожалуйста, попробуйте позже: " + error.message);
            }
        });
    }
});