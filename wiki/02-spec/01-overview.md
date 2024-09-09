# Overview

Hopscotch projects are JSON files. They are stored on the mobile app as `.hopscotch` files.

## Anatomy

Projects are essentially containers inside of containers:

- [Scenes](/wiki/02-spec/scene.md) contain a list of [object](/wiki/02-spec/object.md) IDs (pointers).
  - [Objects](/wiki/02-spec/object.md) contain a list of pointers to [rules](/wiki/02-spec/rule.md) and [custom rule instances](/wiki/02-spec/custom-rule-instance.md).
    - [Custom rule instances](/wiki/02-spec/custom-rule-instance.md) are checked first by the web player. They contain an [ability](/wiki/02-spec/ability.md)'s pointer.

## Nuances

[Custom rule instances](/wiki/02-spec/custom-rule-instance.md) have the same attributes as [objects](/wiki/02-spec/object.md).

[Rules](/wiki/02-spec/rule.md) contain a pointer to an [ability](/wiki/02-spec/ability.md).

[Abilities](/wiki/02-spec/ability.md) contain blocks, which can themselves contain abilities.
