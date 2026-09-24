//Простите, как без js сделать переключение темы, я не знаю. Поэтому вот скрипт.
(function () {
  'use strict';

  const STORAGE_KEY = 'coffee-house-theme';
  let root = document.documentElement;

  function getSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      console.log('Тема не сохранилась');
      
    }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    let toggle = document.getElementById('theme-toggle');
    if (toggle) {
      let isDark = theme === 'dark';
      toggle.setAttribute('aria-pressed', String(isDark));
      toggle.setAttribute(
        'aria-label',
        isDark ? 'Switch to light theme' : 'Switch to dark theme'
      );
    }
  }


  let saved = getSavedTheme();
  let initial =
    saved === 'dark' || saved === 'light'
      ? saved
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
  applyTheme(initial);

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(root.getAttribute('data-theme') || 'light');

    let toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      let next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      saveTheme(next);
    });
  });
})();
