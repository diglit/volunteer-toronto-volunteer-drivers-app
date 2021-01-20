# Volunteer Drivers App - Front-End

## Ticket System

We're using github's project system to organize our tickets. 

Tickets are simply github issues that have labels attached to them.

There's two ways of looking at issues. 

1) You can go to the issues tab in our github repo, and filter as needed.
2) Checkout our project kanban board. https://github.com/orgs/diglit/projects

### Taking tickets

When you start on the project, there are a few mandatory tickets that will already be assigned to you. After you complete those tickets, you're free to take tickets off the kanban board. Please take one ticket at a time, and do not take new tickets until your old tickets are merge into the code base.

1) The way you take a ticket is you assign it to yourself. Do not assign tickets to yourself that are already assigned to other developers.

2) After you've assigned the ticket to yourself, go to the kanban board (listed above), and move the ticket into *In Progress*.

3) When you complete the ticket, create a pull request for your work, add everyone on the team as reviewers, including the dev manager. Make sure to link the pull request to your ticket in the sidebar. Lastly, go to the kanban board and move your ticket to *Peer Review*

4) When the ticket is approved by 2 developers and a dev manager, you can merge it in. After you merge, move your ticket to done in the kanban board. That's a finished ticket!

## Developer Environment

### Operating System

We recommend developing on a mac, or a linux based operating system like Ubuntu or Mint, or setting up WSL on your windows computer.

WSL: https://docs.microsoft.com/en-us/windows/wsl/install-win10
Dual Boot: https://itsfoss.com/install-ubuntu-1404-dual-boot-mode-windows-8-81-uefi/

### IDE

We recommend using vscode as your interactive development environment (IDE).

https://code.visualstudio.com/download


### Shell Scripts

You can use what ever you want here to run shell scripts. It can be your operating system's base terminal system, or something else (I use iterm2 on my mac).

## Git Structure

We're going to be using (gitflow)[https://github.com/nvie/gitflow] structure for creating branches and merging. We'll be creating all of our branches off of develop.
```
git checkout develop
``` 

When we want to start working on a ticket
```
git checkout develop
git checkout -b feature/10     (where 10 is the issue number)
```

Once the feature is completed, you add to branch
```
git add .
git commit -am '#number - commit message'
git push
```
*#number refers to ticket number*

And then go to https://github.com/diglit/volunteer-toronto-volunteer-drivers-app/pulls and create pull request

Make sure the pull request passes all required tests

### Optional
One thing I like to setup is git autocomplete to make it easier to switch branches.

Mac zsh: https://oliverspryn.medium.com/adding-git-completion-to-zsh-60f3b0e7ffbc


## Folder Structure

### Components

/shared
  /components
    /featureName
      /ComponentName
        index.tsx
        index.test.tx
        styles.module.scss
        utils.ts
        /ChildComponentName
          index.tsx
          ...
  /redux
    /storeKeyName
      index.ts
      selectors.ts
      (actions.ts optional)



## Key Technologies

### Application State

* redux
* react-redux
* @reduxjs/toolkit

### UI

* @material-ui/core

## Forms

We're going to be using react-hook-form with yup to handle form submissions
https://react-hook-form.com/

We'll be using the yup implementation of this hook system.
https://github.com/react-hook-form/resolvers#yup

## Tests

For testing, we're using jest with testing-library (react version). Unlike other testing libraries, it's very opinionated. 

Generally, I would *avoid* using classnames to find elements, as they're more likely to change. I also find that it's helpful to load as much of the app as possible, which means we're doing mostly integration tests as opposed to unit tests.

https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
https://testing-library.com/docs/react-testing-library/cheatsheet/
https://testing-library.com/docs/guide-which-query/

## Redux

I think the guys working on redux toolkit know what's up, so lean heavily on their helper functions. 

Namely createSlice

https://redux-toolkit.js.org/introduction/quick-start
https://redux-toolkit.js.org/tutorials/basic-tutorial
https://redux-toolkit.js.org/usage/usage-guide
https://redux-toolkit.js.org/usage/usage-with-typescript

### Selectors

We'll be using reselect library to grab data from the redux store. It's useful if you need to modify the data from the store before using it to display information to the end user. It's also a useful tool to make grabbing data from the store a little more consistent.

https://github.com/reduxjs/reselect

### Middleware

I've added redux-thunk for api requests
https://github.com/reduxjs/redux-thunk

and redux-devtools
https://github.com/reduxjs/redux-devtools

## Nextjs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Coding Principles

Don't make your code too DRY: https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction

## Authors

Leigh Silverstein \
Oksana Samokhvalova \
Wendy Chen \
Chris Cottier\
Yinyin Lu
