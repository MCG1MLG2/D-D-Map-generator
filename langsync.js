/* langsync.js – gemeinsame Sprachwahl für alle Seiten.
 * Einbinden am ENDE von <body>, nach dem Skript der Seite:
 *   <script src="langsync.js"></script>
 * Voraussetzung: languages.js ist geladen und die Sprachauswahl ist ein <select> in .lang-picker.
 * - Wird die Sprache auf einer Seite geändert, wird sie gespeichert (localStorage 'kartenwerkstatt_lang',
 *   derselbe Schlüssel wie auf index.html) und gilt danach auf allen Seiten.
 * - Ein Teilen-Link mit eigener Sprache (z. B. #h=…) hat Vorrang und wird nicht überschrieben.
 * - Ist noch keine Sprache gespeichert, wird die Browsersprache erkannt (navigator.languages,
 *   erst der volle Code wie "zh-tw", dann der Basiscode wie "fr"), sonst bleibt es bei der Standardsprache der Seite.
 *   Die erkannte Sprache wird nicht gespeichert, nur eine bewusste Auswahl.
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
  function detect() {
    var list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i]).toLowerCase();
      if (LANGUAGES[code]) return code;
      var base = code.split('-')[0];
      if (LANGUAGES[base]) return base;
    }
    return null;
  }
  function apply(code) {
    if (!code || !LANGUAGES[code] || select.value === code) return;
    select.value = code;
    // löst den vorhandenen change-Handler der Seite aus
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }

  var fromLink = /[#&][A-Za-z]+=/.test(location.hash);
  if (!fromLink) apply(load() || detect());

  select.addEventListener('change', function () { save(select.value); });

  window.addEventListener('storage', function (e) {
    if (e.key === KEY) apply(e.newValue);
  });
})();
