# GDGoC Bicol University Website Contribution Guide

This repository contains the source code for the organization’s official
website. All contributions must follow the workflow and standards defined in
this document to ensure consistency and maintainability.

Please read this entire guide before starting any work.

---

## Tech Stack

- TypeScript
- NextJS
- TailwindCSS

---

## Project Setup

### Prerequisites

- Node.js (LTS recommended)
- Git
- A package manager (npm, yarn, or pnpm)

### Clone the Repository

```bash
git clone git@github.com:GDGoC-BU/gdgoc-bu.git
cd gdgoc-bu
```

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

App runs at http://localhost:3000

### Development Workflow

1. Run `git fetch -p` to sync your local repo
2. Run `git checkout main` to ensure that you are on the main branch
3. Run `git pull origin main` to fetch any changes from the `main` branch
4. Run `git switch -c branch-name` to create and switch to a new branch
5. Branch name should follow the branch naming convetions below
6. Do your contribution. Make focused commits, and messages should adhere to the
   commit convetions below
7. Once the contribution is complete, run `git push origin branch-name` to push
   your branch to remote
8. Open Github, visit the repo, create a pull request, and add
   `@michaelcanonizado` as a reviewer (top right of PR creation)
9. Wait for the PR to be merged and address the PR review if there is any
10. Maintaner will delete the branch in remote after merging
11. Run `git branch -d branch-name` to delete the branch locally. ONLY DELETE IF
    THE BRANCH HAS BEEN MERGED! You will lose your work

---

## Branching Conventions

### Main branch:

- `main` ( stable & protected. No work should be done here directly! )

### Branch format:

```
<type>/<short-description>
```

### Allowed types:

- feat
- fix
- chore
- docs
- refactor

### Description

- should be in kebab-case

### Examples:

- feat/add-navbar
- feat/add-officer-profile
- fix/footer-alignment

### Notes:

- Always delete your local branch AFTER it has been merged to keep your local
  codebase clean. It will also be deleted in remote by the maintainers.
- ONLY DELETE AFTER THE BRANCH HAS BEEN MERGED to `main`. Else you will lose all
  your work in that branch.

---

## Commit Message Conventions

Follow the
[Angular Commit Convention](https://www.conventionalcommits.org/en/v1.0.0-beta.4/).

### Format:

```
type(scope): short description
```

### Allowed types:

- chore (general)
- feat (should only be made when an actual feature/component was made)
- fix
- docs (e.g: md files and comments)
- refactor
- build (adding/modifying dependencies)

### Scope:

Allowed Scopes:

- <page-name>-page
- <page-name>-page-<section-name>-section
- <component>
- <dependency>
- <folder-name>

- should be consistent with other scopes (use the file/folder name)
- if a change happens on multiple scopes, use the outermost scope. E.g:
  "feat(events-page): add events-card to events page"

### Description:

- Imperative
- Present tense

### When to commit?:

- Make commits granular (per task), but not too small.

### Examples:

- feat(home-page): add hero section
- fix(navbar): resolve mobile toggle issue
- feat(button): add button component
- fix(officer-profile): fix header alignment
- chore(tailwind): add color-brand-\* classes
- feat(layout): add navbar
- chore(assets): add gdgoc-logo-vertical-light.png
- feat(home-page-vision-section): add vision section
- chore(public): add gdgoc-logo-main.png

---

## Pull Request Guidelines

- Target `main`
- Ensure the project runs locally
- No lint or TypeScript errors
- Add screenshots for UI/component changes
- Check back to see if it was merged or for PR reviews (PR reviews must be
  resolved ASAP so your branch can be merged immediately)

---

## Coding Conventions

- Strict TypeScript
- Don't add dependencies without maintainer approval
- Variable names should be in full, don't mind if it gets long. E.g:
  officersDirectory not officersDir
- camelCase for variables, snake-case for files. Component name should match
  file name.
- Use the custom tailwind classes defined in @/styles/globals.css
- ALWAYS use regular functions (components, utils, nested functions, etc.)! Only
  use arrow functions for callbacks or any particular `this` syntax
- File names in kebab-case, function/variable names in camelCase
- If a component is used in more than 1 page, extract it to a separate file and
  put it inside `@/components`
- If a component is complex but is only used in 1 page, extract it to a separate
  file and put it inside the `_section` sub-folder inside the page's folder.
  Main page: `@/src/app/about-us/page.tsx`, extracted component:
  `/src/app/events/_sections/officers-directory/officer-profile.tsx`
- When contributing a component that is not yet implemented in pages, add it to
  a page to test the component. After completing the component, take a
  screenshot of the component and remove it from the page. Attach screenshot in
  the PR so maintainers can immediately see the component visually.
- Review the` @/styles/globals.css` to see the custom tailwind classes and read
  through its README
- Review the `@/app` structure. Sections of a page will be separated into their
  own component/file and used in that page. The page component SHOULD stay lean
  and orchestrate its sections. Complex sub-components of sections that are only
  used in that section shall be placed inside its section folder. E.g:
  `@/app/about-us/_sections/officer-directory/officer-profile.tsx`. If a
  component will be used in other pages/sections, keep them in
  `@/components/component-name/index.tsx`. If a sub-component of a section is
  not that complex (e.g: a nav link of the navbar), define them BELOW the
  section's main component.

- To fully grasp the coding convetions, briefly study the codebase and infer
  "obvious convetions" that were not mentioned, especially the `@/app` folder.
  You will see how everything is structured, and will give you actual examples
  of the convetions mentioned above.

---

## General Best Practices

- Small PRs
- Clean commits
- No unused code
- Minimal comments (let your code speak)

---

## Getting Help

Always communicate the progress of your contribution and try to stay within the
allotted time as other contributions might depend on yours. If you are stuck,
search online sources. But if no solution was found, ask in the messenger group
chat or pm the Software Engineer Lead.

Thank you for contributing!
