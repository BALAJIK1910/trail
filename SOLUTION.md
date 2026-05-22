# Redirect Chain CTF — Complete Solution Guide

## Overview

Navigate through 13 HTML pages by finding hidden links on each page. The final flag is `FLAG{y0u_followed_th3_tra1l}`. Along the way you will encounter **4 false flags**, **4 password gates**, and **2 dead-end traps**.

---

## Step-by-Step Walkthrough

### Step 1: `start.html` (Tech Blog)

- **False Flag**: View the page source. At the very top you will find:
  ```html
  <!-- DEBUG: FLAG{w3lcome_to_th3_start} -->
  ```
  This is a **decoy**. Do NOT submit it.
- **How to proceed**: Read the article body. The disguised link "one hop away" inside the paragraph text leads to the next page.

---

### Step 2: `middle.html` (Gateway 404)

- **No traps here.**
- **How to proceed**: Check the browser tab title suffix or look for faint diagonal watermark lines in the page — they reveal the next path.

---

### Step 3: `trail3.html` (Search Engine)

- **Dead-End Trap**: A "SysAdmin_Root" profile card with a red avatar and "VERIFIED" badge links to `deadend1.html`.
  - If you click it, you land on a convincing admin control panel. After **10 seconds**, a trap overlay appears: *"You fell into the trap! This was a dead end."* You must click "Return to Trail" to go back.
  - **AVOID THIS LINK.**
- **How to proceed**: Ignore the SysAdmin card. Look at the hidden link inside the "Se**e**ker" logo — the second "e" in "Seeker" links to `trail4.html`.

---

### Step 4: `trail4.html` (Social Profile / NomadCoder)

- **Clue for the next gate**: Find the **Pinned Post** section. It contains 11 sentences. The **first letter of each sentence** spells out the password:
  ```
  S - Systems are the foundation...
  A - Architects must design...
  N - Network latency is the...
  D - Data integrity checks...
  B - Backups are worthless...
  O - Orchestration tools only...
  X - X-ray inspection...
  I - Input validation is...
  N - Never deploy on Fridays...
  I - Idioms and patterns...
  T - Telemetry data is useless...
  ```
  **Password: `sandbox-init`**
- **How to proceed**: Click the avatar circle at the top of the profile card — it links to `trail5.html`.

---

### Step 5: `trail5.html` (Terminal Console)

- **Password Gate**: A full-screen overlay blocks the page with a "Sandbox Console Login" prompt.
  - Enter the password: **`sandbox-init`**
  - On success, the overlay fades away revealing the terminal.
- **How to proceed**: After passing the gate, click the green "CLI_ACTIVE" status badge in the top-right header — it links to `trail6.html`.

---

### Step 6: `trail6.html` (Recipe Blog / Grandma's Kitchen)

- **False Flag**: Scroll down to the **Ingredients** list. You will find:
  ```
  Secret ingredient: FLAG{gr4ndm4s_s3cret}
  ```
  This is a **decoy**. Do NOT submit it.
- **How to proceed**: Click the pie emoji "🍰" in the recipe title — it links to `trail7.html`.

---

### Step 7: `trail7.html` (Weather Dashboard)

- **Clue for the next gate**: Look for the **SEVERE WEATHER ALERT** banner at the bottom. It contains:
  ```
  Reference code: VAI-2049
  All reference codes are ROT13 secured for transmission.
  ```
  Apply **ROT13** decoding to `VAI`:
  - V → I, A → N, I → V
  - Decoded: **`INV-2049`**
- **How to proceed**: Click the glowing sun emoji "☀️" in the header — it links to `trail8.html`.

---

### Step 8: `trail8.html` (Payment Checkout)

- **Password Gate**: A full-screen overlay asks for "Invoice Number".
  - Enter the decoded invoice number: **`INV-2049`**
  - On success, the overlay fades away.
- **How to proceed**: After passing the gate, look for the diagnostic link to proceed to `trail9.html`.

---

### Step 9: `trail9.html` (Status Monitor)

- **Dead-End Trap**: A flashing red button at the bottom reads:
  ```
  ⚠️ CRITICAL: Emergency Override Available
  ```
  It links to `deadend2.html`.
  - If you click it, you see an emergency console with a countdown timer. After **10 seconds**, a trap overlay appears: *"Nice try! This was a decoy route."*
  - **AVOID THIS LINK.**
- **How to proceed**: Ignore the emergency button. Click the green dot "🟢" or the "99.98%" uptime text — it links to `trail10.html`.

---

