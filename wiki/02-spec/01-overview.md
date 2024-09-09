# Overview

Hopscotch projects are essentially containers inside of containers:

- **Scenes** contain a list of **object IDs** (pointers).
  - **Objects** contain a list of **pointers** to either **custom rule instances** or **rules**.
    - The player will check for **custom rule instances** first, which contain a **pointer to an ability**.

## Nuances

Custom rule instances have the same attributes as objects.

Rules contain a pointer to an ability.

Abilities contain blocks, which can themselves contain abilities.

