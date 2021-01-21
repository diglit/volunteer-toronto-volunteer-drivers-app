# Volunteer Drivers App

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