### Step 10: `trail10.html` (AI Chatbot / Aegis)

- **False Flag**: The AI chatbot "reveals" a flag in its response:
  ```
  The flag you are looking for is: FLAG{a3gis_ai_s3cret}
  ```
  This is a **decoy**. Do NOT submit it.
- **Clue for the next gate**: In a later message, the AI mentions:
  ```
  Let me check archive papyrus-VII for that document...
  the archive reader requires that manuscript identifier to unlock Chapter XI.
  ```
  **Password: `papyrus-VII`**
- **How to proceed**: Click the user avatar "US" circle — it links to `trail11.html`.

---

### Step 11: `trail11.html` (Archive Reader)

- **Password Gate**: A full-screen overlay asks for "Manuscript Identifier".
  - Enter the identifier: **`papyrus-VII`**
  - On success, the overlay fades away.
- **How to proceed**: Click the "Chapter XI" label at the top of the document — it links to `trail12.html`.

---

### Step 12: `trail12.html` (Patch Controller)

- **False Flag**: After **3 seconds**, a modal automatically pops up saying:
  ```
  Patch Successfully Applied
  Your decryption flag: FLAG{p4tch_appl1ed_succ3ss}
  ```
  This is a **decoy**. Do NOT submit it. Click "Dismiss" or wait.
- **Clue for the final gate**: Read the **Patch Changelog** entries. The **first letter of each entry** spells the decryption key:
  ```
  L - Logging subsystem...
  A - Authentication module...
  B - Buffer overflow patched...
  Y - Yield optimizer...
  R - Runtime linker...
  I - Input sanitizer...
  N - Network stack...
  T - TLS certificate...
  H - Heap allocator...
  ```
  **Decryption key: `LABYRINTH`**
- **How to proceed**: Click the gear emoji "⚙️" — it links to `end.html`.

---

### Step 13: `end.html` (Decryption Terminal)

- **Password Gate**: A full-screen overlay asks for "Decryption Key".
  - Enter the key: **`LABYRINTH`**
  - On success, the overlay fades and the decryption animation begins.
- **Final Result**: Watch the progress bar fill as it traces through all 13 nodes. When it reaches 100%, the success screen displays the **real flag**:
  ```
  FLAG{y0u_followed_th3_tra1l}
  ```

---

## Summary of Traps & Clues

### False Flags (DO NOT SUBMIT)

| Page | False Flag | Where to Find It |
|------|-----------|-------------------|
| `start.html` | `FLAG{w3lcome_to_th3_start}` | HTML source comment at top |
| `trail6.html` | `FLAG{gr4ndm4s_s3cret}` | Recipe ingredient list |
| `trail10.html` | `FLAG{a3gis_ai_s3cret}` | AI chatbot response bubble |
| `trail12.html` | `FLAG{p4tch_appl1ed_succ3ss}` | Auto-popup modal after 3 seconds |

### Password Gates

| Gate Page | Password | Clue Location | Clue Type |
|-----------|----------|---------------|-----------|
| `trail5.html` | `sandbox-init` | `trail4.html` pinned post | First letter of each sentence |
| `trail8.html` | `INV-2049` | `trail7.html` weather alert | ROT13 of `VAI-2049` |
| `trail11.html` | `papyrus-VII` | `trail10.html` AI chat | AI states the archive ID |
| `end.html` | `LABYRINTH` | `trail12.html` changelog | First letter of each entry |

### Dead-End Traps (AVOID)

| Link Location | Trap Page | What Happens |
|---------------|-----------|--------------|
| `trail3.html` — "SysAdmin_Root" profile card | `deadend1.html` | Fake admin panel, trap overlay after 10 seconds |
| `trail9.html` — "Emergency Override Available" button | `deadend2.html` | Fake emergency console, trap overlay after 10 seconds |

---

## Correct Path (TL;DR)

```
start.html
  → middle.html
    → trail3.html  (AVOID deadend1.html link)
      → trail4.html  (read pinned post → password: sandbox-init)
        → trail5.html  (enter password)
          → trail6.html  (ignore false flag)
            → trail7.html  (decode ROT13 → password: INV-2049)
              → trail8.html  (enter password)
                → trail9.html  (AVOID deadend2.html link)
                  → trail10.html  (ignore false flag, note: papyrus-VII)
                    → trail11.html  (enter password)
                      → trail12.html  (ignore false flag, read acrostic → LABYRINTH)
                        → end.html  (enter password, get flag)
```

**The real flag: `FLAG{y0u_followed_th3_tra1l}`**
