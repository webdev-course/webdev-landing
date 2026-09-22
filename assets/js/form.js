// ============================================
// ВАЛИДАЦИЯ И ОТПРАВКА ФОРМЫ ПОКУПКИ
// ============================================
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('purchaseForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Проверка валидности всех полей
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    // Собираем данные формы
    const formData = {
      name: document.getElementById('buyerName').value.trim(),
      email: document.getElementById('buyerEmail').value.trim(),
      oferta: document.getElementById('agreeOferta').checked,
      privacy: document.getElementById('agreePrivacy').checked,
    };

    // Здесь можно отправить данные на сервер или в Яндекс Форму
    console.log('Данные формы:', formData);

    // Пример: показываем сообщение об успехе
    alert(
      'Спасибо, ' +
        formData.name +
        '! Ваша заявка отправлена. Мы свяжемся с вами по email: ' +
        formData.email
    );

    // Сброс формы
    form.reset();
    form.classList.remove('was-validated');
  });
});