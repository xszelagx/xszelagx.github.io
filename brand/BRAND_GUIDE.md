---

## 1. Style Podstawowe (Klucz do lekkości)

Masz rację, zbyt dużo fioletowego tła sprawia, że raport staje się "ciężki". Aby uzyskać efekt "Neon Premium" jak na Twojej stronie, zmień te ustawienia:

| Pole w Looker Studio | Wartość / Kod HEX | Dlaczego? |
| :--- | :--- | :--- |
| **Kolor tła raportu** | `#0B0C10` | Zostaje bez zmian (czarny) |
| **Główny kolor czcionki** | `#FFFFFF` | Zostaje (biały) |
| **Tło (Komponentu)** | **Przezroczyste (Transparent)** | **FIX:** To usunie te ciężkie fioletowe bloki |
| **Kolor obramowania** | **#7F7FFF** (Indygo) | To stworzy delikatną "neonową ramkę" |
| **Grubość obramowania** | **2** | Żeby ramka była wyraźna, ale cienka |
| **Promień obramowania** | **24** | Zaokrąglone rogi (zostaje) |

---

## 2. Jak naprawić "Grupowanie" (Summary / Trends)

Na Twoim screenie te duże niebieskie bloki to prawdopodobnie **Kształty (Shapes)** użyte jako tło.
1.  Kliknij w ten duży prostokąt.
2.  Zmień jego **Kolor wypełnienia** na **Przezroczysty**.
3.  Zmień jego **Kolor obramowania** na `#7F7FFF` (Indygo).
4.  Ustaw **Grubość obramowania** na `1` lub `2`.

Dzięki temu uzyskasz efekt "lekkich kontenerów", które nie przytłaczają danych.

---

## 3. Wykresy i Dane (High Contrast)

Aby dane były czytelne na czarnym tle:

| Element | Kolor | Rola |
| :--- | :--- | :--- |
| **Główna seria danych** | `#45F3FF` (Cyan) | Świetnie "świeci" na czarnym tle |
| **Druga seria danych** | `#7F7FFF` (Indygo) | Mniej rzuca się w oczy, dobra do porównań |
| **Siatka wykresu** | `#1E2028` | Prawie niewidoczna, tylko dla orientacji |

---

## 4. Dodatkowe Style (Screen 3)
| Pole | Wartość |
| :--- | :--- |
| **Kolor czcionki uzup.**| `#A0A4B8` (Muted) |
| **Kolor tła pola tekst.** | `#0B0C10` (Czysta czerń) |
| **Ukryj obramowania** | **WŁĄCZONE** |

---

## 4. Style Pola Tekstowego (Dół Screena 3)

Ustawienia dla okien wyszukiwania i filtrów:

| Pole w Looker Studio | Wartość / Kod HEX | Uwagi |
| :--- | :--- | :--- |
| **Rodzina czcionek** | `Roboto` | Bez zmian |
| **Kolor czcionki** | `#FFFFFF` | Biały tekst w polach |
| **Kolor tła** | `#1E2028` | Ciemny surface |
| **Kolor tekstu linku** | `#45F3FF` | Linki w kolorze Cyan |
| **Kolor klikniętego linku** | `#7F7FFF` | Kliknięte w kolorze Indygo |
| **Ukryj obramowania pól** | **WŁĄCZONE (ON)** | Nowocześniejszy, czystszy wygląd |

---

## 💡 Dodatkowe Wskazówki Pro:
1.  **Gradienty:** Stosuj je tylko w dużych kształtach w tle (używając „Niestandardowy gradient” z indygo do czerni).
2.  **Liczby (Scorecards):** Zawsze pogrubione (Bold).
3.  **Filtry:** Ustaw je tak, aby nie miały tła (Transparent) lub miały kolor `#1E2028`.

---
*Zasoby logo:* [szelag_data_logo.png](file:///Users/mikolajszelag/Desktop/xszelagx/portfolio-cv/brand/szelag_data_logo.png)
