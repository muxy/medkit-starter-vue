# Muxy Extension Rig

![Muxy Logo](docs/logo.png)

The Muxy Extension Rig is a complete environment for developing Twitch Extensions quickly and easily.

##Overview

The Rig simulates the Twitch environment that extension run in. Combined with the Muxy SDK it allows extensions to
safely be sandboxed away from production data and any hiccups that can happen on Twitch's site. When running in the rig 
the Muxy SDK also provides a pubsub system that works exactly like the production one on Twitch.

## Requirements
The skeleton runs as a NodeJS web server, and as such a globally accessible version of NodeJS must
be available. The LTS version (currently 6.11) is used to test against. NodeJS may be downloaded
[here](https://nodejs.org).

This documentation is bundled with the App Skeleton. The code can always be found on its
[GitHub page](https://github.com/muxy/muxy-extension-rig) with specific
[tagged releases](https://github.com/muxy/muxy-extension-rig/releases) available.

The NodeJS libraries required to run the skeleton can be installed by running `npm install` on the
command line.

## Running
To run the rig, simply run `PORT=4000 npm run dev`. This will start the server running on port
4000 on your local machine. You may change the port to suite your environment.

Once running, visit http://localhost:4000 to see the extension rig.