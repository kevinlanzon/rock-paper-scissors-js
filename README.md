[![Build Status](https://travis-ci.org/kevinlanzon/rockPaperScissors-js.svg?branch=master)](travis-ci.org/kevinlanzon/rockPaperScissors-js)
[![Code Climate](https://codeclimate.com/github/kevinlanzon/rockPaperScissors-js/badges/gpa.svg)](https://codeclimate.com/github/kevinlanzon/rockPaperScissors-js)

Rock, Paper, Scissors
========

A JavaScript version of Rock, Paper, Scissors. My goal in the building of this game was to create the game logic using minimal conditional statements whilst making it easily extendable to include the Lizard and Spock choices for weapons.

###User story

####Title: Waste an hour having fun
- As a frequent games player,
- I’d like to play rock, paper, scissors
- So that I can spend an hour of my day having fun.

####Acceptance Criteria
- [x] Can I play Player v Computer?
- [x] Can I play Computer v Computer?
- [x] Can I play a different game each time?

Technologies used
----
- JavaScript
- Jasmine
- Travis CI
- HTML5
- CSS3

How to run
----
```sh
$ git clone git@github.com:kevinlanzon/rockPaperScissors-js.git
cd rockPaperScissors-js
$ open index.html
```

How to run tests
----
```sh
$ open SpecRunner.html
```
File Structure
----------------
```
- css
  - normalize.css
  - style.css
- img
- js
  - Computer.js
  - Display.js
  - Game.js
  - Player.js
- lib
  - jasmine-2.3.4
- spec
  - RockPaperScissorsSpec.js
- index.html
- SpecRunner.html

```
####To do
- [ ] Refactor Computer.js into Display.js (DRY!)
