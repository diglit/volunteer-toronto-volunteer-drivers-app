# Volunteer Drivers App - Front-End

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



## Key Technologies

### Application State

* redux
* react-redux
* @reduxjs/toolkit

### UI

* @material-ui/core

## Authors
Leigh Silverstein

## Pull Requests

When you complete tickets and create a pull request for your work, you'll want to add two reviewers from the team, and the dev manager. When the ticket is approved by all three people, you can merge it in.


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

