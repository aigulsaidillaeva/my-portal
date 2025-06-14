# МОН
# Документация: Интерфейс взаимодействия с министерствами

---
https://youtu.be/
## Назначение

Интерфейс предназначен для подачи и отслеживания заявок в государственные министерства Кыргызстана.

<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/v1jnCMkEmYA?si=VCfRvX7vMn2SPihN" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen>
</iframe>

---

## Структура таблиц

### 1. Колонка "ГНС" (Государственная налоговая служба)

**Назначение:**  
Отображение статуса налоговой регистрации организации.

**Типы статусов:**

- ✅ — организация зарегистрирована в ГНС
- ❌ — регистрация отсутствует (требуются действия)

**Данные:**

- ПИН (персональный идентификационный номер)
- Дата регистрации
- Район регистрации

---

### 2. Колонка "МЗ" (Министерство здравоохранения)

**Назначение:**  
Контроль соответствия санитарным нормам.

**Типы статусов:**

- ✅ — акт обследования получен
- 🔄 — на рассмотрении
- ❌ — отклонено

**Данные:**

- Дата заявки
- Сотрудник МЗ
- Тип документа

---

### 3. Колонка "МЧС" (Министерство чрезвычайных ситуаций)

**Назначение:**  
Проверка безопасности.

**Типы статусов:**

- ✅ — акт получен
- 🔄 — проверка идёт
- ❌ — не соответствует

**Данные:**

- Дата проверки
- Инспектор

---

### 4. Колонка "МОН" (Министерство образования)

**Назначение:**  
Лицензирование.

**Типы статусов:**

- ✅ — лицензия есть
- ❌ — отказ

**Условия получения лицензии:**

- Требуются положительные статусы по всем предыдущим министерствам.

---

## Блоки интерфейса

### Форма заявителя

- ФИО
- ПИН (обязательно)
- Контакты

### Таблица статусов

- Цветовая индикация
- История обращений

### Уведомления

- Требования для МОН
- Сроки обработки
- Контакты

### Элементы управления

- "Обновить" — синхронизация данных
- "Подать заявку" — новый запрос
- "Сформировать подтверждение" — генерация документов

---

## Валидация

- ПИН: ровно 14 цифр
- Даты: корректный формат
- Обязательные поля должны быть заполнены

---

## Совет

Для ускорения процесса подготовьте все документы заранее.
