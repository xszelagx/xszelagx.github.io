# Szeląg.Data - Konfiguracja Motywu Looker Studio 📊

To kompletny „przepis” na każde z pól w Twoim panelu edycji motywu.

---

## 1. Style Podstawowe i Komponent (Screen 1)

Wprowadź te wartości, aby uzyskać efekt „Dark Premium”:

| Pole w Looker Studio | Wartość / Kod HEX | Uwagi |
| :--- | :--- | :--- |
| **Kolor tła raportu** | `#0B0C10` | Główna czerń strony |
| **Rodzina czcionki podst.** | `Roboto` | Najbliższa Twojej czcionce *Outfit* |
| **Główny kolor czcionki** | `#FFFFFF` | Czysta biel |
| **Tło (Komponentu)** | `#1E2028` | Kolor kart (lekko jaśniejszy od tła) |
| **Przezroczystość** | `80-100%` | Możesz lekko obniżyć dla efektu szkła |
| **Kolor obramowania** | `#2D2F39` | Delikatna separacja kart |
| **Promień obramowania** | **24** | Kluczowy element – zaokrąglone rogi |
| **Grubość obramowania** | `1` | Subtelna linia |
| **Cień obramowania** | `Zawsze` | Bardzo delikatny, nadaje głębi (Elevation) |

---

## 2. Style Danych i Wykresów (Screen 2)

Dla wykresów używamy Twojej palety indygo-cyan:

| Pole w Looker Studio | Wartość / Opis |
| :--- | :--- |
| **Paleta wykresu** | **Indygo (#7F7FFF)**, **Cyan (#45F3FF)**, **Róż (#FF45A4)** |
| **Kontrast tekstu** | `Wysoki` |
| **Kolor siatki** | `#1E2028` (bardzo ciemna, niemal niewidoczna) |
| **Kolor zmiany dodatniej** | `#45F3FF` (Cyan zamiast zielonego - bardziej futurystyczny) |
| **Kolor zmiany ujemnej** | `#FF45A4` (Mocny róż zamiast czerwonego) |
| **Tytuł wykresu** | Pokaż po najechaniu / Kolor: `#FFFFFF` |

---

## 3. Style Kształtów i Nawigacji (Screen 3)

| Pole w Looker Studio | Wartość / Kod HEX |
| :--- | :--- |
| **Kolor wypełnienia kształtu** | `#7F7FFF` (Indygo dla ikon/przycisków) |
| **Kolor aktywnego elementu** | `#FFFFFF` (Biały dla zaznaczonej strony) |
| **Kolor czcionki (Nawigacja)** | `#A0A4B8` (Ustalony kolor muted) |
| **Kolor tła (Nawigacja)** | `#1E2028` |

---

## 💡 Dodatkowe Wskazówki Pro:
1.  **Gradienty:** Stosuj je tylko w dużych kształtach w tle (używając „Niestandardowy gradient” z indygo do czerni).
2.  **Liczby (Scorecards):** Zawsze pogrubione (Bold).
3.  **Filtry:** Ustaw je tak, aby nie miały tła (Transparent) lub miały kolor `#1E2028`.

---
*Zasoby logo:* [szelag_data_logo.png](file:///Users/mikolajszelag/Desktop/xszelagx/portfolio-cv/brand/szelag_data_logo.png)
