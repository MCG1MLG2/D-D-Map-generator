/* langsync.js – gemeinsame Sprachwahl für alle Seiten.
 * Einbinden am ENDE von <body>, nach dem Skript der Seite:
 *   <script src="langsync.js"></script>
 * Voraussetzung: languages.js ist geladen und die Sprachauswahl ist ein <select> in .lang-picker.
 * - Wird die Sprache auf einer Seite geändert, wird sie gespeichert (localStorage 'kartenwerkstatt_lang',
 *   derselbe Schlüssel wie auf index.html) und gilt danach auf allen Seiten.
 * - Ein Teilen-Link mit eigener Sprache (z. B. #h=…) hat Vorrang und wird nicht überschrieben.
 * - Ist die Seite in mehreren Tabs offen, ziehen die anderen Tabs sofort nach.
 */
(function () {
  var KEY = 'kartenwerkstatt_lang';
  var select = document.querySelector('.lang-picker select');
  if (!select || typeof LANGUAGES === 'undefined') return;

  function load() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function save(code) {
    try { localStorage.setItem(KEY, code); } catch (e) {}
  }
  function apply(code) {
    if (!code || !LANGUAGES[code] || select.value === code) return;
    select.value = code;
    // löst den vorhandenen change-Handler der Seite aus
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }

  var fromLink = /[#&][A-Za-z]+=/.test(location.hash);
  if (!fromLink) apply(load());

  select.addEventListener('change', function () { save(select.value); });

  window.addEventListener('storage', function (e) {
    if (e.key === KEY) apply(e.newValue);
  });
})();
