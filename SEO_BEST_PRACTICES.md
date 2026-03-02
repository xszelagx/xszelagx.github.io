# Dobre Praktyki SEO i Analityki (Data Driven)

Oto dedykowany poradnik odpowiadający na pytania o optymalizację publikacji oraz zasady zbierania danych na stronie B2B.

## 1. Jak daty publikacji wpływają na SEO (Częstotliwość vs Batch)?

Często zadawane pytanie brzmi: **"Czy lepiej wrzucić 10 artykułów na raz, czy uwalniać je co tydzień?"**
Odpowiedź algorytmów wyszukiwarek (szczególnie w obliczu tzw. _Freshness Algorithm_ Google) to: **Drip-feeding (publikowanie systematyczne) jest 10 razy lepsze.**

### Dlaczego nie publikować wszystkiego na raz?
- **Ograniczenia Crawlera (Crawl Budget):** Nawet wpięta mapa `sitemap.xml` nie gwarantuje, że roboty Google (Googlebots) w sekundę przeczytają 60 artykułów. Wrzucając wszystko naraz, ryzykujesz zignorowanie lwiej części mapy i ich powolną, kwartalną indeksację.
- **Sygnał "Żywej" Domeny (Freshness Signal):** Kiedy Googlebot odwiedza stronę i widzi nowe treści w powtarzającym się cyklu (np. co czwartek), algorytm przypisuje stronie status "Aktywnie działający serwis biznesowy". Jeśli po "rzucie" 60 artykułów nastąpi rok ciszy - domena z punktu widzenia botów "umiera".
- **Naturalny przyrost linków (Link Building Velocity):** Jeśli jednego dnia pozyskasz 50 nowych podstron i od razu spróbujesz je linkować - wygląda to nienaturalnie (spam). Stopniowa rozbudowa bloga jest traktowana jako organiczny i zdrowy wzrost.

### Zalecona Konfiguracja Wydawnicza:
Możesz _przygotować_ i napisać wszystkie 60 wpisów, ale fizycznie w kodzie strony i pliku sitemap.xml odsłaniaj je "falowo": po 1-2 sztuki tygodniowo w powtarzalnych cyklach. W inżynierii strony statycznej wymaga to po prostu cyklicznego wykonywania Commitu z odkomentowaniem HTMLa lub wrzucania nowych plików `.html`.

---

## 2. GTM czy Skryptowanie GA4 (Global Site Tag)?
Zwróciłeś uwagę, czy dane muszą być ustawiane w Google Tag Managerze (GTM) czy gdzie indziej.

Z technicznego punktu widzenia: **Oba systemy muszą współpracować.**
Na Twojej stronie zrobiliśmy genialny most pomiędzy czystym kodowaniem (JavaScript) a narzędziem GTM. Zamiast budować ciężkie nasłuchiwacze w zewnętrznym i wolnym Tag Managerze, cała logika jest w Twoim kodzie `js/script.js`. Twój menedżer tagów teraz tylko "wysłuchuje", jako głucha centralka.

Oto co przekazuje teraz automatycznie strona analityce z tagami `gtag()`:
### Wykryto i ustawiono na stronie:
1. **Analiza Przepływu Formularza (`generate_lead`):**
   Gdy formularz wyśle się pozytywnie, JavaScript wysyła metrykę *generate_lead*. Dorzuciliśmy do niej właśnie dwa kluczowe ulepszenia:
   - `page_path`: Wiemy teraz **z jakiego dokładnie adresu HTML (artykułu) klient wypełnił formularz!**
   - `referrer`: Wiemy, z jakiej podstrony u Ciebie przeskoczył na kontakt.
   
2. **Kto przeczytał więcej niż Nagłówek? (`article_scroll`):**
   Jeśli wyślesz klienta na bloga, GA4 w standardzie zliczy "odwiedziny", ale to zgubna metryka (ktoś wszedł i uciekł po 2 sekundach). 
   - Napisaliśmy system procentowy. Twój Custom Script z najnowszego commita wprost mówi do analityki "Ten Pan dotarł do 25%, 50%, 75% i 100% artykułu". 
   - Wysyła też do GA4 nazwę `<title>` - będziesz wiedział od tyłu czy "Temat A" czytają do 100%, a na "Temacie B" uciekają po włączeniu strony po 25% czytania.

3. **Demaskowanie Konwersji Kontaktowych (`unlock_contact`):**
   Niektórzy nienawidzą formularzy i wolą skopiować Mail/Telefon na końcu strony. Mamy na to specjalny guzik *anti-scrapingowy* ("Odsłoń dane"). Skrypt teraz automatycznie wbija Ci punktową konwersję do GA4, kiedykolwiek ktokolwiek kliknie "Odsłoń dane". Nigdy nie stracisz z radaru gościa, który "nie dzwoni/nie pisze", bo system to sprytnie zanotuje.

## Ostatnia Pętla (GTM Setup)
Dzięki powyższym aktualizacjom, kod Front-Endu odwala całą brudną robotę. Abyś to fizycznie widział wpisanym na czarno w Panelach Google Analytics 4 upewnij się, że w GTM aktywujesz Eventy Customowe o nazwie (jeśli GTM nie łyka natywnych DataLayer gtagów, chociaż Consent mode v2 to obsługuje natywnie):
- `generate_lead`
- `unlock_contact`
- `article_scroll`

Dzięki temu stworzony przez Nas wczoraj pulpit analityczny Looker Studio, zacznie pokazywać absolutnie sterylnie czyste intencje sprzedażowe z każdej podstrony!
