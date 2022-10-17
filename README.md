# Bachgle (Winner of BeagleHacks)

Bachgle ("Bach" + "beagle") is a web app created as part of the beagle-themed BeagleHacks hackathon (of which it was one of three winners)—it allows one to hear Bach’s two-part inventions performed *a cappella* by beagles!

*Make sure to unmute the video below to here Bachgle in action!*

https://user-images.githubusercontent.com/82951334/196015154-acdec0a8-0009-4ff5-922d-da9f2df82d92.mov

Bachgle is built primarily with React & the Tone.js Web Audio framework.

After parsing Bach-encoded MIDI data (MIDI being a standard used for musical information) into JSON, Tone.js is utilized to interpret the now-JSON musical data for *real-time generation of music* in the browser. What’s more, Tone.js allows for use of a custom sound source: enter our friend, the beagle! With just the click of a button, you can hear the music of the timeless composer sung by the breed-of-the-hour.

## Installation

To run locally:

1) Download the code.
2) Install the detailed packages.
3) Run via the "npm run" command in your command line tool. 

Simple!

## Usage

Note: browsers will not play any audio until a user clicks something (like a play button). 

The 'Honor Bachgle' button initializes the audio-playing-capability of the browser, so make sure to hit it before trying to play one of the inventions.
