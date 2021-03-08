# Volunteer Drivers App - Front-End

## General Principles

BEFORE YOU DO ANYTHING ELSE: Please read the README.md file in the root directory (../README.md) or https://github.com/diglit/volunteer-toronto-volunteer-drivers-app/blob/develop/README.md

## Kanban Board
https://github.com/diglit/volunteer-toronto-volunteer-drivers-app/projects/1?card_filter_query=label%3Afront-end

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

## Authors

Leigh Silverstein \
Oksana Samokhvalova \
Wendy Chen \
Chris Cottier\
Yinyin Lu \
Haris Ahmad
