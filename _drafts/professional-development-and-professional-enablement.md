---
layout: post
title: NBA Top Five In
subtitle: The story of a project that helps NBA fans take pride in their team's year...
date: 2019-05-25 07:00:00 +0000
image: "--"
image-description: "--"
tags: design

---
## What is NBA Top Five In?

I’ve hypothesized that although a team may not be great in the popular statistical categories, like wins or points, there are redeeming qualities elsewhere that can be bragged about, like ties per game or points in the paint.

It’s a silly idea, but one that allowed me to get more experience using Sketch, NodeJS, & VSCode to create an infographic. It also gives the information about the teams more of a narrative compared to current statistics sites that provide table-upon-table of stats.

The key questions I had to answer for this project were:

    Where am I going to get NBA data?
    Will the data be formatted the way I need it to be? 
    If the data is not formatted the way I need it to be, how would I go about formatting it?
    How will I rank them even after I get the data?
    What is the interface going to look like?
    Does this already exist?

The answer to that last question is kind of… and when I say kind of, I mean yes. That said though, don’t let the product existing stop you from building it yourself! — You may find yourself solving different sets of problems than the other products with what you build or solving the existing products’ problems even better.

As for the other questions, let me take you into the project…

### Getting NBA data...

My general API experience was minimal, but I knew it'd be the best route to try this project as opposed to copy-pasting a state table from NBA.com... I didn’t know much about how to use an API, but luckily for this project I was able to find a very clear-cut API that had good examples I could build upon.

RapidAPI is a repository of various APIs people can access, and I was lucky enough to find API-NBA in there. They had code snippets I could use and after installing all the node modules and such, I was quickly able to do some file outputs with JSON data that I could then use directly for the site. It was fortunately much easier than I anticipated.

I also realized that for the website, I didn't have to call upon the API ongoing, but instead I only needed the API to then format the data for my own use, which was great.

### Formatting NBA data (NodeJS, Javascript, JSON)

