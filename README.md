# Volunteer Drivers App

## Ticket System

We're using github's project system to organize our tickets. 

Tickets are simply github issues that have labels attached to them.

There's two ways of looking at issues. 

1) You can go to the issues tab in our github repo, and filter as needed.
2) Checkout our project kanban board. https://github.com/diglit/volunteer-toronto-volunteer-drivers-app/projects/1

### Taking tickets

When you start on the project, there are a few mandatory tickets that will already be assigned to you. After you complete those tickets, you're free to take tickets off the kanban board. Please take one ticket at a time, and do not take new tickets until your old tickets are merge into the code base.

#### 1) Start 
The way you take a ticket is you assign it to yourself. Do not assign tickets to yourself that are already assigned to other developers.

#### 2) In Progress
After you've assigned the ticket to yourself, go to the kanban board (listed above), and move the ticket into *In Progress*.

#### 3) Peer Review
When you complete the ticket, create a pull request for your work, add everyone on the team as reviewers, including the dev manager. Make sure to link the pull request to your ticket in the sidebar. Lastly, go to the kanban board and move your ticket to *Peer Review* (This might happen automatically if you link your issue, not sure yet).

#### 4) Back to In Progress
After your code has been reviewed, if it requires changes, the dev manager (or whoever asked for the changes) will move the ticket back to *In Progress*. When the developer completes those changes, they move the ticket back to *Peer Review*

#### 5) Approved
When the ticket is approved by 2 developers and a dev manager, you can merge it in. After you merge, move your ticket to done in the kanban board. That's a finished ticket!

## Asking Questions

We all want to help each other out, but we don't always have the time to do so. So if you have any questions, first I'd like to point you to this website: https://jvns.ca/blog/good-questions/ .

Second, I'd like you to try to think like a developer. If you're stuck, try to find keywords that point to why something isn't working, and search those keywords on Google, or Stackoverflow.

If you're still stuck, please open an issue with the label *help*. The title of the issue should be what your question is, and the description should include revelant details. Opening issues is important for two reasons. First, the issues will be documented so that if anyone else has the same problem, they'll be able to find the answer quickly. Second of all, if you create an issue, it's possible some of the other developers have already solved that issue and will be able to help you.

## WIP

If you want people to look at your code, but it's not fully ready to be reviewed for merge consideration, prefix for pull request with WIP like so:

````
WIP: feature/22 Add dancing monkey to the signup page
````

## Developer Environment

### Operating System

We recommend developing on a mac, or a linux based operating system like Ubuntu or Mint, or setting up WSL on your windows computer.

WSL: https://docs.microsoft.com/en-us/windows/wsl/install-win10
Dual Boot: https://itsfoss.com/install-ubuntu-1404-dual-boot-mode-windows-8-81-uefi/

### IDE

Front-end: We recommend using vscode as your interactive development environment (IDE).

https://code.visualstudio.com/download


### Shell Scripts

You can use what ever you want here to run shell scripts. It can be your operating system's base terminal system, or something else (I use iterm2 on my mac).

## Git Structure

We're going to be using (gitflow)[https://github.com/nvie/gitflow] structure for creating branches and merging.

One slight difference from gitflow is that we create subfeatures, so if you're interested in using a gitflow cli, this one supports subfeatures: https://github.com/petervanderdoes/gitflow-avh

The way we differentiate tickets (issues) that are subfeatures from features is through a ticket's label. The labels feature and shared are feature issues. The label subfeature is a subfeature issue.

```
git checkout develop
``` 

When we want to start working on a ticket
```
git checkout develop
and
# for feature tickets
git checkout -b feature/10     (where 10 is the issue number)
or
# for subfeature tickets
git checkout -b feature/sub10     (where 10 is the issue number)
```

Once the feature is completed, you add to branch
```
git add .
git commit -am '#number - commit message'
git push
```
*#number refers to ticket number*

And then go to https://github.com/diglit/volunteer-toronto-volunteer-drivers-app/pulls and create pull request.

Features are merged into develop

Subfeatures are merged into their parent (the issue that it is blocking, which should be available in the meta data)

Make sure the pull request passes all required tests if it's being merged into develop or a feature branch.

## Deployments

### DEV
Backend: http://vt-volunteer-drivers-app.herokuapp.com
Front-end: https://compassionate-noyce-78eb25.netlify.app/

### Optional
One thing I like to setup is git autocomplete to make it easier to switch branches.

Mac zsh: https://oliverspryn.medium.com/adding-git-completion-to-zsh-60f3b0e7ffbc

### Coding Principles

Don't make your code too DRY: https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction

Code Review: Best Practices: https://medium.com/palantir/code-review-best-practices-19e02780015f

## Ticket Structure

The labels and names for tickets (github issues) we use have very specific meanings. Please read the following descriptions below, as it will save you from having to redo work properly.

 *A quick note. Normally, a developer works on a feature in its entirety, but at DigLit we break the work down into subfeatures. The reason for this is because we need to be able to quickly approve code, and we need prevent as much as possible code from going stale.

### Feature

A feature is an addition to the software code. It may be user facing, it may be entirely internal. When a feature is completed, its related code is merged into the develop branch. All tickets stem from feature tickets. All tickets that are not 
features are subfeature tickets

### Subfeatures
#### Use Case

These tickets involve writing the steps that a user may take with respect to interacting with a new feature. Use case tickets are for user facing features. These use cases are written using the cucumber gherkin syntax.

#### E2E

These tickets involve writing the accompanying cucumber cypress tests for the above Use Case tickets.
#### Skeleton

The skeleton ticket is a minimalist representation of the development code needed to be written to complete a ticket. It involves the creation of files, and the creation of any significant functions or methods necessary to complete the feature. The skeleton does not involve writing functional code. Any functions created must can only include the naming and static typing of the arguments, and a mock return value (if the function calls for one). Any functions that require significant modifications should include the following tag:

````
// TODO-1234
// A description of the task
````

Where 1234 is the Development ticket number (which is discussed below).

#### Development

A development ticket is the writing of the code to complete the feature. If a skeleton ticket precedes it, it should implement the skeleton code. It should implement any functions that were created in the skeleton, and any todo items that were created in the skeleton. The development ticket is also responsible for ensuring that any tests that were created in the Use Case ticket pass, and any tests written in an accompanying Unit Test (discussed below) ticket passes.

#### Unit Test

These tickets are for writing the unit tests that accompany the development code.

### Overall Structure
```
Feature
|
|__Development
   |
   |__E2E
   |  |
   |  |__Use Case
   |
   |__Unit Test
      |
      |__Skeleton
         |
         |__Use Case
```