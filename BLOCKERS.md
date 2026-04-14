# BLOCKERS

## PDF Presentation — Text Extraction Failed

**File:** `drive_files/prezentace.pdf` (17 MB, 12 pages)  
**Issue:** All text is encoded in CIDFont with custom character mappings. Standard PDF text extraction returns garbled Unicode sequences — the actual glyph-to-character mapping is embedded only in the CIDFont resource, which requires the full PDF rendering stack to decode.

**Attempts made:**
- Python `zlib` decompression of raw PDF streams → readable structure but unreadable text (custom encoding)
- `pdftotext` → not available (no sudo access to install)
- `tesseract` → not available
- `pip3 install pdfminer` → pip3 not available
- `apt-get` → requires sudo

**Impact:** Could not extract textual content from the presentation (product descriptions, company positioning, case studies, etc.).

**What was extracted from Drive assets instead:**
- `img1.png` → Full horizontal logo (white KQ monogram on dark purple `≈#2D1B55`)
- `img2.png` → Business card: Kristýna Ondráčková, European Adhesive Engineer / Sales Manager, +420 608 55 88 33, ondrackova@kronteq.com, Roháčova 145/14, Praha 3
- `img3.png` → Square logo variant with `·KRONTEQ·`

**Action taken:** Site built with content based on competitor research and industry standards. All sections marked with `TODO: update from presentation` where real product/case data should be added.

**To fix:** Either provide extracted text, or install `pdftotext` (`apt-get install poppler-utils`) and re-run extraction.

---

## Live Website — Connection Refused

**URL:** www.kronteq.com  
**Issue:** ECONNREFUSED — domain not yet live or pointing to a server that's not running.  
**Impact:** Could not use existing site content as reference.

---

## Competitor Research — Limited Access

Several competitor sites returned 403/404:
- `sika.com/en/industries/automotive.html` → 404
- `hbfuller.com/en/industries/automotive` → 403

Successfully analysed: **gluetec-group.com** — used as primary UX/content reference.
