# Linux Learning Lab

![Production Build](https://github.com/uclaacm/linux-lab/workflows/Production%20Build/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4932fc43-c02a-4724-bfc0-0253ac602219/deploy-status)](https://app.netlify.com/sites/teach-la-ts-react-starter/deploys)

<img width="1440" alt="Tux's Great Adventure. Join Tux on an adventure through Antarctica and learn the basics of Linux!" src="https://user-images.githubusercontent.com/65837446/210927885-aeb39eb8-98e4-41a2-b8b6-9723dfe335ef.png">

## Overview 🐧

Linux Learning Lab is a collaboration between [ACM Teach LA 🌱](https://teachla.uclaacm.com/) and [ACM Cyber 🔐](https://acmcyber.com/). ACM Cyber uses this app to train members in the basics of Linux navigation—a crucial tool for cybersecurity professionals and often used in Capture-the-Flag competitions. This app is also great for COM SCI 35L students and anyone wanting to learn the basics of Linux!

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="https://github.com/uclaacm/linux-lab/#overview">Overview</a></li>
    <li><a href="https://github.com/uclaacm/linux-lab/#about-the-tech">About the Tech</a></li>
    <li><a href="https://github.com/uclaacm/linux-lab/#setup">Development Setup</a></li>
    <li><a href="https://github.com/uclaacm/linux-lab/#contribution-workflow">Contribution Workflow</a></li>
    <li><a href="https://github.com/uclaacm/linux-lab/#licensing-and-attributions">Licensing and Attributions</a></li>
  </ul>
</details>

## About the Tech 🔎

This React micro-app includes:

- GitHub Actions automatically set up for testing and linting builds
- a default Dependabot config for `yarn` (with monthly audits)
- Netlify redirects set up for multi-route SPAs
- Webpack that helps bundle JS/TS files for browser usage
- Husky for Git Hooks which enforces linting rules for files on commit
- ESLint for .TS and .TSX files
- StyleLint with SASS guidelines for CSS, SASS, SCSS stylesheets
- [Contributor Covenant](https://www.contributor-covenant.org/) in `CODE_OF_CONDUCT.md`
- some documentation for new people!

## Setup 🏗

We'll use a really common Node.js project workflow + Yarn!
First, let's clone our repository and change into the appropriate directory:

```
git clone https://github.com/uclaacm/linux-lab.git
cd linux-lab
```

If you haven't already, install Node.js. The installation instructions will be different based on which platform you're running. It's heavily advised to install your Node.js using NVM (Node Version Manager) because it's easy to manage a standardized version and update it as needed.

### macOS or Linux 🍎

> Instructions for installing NVM on macOS and Linux (including WSL) are [here](https://github.com/nvm-sh/nvm#installing-and-updating).
>
> At this point you can run `nvm install`. Assuming you've already `cd`ed into the correct directory as mentioned earlier, this will download the LTS (Long-Term Support) version of Node.js for you. Then, run `nvm use` to make sure you've switched to the right version; if it tells you `Now using Node v16.13.2` or something similar, you're good to go!

### Windows 🪟

> If you're on Windows, you can use NVM for Windows, a separate version manager whose installation instructions can be found [here](https://github.com/coreybutler/nvm-windows#installation--upgrades). Once you've done that, you can run `nvm install 16.13.2` to install the LTS version of Node.js, and `nvm use 16.13.2` to switch to it.

Next, we want to install yarn dependencies. If you don't already have yarn installed:

```
npm install --global yarn
```

Then install our dependencies!

```
yarn install
yarn prepare
```

If the above commands don't work even after installing yarn via npm, check this [npm installation guide](https://classic.yarnpkg.com/en/docs/install/#mac-stable), click on alternatives, choose your operating system, and follow the steps there.
Note that we handle the yarn and npm conflict issues within the `.gitignore` we set up so don't worry about it!

### Running the App 🏃🏻

To start our app, run `yarn start`!

```
yarn start
```

And to build our project for production (with CRA and Webpack's bundling with all that goodness),

```
yarn run build
```

## Contribution Workflow 💻

Thanks for your interest in contributing to Linux Learning Lab! Here's a quick guide on how to get started after cloning this repository.

1. Before making any changes, run `git pull` to ensure your local repository is up to date.
2. Make a new branch for your changes. `main` is a protected branch, **so you cannot push to it**.

```
git checkout -b firstName/feature
```

3. Beep boop away!
4. Before you push, make sure your app runs with `yarn start`. If there are any errors, our CI/CD service will reject your build.
5. Run `yarn lint-fix` so that the linter can format our code the way such that it passes the style checks.
6. Once you're ready, stage and commit your changes!

```
git add .
git commit -m "description of your changes"
git push
```

7. Make a [pull request](https://github.com/uclaacm/linux-lab/pulls) with your changes, and let a project lead know.

   > Netlify has a neat feature called "Deploy Previews" that give you a link to preview your changes; [see the blog post](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) for more info!

8. If your code passes code review, then we can merge it into `main`. Congratulations! If you'd like, it's now safe to delete your branch/fork.

## Licensing and Attribution 🪪

This project and its code are licensed under the MIT License. You're free to use them however you wish, though we'd love to hear from you if you found this useful!

Developed by [Archie Datta](https://github.com/archishadatta), [Arush Ramteke](https://github.com/ArushRam), [Benson Liu](https://github.com/bliutech), [Jason Tay](https://github.com/jason2020), [Lily Zhou](https://github.com/lzhou0714), [Rahul Mallick](https://github.com/r-mallick), [Rishikesh Samant](https://github.com/RoyalAscot1), [Snigdha Kansal](https://github.com/snigdha-kansal), [Victoria Zhong](https://github.com/vickyz223), and [Juliet Zhang](https://github.com/zhangjuliet). Designed by Angela Ling.
