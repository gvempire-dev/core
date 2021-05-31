---
date: '2020-03-16T05:35:07.322Z'
title: 'Time Machine v1'
excerpt:
  'When developing software, your mindset and approach can make or break your
  project. Sure, you can always rewrite code later, however writing it wrong the
  first time can cause you to spend valuable time down the line re-inventing
  your wheel.'
coverImage: '/assets/blog/preview/cover.jpg'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

> Bringing more hope to a life near you

## Introduction

The Institute for Love and Time (TILT) is an organization focused on creating
unconditional love and time travel applications for worldwide benefit. You can
read more about unconditional love and time travel on their
[FAQ](https://www.loveandtime.org/faq).

## Context

TILT came to us with the need for a completely custom PWA application. The
application was to be used to study the effectiveness of the time travel method
the application used to help someone connect with themselves and gain more hope
in their lives. With a focus on people with experience in incarceratin,
addiction, sexual assault, and other traumas we set out to build **Time Machine
1** (TM1)**.**

Some notable focus points of TM1:

- PWA for maximum cross-compatability
- Ability for user log in with a user ID and password. Option to stay logged in
  on their phone.
- Ability for user to hear a pre-recorded audio message.
- Ability for users with a certain status to be prompted to record a message on
  their phone that they will be able to listen to later.
- Ability for user to receive notifications to check in 2X daily and rate their
  life in three areas using a slider using a 1-10 scale anchored with icons
  designed by a designer, and notifications to complete surveys.
- Ability to track user’s progress through several status levels and send to URL
  for a survey at certain pre-arranged status levels.

## Goals and Requirements

Given the context, what were the goals and requirements? These are likely to be
more specific than the vision, mission and values of the organisation and have
some link to the use of free software.

With the requests (and a few others) in place, we set out the stack for the app
to function.

We used Next.JS [(a web framework built on top of React.JS)](http://nextjs.org)
to handle the UI. We utilized
[Google Cloud (Firebase)](https://firebase.google.com/) for some of it's
serverless features like Firestore, Cloud Functions, and Storage.
[Sendgrid](https://sendgrid.com) handled all of our email notifications.
[FormSite](https://www.formsite.com/) simplified our survey process.

Some other tools and technologies used:

- [Typescript](https://www.typescriptlang.org/) - Typed Javascript
- [Jest](https://jestjs.io/) - Testing
- [Emotion](http://emotion.sh) - Css-in-JS Styling
- [Framer-Motion](https://www.framer.com/motion/) - Animation Library
- [Sweet Alert 2](https://sweetalert2.github.io/) - Alerts and Toasts

## Implementation

We faced quite a few unexpected challeneges when buiilding out TM1. Most of the
big ones centered around Safari's lack of support for PWAs.

First, we had issues loading audio into Safari. If you didn't know, all iPhones
run Safari regardless of whatever browser app you choose to open. In order to
load media into your web page, you have to be very careful not to trip any of
the auto-play inhibitors. A user must interact with your site in order to load
and play audio. This doubles when your also attempting to draw a canvas element
to represent the live audio playing.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/04351f68-89ba-4540-ad4a-110ca98f2769/Screen_Shot_2020-11-19_at_5.22.59_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/04351f68-89ba-4540-ad4a-110ca98f2769/Screen_Shot_2020-11-19_at_5.22.59_PM.png)

`Turn Microphone On` ensures that a user interacts with our page before
recording audio.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57689f82-4612-4990-a31f-970ca3f4355f/Screen_Shot_2020-11-19_at_5.23.18_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57689f82-4612-4990-a31f-970ca3f4355f/Screen_Shot_2020-11-19_at_5.23.18_PM.png)

Once the user clicks allow, we can begin recording their audio.

Then, we ran into issues with notifications not being sent correctly. This led
into a deep dive on the way that Javascript handles time and our engineers with
one more piece of knowledge in under their belts.

Firebase's Cloud Function were absolutely vital in this project. With them, we
were able to do things like:

- encode recorded audio to mulitple formats on the fly
- send notifications based on a user's status
- keep our dev and staging environment free from stale accounts

Using a serverless model allowed us to keep costs down as we only pay for code
that's running.

Firestore's Web Socket connections allowed us to create a real-time application
for our users. This is especially useful for the task-based approach the app
uses. This means that when a user completes a task, a refresh is not needed in
order for the page to be updated to reflect this change.

If we were to redo the project, there are a couple things we would approach
differently. For example, having a more centralized store. Currently, different
features of the app has their own store. this was beneficial in the beginning
when features were changing constantly and this approach was very agile and
flexible. Now that v1 is done, and the project continues to grow larger, a more
centralized store for the application would be helpful.

## Current status

Outline the current situation if the project is on-going emphasising the
continuing role of free software.

Currently, the projerct is running is first set of trials, with great result so
far! We are continuing to work with TILT on this project and would love for you
to follow along.

## Lessons Learned

This project allowed us to reevaluate a few things that we knew about software
development.

Our biggest takeaways so far are:

- Document, document, document!
- Though there is generally another solution, anything can be hacked together
  with enough time.
