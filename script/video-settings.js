videojs('my-video', {
  autoplay: false,            // Автоматичне відтворення (true, false, "muted")
  controls: true,             // Показувати елементи керування
  preload: 'none',            // Завантажувати відео: "auto", "metadata", "none"
  loop: false,                // Повторювати відео
  muted: false,               // Вимкнути звук за замовчуванням
  aspectRatio: '16:9',        // Співвідношення сторін
  fluid: true,                // Адаптивність (аналог класу vjs-fluid)
  width: 640,                 // Початкова ширина
  height: 360,                // Початкова висота
  volume: 0.5,                // Початкова гучність (0 - 1)
  responsive: true,           // Автоматичне масштабування на різних екранах
  language: 'uk',             // Мова інтерфейсу
  playbackRates: [0.5, 1, 1.5, 2], // Швидкість відтворення
  poster: 'logo.png',       // Зображення-заставка до початку відтворення
  liveui: false,               // Відображення елементів керування для живих трансляцій
  controlBar: {               // Налаштування панелі керування
      volumePanel: {
          inline: true        // Відображення повзунка гучності
      }
  },
  controlBar: {
  playToggle: true,            // Кнопка Play/Pause
  volumePanel: {
      inline: true             // Горизонтальний повзунок гучності
  },
  fullscreenToggle: true,      // Кнопка повноекранного режиму
  remainingTimeDisplay: false, // Показ залишкового часу
  progressControl: true,       // Повзунок для перемотування
  playbackRateMenuButton: false // Меню зміни швидкості
}
});
document.addEventListener('keydown', function(event) {
  var player = videojs('my-video');  // Отримуємо екземпляр плеєра

  // Перевіряємо натискання клавіші "Space" (код клавіші 32) для відтворення/пауза
  if (event.keyCode === 32) {  // 32 - це код клавіші Space
      if (player.paused()) {
          player.play();  // Відтворити відео, якщо воно на паузі
      } else {
          player.pause(); // Поставити відео на паузу, якщо воно відтворюється
      }
  }
  
  // Перевіряємо натискання клавіші "ArrowRight" для перемотування вперед
  if (event.keyCode === 39) {  // 39 - це код клавіші "ArrowRight" (стрілка вправо)
      var currentTime = player.currentTime();
      player.currentTime(currentTime + 10); // Перемотуємо відео на 10 секунд уперед
  }
  
  // Перевіряємо натискання клавіші "ArrowLeft" для перемотування назад
  if (event.keyCode === 37) {  // 37 - це код клавіші "ArrowLeft" (стрілка вліво)
      var currentTime = player.currentTime();
      player.currentTime(currentTime - 10); // Перемотуємо відео на 10 секунд назад
  }

  if (event.keyCode === 38) {  // ArrowUp - збільшити гучність
  var volume = player.volume();
  if (volume < 1) {
      player.volume(volume + 0.1); // Збільшуємо гучність на 10%
  }
}

if (event.keyCode === 40) {  // ArrowDown - зменшити гучність
  var volume = player.volume();
  if (volume > 0) {
      player.volume(volume - 0.1); // Зменшуємо гучність на 10%
  }
}
});