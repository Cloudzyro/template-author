# Unslop pass

Done with the unslop skill (unslop by Damir Sokolovsky, @heydamir, CC BY 4.0) on November 25, 2026.

## Audit

Light slop: built against the direction from the start, so this was polish mode. Signs found:

- In dark mode the primary buttons were filled with the rose accent, a pastel block that glowed against the ink background (`global.css`)
- The author's name on every cover was tracked out at 0.08em, the wide-tracked label look (`BookCover.astro`)
- Backlist covers jumped 4px on hover (`index.astro`), cut to 2px before the first commit
- Missing spaces in the hero's "as an ebook and an audiobook" line (`index.astro`), fixed before the first commit
- Footer link lists stretched to the tallest column, leaving uneven gaps between links (`Base.astro`), fixed before the first commit

No gradients on chrome, glows, gradient text, emoji, pill badges, uppercase tracked labels, 700+ weights, italic emphasis, trailing periods on labels, hype words or looping motion were found.

## Direction

- Product: a literary novelist's site, for readers preordering the new book, finding events and signing up for the letter, and for press looking for bios
- Character: literary, wry, intimate
- World: book jackets, endpapers, reading lamps, the date stamp in a library book; page-white and ink, with oxblood as the one accent
- Moments: the book jackets designed in code, the upcoming one large on the home page, and the excerpt set like a printed page
- Signature: the library due-date stamp, used only for dates (release dates, events, interviews)

## Changes

- Spacing: no change needed (4px scale, one row height per list)
- Color: dark mode's primary button is now the off-white of the ramp with ink text; rose stays for links and the active nav underline
- Copy: no change needed
- Type: cover author names tracked 0.04em; EB Garamond at 400 for headlines, quotes and the excerpt, Karla at 400 and 500 for the interface
- Layout: no change needed (split hero with the jacket, backlist on a shelf band, excerpt beside the praise)
- Details: no change needed
- Motion: no change needed (2px lift on backlist covers, color transitions, small press scale)

screenshot-2: The Salt Archive book page, synopsis and excerpt beside praise and formats
screenshot-3: Events page with upcoming readings and their date stamps