Once I had a handle on how to use the API to retrieve data, the next step was getting the data out of just printing the output in the terminal, but writing it to a file or database so I could “[Touch it, bring it, pay it, watch it, Turn it, leave it, start – format it](https://genius.com/1690119)”, specifically format it... (in fact, I only had to format it, but shout out to Daft Punk and Busta Rhymes still).

When learning how to retrieve the data, it was great to see the parallels with how I’ve previously used Python in how I could use NodeJS. Prior to this project, NodeJS seemed fairly ambiguous to me, but looking into more of the use cases and documentation, how to use NodeJS became clearer. It began to resonate with me the value of being able to use the same programming language on the frontend and backend.

From there, I had to do some string composition, file I/O, and with that I had some JSON data that I could display.

### Version 0 (VSCode, Github, HTML, CSS, Javascript)

I had a small amount of team data available and I thought it'd be fine to start scaffolding out what the website could look like with my current data as well as get back into rhythm with version control and writing HTML.

I started by just outputting the team stats I had in a table:

With that down, I was able to iterate on that code to make it more systematic and less hard-coded.

In further adding additional "rank-ables" into the data set in my rank creation functions, I found a quirk in what the data actually represented. There's a "streak" field in the Standings API data, and I came to find out it was not indicative of whether it is a wins or losses streak, where by the eyeball test, Cleveland ranked highest with "10"...losses.

It also wasn't indicative of the recency of this streak; if it's all-time for the season or of the last 10 games. Ended up being the latter in this scenario, making the statistic doubly-less interesting. (I take it back!; there's a "winStreak" T/F field that tells you which direction that streak number goes).

Quirks like this would rear their ugly head again...

### Moar framework (Bootstrap)

I eventually got a good amount of data out of the API to display and started to make it more readable using Bootstrap for styling. This was followed up with trying to build sortability into the table. Then I found [Bootstrap Table](https://bootstrap-table.com/)). Made building the table much easier and it resolved something I thought would be clever in a quite simple way. Shout out to frameworks and stuff.

### Needs some order (Trello)

At this point, I realized I wasn't really moving towards my initial mockup with that I was doing.

This project needed some order. Once I got my hands dirty, I noticed I got to a point where I was trying to polish what would become a nearly 100-column table, and I knew that wasn't my goal anyway.

That said, I employed a piece of paper to start jotting down actions to clear the path to the final result: \[written gameplan\]

I then translated that into cards in Trello to get in the practices of rewarding myself. See, I was getting in touch with the "accomplishies"; some gross combination of the fuzzies and feeling accomplished.

\[trello board v1 screenshot\]

This helped me avoid the rabbit hole of trying to fix table columns in the DOM for better scrolling and put more focus on things like getting all the data rounded up and the simplified team views of the data.

### ..and then I threw order away (Trello, whiteboards)

I never resorted back to Trello because one weekend, I was like “you know what, let me just break this down based on the interface I drew”:

\[whiteboard image\]

and I realized the project was more straightforward than I anticipated and I got to work on the main view of the site:

\[images\]

### The solid construction of expertise

Imagine if Serena Williams did not have practice within her profession. Repetition of common tactics and experimentation with new techniques to improve her on-court performance is likely a key part of her getting prepared for tennis tournaments, and all of those are happening outside of competition.

Mirroring that idea in the workplace, of course, it may seem out of the realm of imagination to have a majority of the effort an employee does not be a direct, quantifiable output, but all I would argue for is increasing the balance between time spent developing skills and time spent producing.

### Flow

Athletes who practice and tinker with new techniques can also find themselves in flow states, where the game feels like it is going slower and can identify the finest details of their performance to make quick changes.

As I type this, I remember when [LeBron James hit that running off-balance floater to win the game in the Eastern Conference Finals in 2018](https://www.sbnation.com/lookit/2018/5/6/17324448/lebron-james-game-winning-floater-sportscenter-top-10) (If you don't care for the LeBron anecdote, replace it with Steph Curry and his half-court pull-up jumpers, or whatever). He was in "flow." Even if this wasn't a shot he explicitly practiced, he's had so many opportunities to tinker with his skillset outside of the actual game and have the confidence to take and make this shot.

Surely if I was still drawing boxes and arrows like I was at the outset of my career and didn't find time to synthesize what I've learned to better my arrow-box-drawing skills, my performance vs. my experience could be put into question. Some team members may be better at that synthesis than others, so giving those who may not be as sharp at developing their skills while producing more time to get better can be valuable in improving their performance.

These benefits of practice in sports can surely apply to other domains, including product development. It is not a concept we're unfamiliar with either, with the whole homework thing from our schooling days and all...

## Where's our practice?

It can be challenging in the workplace to find opportunities to "practice," or be enabled to exercise new things you've learned. Of course, you can use free time to work on side projects as well as venture out on your own to enable yourself professionally, but it seems like the workplace model needs an explicit shift to incorporate professional enablement in work alongside professional development programs like trainings and seminars.

Professional enablement is an investment in teams. Incorporating professional enablement in the workplace does require "slowing down" output. Much of the process of being creative and producing something new should be experimentation though, so making space to do so amongst production work can be valuable for individual and team growth.

Companies provide hack days, 10% time, and other activities that allow team members to work on something outside of the scope of their current work. These programs are fine, but if companies want to build talent, they should look to invest explicitly in professional enablement that has more of a natural flow in one's work, the same way practice has a natural flow for athletes, and heck, most-all other aspects of life: cooking, wellness, finances, etc.

## Professional enablement can be our practice.

Most opportunity to do professional enablement is created without systems in place to do so at work. Even high-up professionals will advise you and your team members to "go out and prove the importance of what you want to do!"; that "visionary" advice of enabling yourself to do work. It's well-meaning, but why not put the onus on the company as well as the team member?

Make it easier for your team members to get it with some professional enablement. Showing your team members that you're willing to invest in this and make space for them to build their talents will be recognized as mutually beneficial, for sure.

👍🏿✌🏿