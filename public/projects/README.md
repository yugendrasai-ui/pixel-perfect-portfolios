# Projects folder

Each project has its own folder. To replace a project's images, just drop your
own files into the right folder (keep the same filenames):

```
public/projects/
├── project-1/
│   ├── desktop-preview.png   ← full desktop screenshot of the website
│   ├── mobile-preview.png    ← phone screenshot of the website
│   └── thumbnail.png         ← small preview image (used on cards)
├── project-2/
├── project-3/
└── project-4/
```

To **edit project details** (title, description, tech stack, live URL, GitHub link),
open and edit:

```
src/data/projects.ts
```

To **add a new project**:

1. Create a new folder, e.g. `public/projects/project-5/`
2. Add `desktop-preview.png`, `mobile-preview.png`, `thumbnail.png` inside it.
3. Open `src/data/projects.ts` and add a new entry (copy one of the existing ones
   and update the values).

To **remove a project**: delete its entry from `src/data/projects.ts` (and
optionally delete its folder here).
