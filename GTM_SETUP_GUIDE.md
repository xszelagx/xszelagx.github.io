# Instrukcja konfiguracji Google Tag Manager (GTM) i Consent Mode v2

Aby strona w pełni przetwarzała niestandardowe zdarzenia (Custom Events) zakodowane w pliku `js/script.js` oraz by była zgodna z prawnym wymogiem Google Consent Mode v2, wykonaj poniższe kroki w swoim panelu [Google Tag Manager](https://tagmanager.google.com/).

---

## 1. Konfiguracja Consent Mode v2 w GTM
W kodzie strony zaimplementowaliśmy tak zwany *Advanced Consent Mode*. Domyślnie wszystkie zgody (Cookies analityczne i reklamowe) są ustawione na `denied` (zablokowane). Zmieniają się na `granted` (zaakceptowane) dopiero, gdy użytkownik kliknie "Akceptuj" na banerze (kod aktualizuje to na żywo używając `gtag('consent', 'update', ...)`).

**Aby włączyć Consent Mode w GTM:**
1. Zaloguj się do GTM i przejdź do sekcji **Administracja** (Zębatka u góry) -> **Ustawienia kontenera**.
2. Zaznacz pole: **Włącz ustawienia zgody** (Enable consent overview). Zapisz.
3. Wróć do **Obszaru roboczego** (Workspace). W sekcji Tagi pojawi się nowa ikona tarczy (Consent Overview).
4. Kliknij w tarczę. Zobaczysz listę wszystkich swoich tagów. Zaznacz tag główny GA4 (Google tag) i ustaw **Wymagane zgody** (Require additional consent) na wbudowane zgody, lub pozwól tagowi asynchronicznie polegać na wbudowanych zgodach (GA4 obsługuje Consent Mode automatycznie).

---

## 2. Przechwytywanie Niestandardowych Zdarzeń (Custom Events)
W pliku `js/script.js` umieściliśmy potężne zdarzenia: `generate_lead`, `unlock_contact` oraz `article_scroll`. Są one wysyłane z użyciem `gtag('event', 'nazwa_zdarzenia', { ... })`.

Ponieważ masz zintegrowany GTM z gtagiem, GTM "nasłuchuje" na warstwie danych (DataLayer), ale musimy mu powiedzieć, by je przełapał i wysłał do raportów GA4.

### Krok 2A: Utworzenie Reguł (Triggers)
Musisz stworzyć 3 reguły nasłuchujące w GTM:
1. Przejdź do **Reguły** (Triggers) -> **Nowa**.
2. Typ reguły: **Niestandardowe zdarzenie** (Custom Event).
3. Podaj Nazwę zdarzenia dokładnie taką, jak w kodzie:
   - Zdarzenie 1: wpisz `generate_lead`
   - Zdarzenie 2: wpisz `unlock_contact`
   - Zdarzenie 3: wpisz `article_scroll`
4. Zapisz każdą z nich (np. jako "Trigger - Generate Lead").

### Krok 2B: Utworzenie Zmiennych (Variables) dla Atrybutów
Nasze zdarzenia wysyłają do GA4 fantastyczne parametry z niestandardowymi danymi.
1. Przejdź do **Zmienne** (Variables) -> **Nowa**.
2. Typ zmiennej: **Zmienna warstwy danych** (Data Layer Variable).
3. Utwórz 6 osobnych zmiennych wpisując dokładnie te klucze (w polu "Nazwa zmiennej warstwy danych"):
   - `page_path` (ścieżka z której wysłano formularz/odsłonięto kontakt)
   - `referrer` (strona poprzedzająca)
   - `percent_scrolled` (procent przewinięcia - 25, 50, 75, 100)
   - `article_title` (tytuł czytanego tekstu)
   - `event_category` (kategoria, np. Contact lub Engagement)
   - `event_label` (etykieta, np. Web3Forms Success)

### Krok 2C: Utworzenie Tagów Zdarzeń GA4
Teraz połączmy to co wymyśliliśmy i wyślijmy do GA4:
1. Przejdź do **Tagi** (Tags) -> **Nowy**.
2. Typ tagu: **Google Analytics: zdarzenie GA4** (GA4 Event).
3. Podaj Twój identyfikator pomiaru (np. `G-9N5S4NW0L8`).
4. **Nazwa zdarzenia:** Wybierz konkretną np. wpisz ręcznie `generate_lead`.
5. W zakładce **Parametry zdarzenia** dodaj parametry odwołując się do zmiennych z Kroku 2B (np. nazwa parametru: `percent_scrolled`, wartość: `{{percent_scrolled}}`; nazwa parametru: `referrer`, wartość: `{{referrer}}` itd.).
6. W sekcji **Reguły** na samym dole, przypnij odpowiedni Trigger, który utworzyliśmy w Kroku 2A.
7. Powtórz to dla trzech zdarzeń: `generate_lead`, `unlock_contact`, `article_scroll`.

### 3. Opublikowanie Kontenera
Po spięciu Tagów GA4 z Regułami z Custom Eventów kliknij granatowy przycisk powiadomień **Prześlij** (Submit) w prawym górnym rogu GTM. Od teraz wszystkie akcje wysyłane z kodów JavaScript zaczną pojawiać w Google Analytics (sekcja: Czas rzeczywisty).

---

## Ważna uwaga techniczna dotycząca GA4
Zauważ, że w kodzie źródłowym Twojej strony tag `gtag.js` dla Google Analytics 4 (z ID `G-9N5S4NW0L8`) jest już na twardo wklejony w plikach HTML razem z Consent Mode. Oznacza to, że funkcje `gtag('event'...)` z pliku JavaScript **automatycznie** lecą u Ciebie bezpośrednio do Google Analytics 4, bez konieczności re-konfigurowania ich jeszcze raz w GTM w celu przekazania do GA4!

**Kiedy wykonywać Kroki 2A, 2B, 2C w Tag Managerze?**
Tylko wtedy, gdy:
* Będziesz chciał w przyszłości usunąć wklejony bezpośrednio kod GA4 z HTML i zarządzać nim **wyłącznie** poprzez Tag Manager (czystsze podejście, tzw. *100% GTM approach*).
* Będziesz chciał przechwycić te 3 zdarzenia (np. wysłanie formularza jako `generate_lead`) po to, aby skonfigurować w GTM ich wysyłanie nie tylko do GA4, ale też uderzać nimi do Pixela Facebooka (Meta Ads), TikTok Ads czy Google Ads. Zmienne (Variables) pozwolą rzucić tytułem artykułu bezpośrednio do reklamy!
