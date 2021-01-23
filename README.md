# Volunteer Drivers App

## Ticket System

We're using github's project system to organize our tickets. 

Tickets are simply github issues that have labels attached to them.

There's two ways of looking at issues. 

1) You can go to the issues tab in our github repo, and filter as needed.
2) Checkout our project kanban board. https://github.com/orgs/diglit/projects

### Taking tickets

When you start on the project, there are a few mandatory tickets that will already be assigned to you. After you complete those tickets, you're free to take tickets off the kanban board. Please take one ticket at a time, and do not take new tickets until your old tickets are merge into the code base.

#### 1) Start 
The way you take a ticket is you assign it to yourself. Do not assign tickets to yourself that are already assigned to other developers.

#### 2) In Progress
After you've assigned the ticket to yourself, go to the kanban board (listed above), and move the ticket into *In Progress*.

#### 3) Peer Review
When you complete the ticket, create a pull request for your work, add everyone on the team as reviewers, including the dev manager. Make sure to link the pull request to your ticket in the sidebar. Lastly, go to the kanban board and move your ticket to *Peer Review*

#### 4) Back to In Progress
After your code has been reviewed, if it requires changes, the dev manager (or whoever asked for the changes) will move the ticket back to *In Progress*. When the developer completes those changes, they move the ticket back to *Peer Review*

#### 5) Approved
When the ticket is approved by 2 developers and a dev manager, you can merge it in. After you merge, move your ticket to done in the kanban board. That's a finished ticket!

## Asking Questions

We all want to help each other out, but we don't always have the time to do so. So if you have any questions, first I'd like to point you to this website: https://jvns.ca/blog/good-questions/ .

Second, I'd like you to try to think like a developer. If you're stuck, try to find keywords that point to why something isn't working, and search those keywords on Google, or Stackoverflow.

If you're still stuck, please open an issue with the label *help*. The title of the issue should be what your question is, and the description should include revelant details. Opening issues is important for two reasons. First, the issues will be documented so that if anyone else has the same problem, they'll be able to find the answer quickly. Second of all, if you create an issue, it's possible some of the other developers have already solved that issue and will be able to help you.

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

## Coding Principles

Don't make your code too DRY: https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction