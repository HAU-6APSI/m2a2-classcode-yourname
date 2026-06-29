# Module 2 - Activity 2 - JSX, Components, and Props

> **Builds on your Hello React warm-up (Activity 1).** Now you pass data into
> components with **props** and render a list. You are **done when `npm test` is
> all green**.

You will build three small components and make their tests pass. This is where the JavaScript from Module 1 becomes user interface:
components are functions, props are objects, and lists are rendered with
`.map()`.

## Read first

The concepts for this activity live in your **course workspace repo** (not in
this repo, so they are never out of date here):

- `content/m2-react/README.md` -> **Activity 2** section (the hands-on how-to)
- `content/react-theory/03-jsx-and-the-component-model.md` (JSX, components, props)
- `content/react-theory/01-what-is-react.md` (the big picture)

You do not need to memorize anything. Skim, then build.

## What to do

### 1. Fill in your details

Open [`student.json`](student.json) and fill in **every** field:

```json
{
  "classCode": "6APSI",
  "fullName": "Juan Dela Cruz",
  "studentNumber": "2026-12345",
  "studentEmail": "juan.delacruz@hau.edu.ph",
  "personalEmail": "juan@example.com",
  "githubAccount": "juandelacruz"
}
```

> **Keep `student.json` identical across all your activities.** The autograder
> cross-checks these fields between your repos, and the `classCode` must match
> the one in your repo name.

### 2. Implement the components

Each file in [`src/components/`](src/components/) has a comment describing the
concept, a pointer to the reading, and the exact requirement. Replace each
`// TODO` (and the `return null` placeholder) with working code so its tests
pass.

| File | Builds | Concept |
| --- | --- | --- |
| [`Greeting.jsx`](src/components/Greeting.jsx) | a heading that greets a `name` prop | components + props |
| [`Card.jsx`](src/components/Card.jsx) | a product card from `title` / `price` props | reading multiple props |
| [`ProductList.jsx`](src/components/ProductList.jsx) | a list from a `products` array prop | `.map()` + keys |

Do not change the file names or the `export default`. The tests import them by
path.

## Set up your repo

Create **your own copy** of this activity from the template. Do not work in the
template itself.

1. **Create from the template.** Open the template repo and click
   **Use this template -> Create a new repository**.
2. **Set the owner to the `HAU-6APSI` course org**, not your personal account.
3. **Name it** `m2a2-<classcode>-yourname` (e.g. `m2a2-1234-juandelacruz`). The
   `<classcode>` must match the one in `student.json`.
4. **Make it Private.**

Then clone **your** new repo and work there:

```bash
git clone https://github.com/HAU-6APSI/m2a2-<classcode>-yourname.git
cd m2a2-<classcode>-yourname
npm install
```

## Running the app and the tests

See your components in the browser:

```bash
npm run dev          # open the printed http://localhost:5173 URL
```

Run the tests (each passing test is a point):

```bash
npm test             # run once
npm run test:watch   # re-run on every save while you work
```

> **Write your code in `src/` only.** The files in `test/` are how your work is
> graded; leave them as they are.

## Confirm your submission

Your repo **is** your submission. **Pushing your work is how you submit it.**

```bash
git add -A
git commit -m "✨ Activity 2 complete"
git push
```

Pushing triggers the **Autograde** workflow. Open the **Actions** tab, open the
latest run, and confirm the green check and the "N / N tests passed" summary. The
run also publishes a **screenshot of your running app** (linked from the
summary) so you can see what you built.

## 💻 Work in a Codespace (recommended)

A **Codespace** is a complete dev environment that runs in the cloud, so you do
not have to install Node, Dart, or anything else on your own laptop. This repo is
already configured: open a Codespace and everything you need is ready.

**Open one:** click the green **Code** button → **Codespaces** tab → **Create
codespace on main**. The first launch takes a minute to set up; after that it is
instant. Then run the activity from its terminal exactly as described below.

**Use it in VS Code (recommended).** It works in the browser, but it is nicer in
the desktop app: install the **GitHub Codespaces** extension in VS Code, or from
the running Codespace click the menu (☰) → **Open in VS Code Desktop**. Same
environment, your own editor.

### ⏱️ Make your free hours last (please read)
Your GitHub Education account includes a generous but limited monthly Codespaces
allowance. Three habits keep you from wasting it:

1. **Set your idle timeout to 10 minutes.** Go to
   **github.com/settings/codespaces → Default idle timeout → 10 minutes → Save.**
   A Codespace keeps running (and spending your hours) when you walk away; this
   makes it auto-stop after 10 idle minutes.
2. **Stop it when you finish - don't just close the tab.** Closing the browser
   leaves it running. Stop it at **github.com/codespaces → ••• → Stop
   codespace**, or from inside the editor open the **Command Palette**
   (`Ctrl`/`Cmd`+`Shift`+`P`, or **F1**) and run
   *Codespaces: Stop Current Codespace*.
3. **Delete the Codespace once you've submitted this activity.** Every activity
   gets its own Codespace, so old ones pile up and use your storage. After your
   final push: **github.com/codespaces → ••• → Delete.** You can always recreate
   it later from the green **Code** button.
