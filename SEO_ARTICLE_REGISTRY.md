# Katalog Artykułów SEO (AI Data Registry)

Ten plik służy jako rejestr i centralna baza wiedzy dla asystenta AI dotycząca struktury treści na stronie, linkowania i unikanych duplikatów tematów. Analizując ten plik mogę zapobiegać duplikacjom treści.

Ostatnia aktualizacja: 2 Marca 2026

## Zestawienie Opublikowanych Artykułów

1. `/blog/czy-looker-studio-jest-platne-ukryte-koszty.html` (Tag: Koszta Operacyjne (API)) - Temat pułapek budżetowania API w Lookerze.
2. `/blog/looker-studio-vs-ga4-wady-ograniczenia.html` (Tag: Migracje Analityczne B2B) - Dlaczego GA4 psuje krew w e-commerce. Próbkowanie względem Lookera.
3. `/blog/looker-studio-vs-tableau-porownanie-narzedzi-bi.html` (Tag: Porównania Ekosystemów (BI)) - Różnice między środowiskiem Tableau a darmowym Lookerem w chmurze GCP.
4. `/blog/looker-studio-vs-looker-core-roznice.html` (Tag: Wybór Narzędzi Korporacyjnych) - Czym jest płatny Looker Pro Enterprise vs darmowy Looker Studio. Modele semantyczne LookML.
5. `/blog/jak-polaczyc-arkusze-google-sheets-looker-studio.html` (Tag: Bazy Niestrukturyzowane) - Jak prawidłowo spiąć Google Sheets. Konstrukcja dat, formatów i wymiarów w tabelach.
6. `/blog/dashboard-reklamowy-facebook-ads-google-ads-looker-studio.html` (Tag: Marketing Performance B2B) - Scalanie ROAS. Data Blending Facebook Ads vs Google Ads w jednym źródle.
7. `/blog/najlepsze-darmowe-szablony-templates-looker-studio-ecommerce.html` (Tag: Darmowe Narzędzia BI) - Wymienione makiety z Google Data Studio Gallery pod B2B i sklepy internetowe (SEO, Ads, GA4).
8. `/blog/dlaczego-looker-studio-dziala-wolno-optymalizacja.html` (Tag: High Performance BI) - Tematy optymalizacji inżynieryjnej. Wyłączanie Data Blending na rzecz Extract Data Sources oraz hurtowni SQL.
9. `/blog/jak-liczyc-srednia-wazona-looker-studio-bledy-agregacji.html` (Tag: Wizualizacja Danych BI) - Błędy Agregacji `System Error Cannot mix metrics`. Konstrukcja matematycznej średniej za pomocą zagnieżdżenia SUM() / SUM().
10. `/blog/jak-wdrozyc-looker-studio-w-firmie-b2b-checklista.html` (Tag: Strategia Analityczna (C-Level)) - Bezpieczne i metodyczne wprowadzanie SSOT w firmie, rola Row-Level Security, cykl tworzenia Data Pipelines.
11. `/blog/tworzenie-szablonow-kopiowanie-raportow-looker-studio.html` (Tag: Zarządzanie Zespołem Data) - Sposób "trik" na obejście braku przycisku zapisu prywatnego szablonu (sklonowania raportu z przemapowaniem na API klientów).
12. `/blog/zmiana-zrodla-danych-looker-studio-bez-psucia-wykresow.html` (Tag: Błędy API i Serwisu (Fix)) - Omijanie awarii przy re-autoryzacji konektorów i zmienianiu schematów kolumn `Data mapping menu`.
13. `/blog/jak-podlaczyc-ga4-do-looker-studio-konektor-vs-bigquery.html` (Tag: Integracje Ekosystemów B2B) - Jak poradzić sobie z utratą "niestandardowych wymiarów (Custom Dimensions)" w natywnym złączu kierując ruch przez darmowe zapytania w BigQuery.
14. `[POZOSTAŁE 12 ARTICLES Z POPRZEDNIEJ PACZKI]` (Generowane LUTY 2026 - Obejmują m.in w pełni tematy Partycjonowania BQ Quota The Limits, Row Level sec, Automatycznego odświeżania na Mailach). Powyższe nowe tematy zostały tak skrojone by nie kanibalizować Słów Kluczowych z początkową falą artykułów na blogu.

## Kategoryzacja w Sitemap.xml
Wszelkie adresy artykułów wstrzykiwane są jako link absolutny pod koniec węzła `<urlset>` w pliku sitemap.xml. Nie poleca się rozdzielania małych list (np 30 elementów) na multi-mape z Index Sitemap (t.zw sitemap_index.xml), ponieważ silniki w GSC trawią to natywnie z jednego pliku aż do 50,000 rzędów.

## Notatki Architektoniczne
Wszystkie bloki kodów (`<pre><code>`) na stronie obecnie przetwarzane są przez asynchroniczny plugin wbudowany w `script.js` dopisujący element `.copy-code-btn`, aby umożliwić developerom szybkie zassanie skryptów do kursora (Schowek systemowy Clipboard API). Instrukcje i pola krytyczne takie jak "YOUR_FOLDER_ID" tłumaczone są dodatkowo przez komentarze zagnieżdżone w wklejonym fragmencie.
