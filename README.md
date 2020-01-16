# MEDKit Starter Project - Vue.js Version

This repo contains a fully self-contained starter project for building and running a Twitch Extension powered by [Muxy's](https://muxy.io) Extension Backend Services.

It uses [Vue.js](https://vuejs.org) to enable quick development and provide a powerful reactive environment without too much overhead.

This is the same starter project Muxy uses to develop many of our client projects, now open sourced to help the community!

## Running

We use [Vue CLI 3](https://cli.vuejs.org/) for development and assume you have that installed and running.

**NOTE:** Before running the example, you must put a valid Extension Client ID in `package.json`.

In the `scripts` section:
```
"scripts": {
  "serve": "cross-env CLIENT_ID=7zxg... vue-cli-service serve",
  "build": "cross-env CLIENT_ID=7zxg... ANALYTICS=true vue-cli-service build",
  "lint": "vue-cli-service lint"
  },
```

Replace `7zxg...` with your actual Client ID. Do not put quotes around the id.

You can now run your extension in a local development server by executing `npm run serve` or using the Vue UI.

This will make the various components available at (the port number may be different on your machine):

Admin-only pages:
- https://localhost:4000/admin.html

Broadcaster-only pages:
- https://localhost:4080/config.html
- https://localhost:4000/live.html

Viewer pages:
- https://localhost:4000/component.html
- https://localhost:4000/mobile.html
- https://localhost:4000/overlay.html

## Structure

All Extension-specific code exists in the `src/` directory. Here you will find folders for each of the individual pages that make up your extension. All of them are provided and built, but you only need to edit the ones you actually intend to ship.

For example, if you are building a panel extension you can safely ignore the `overlay/` and `component/` directories.

More information about the different extension types can be found [here](https://dev.twitch.tv/docs/extensions/designing/).

The folders are as follows:

| folder | purpose |
|--------|---------|
| admin | Code to be run on the Muxy Dev Portal's Admin Panel page. Here you can add functionality that will only be visible to the extension owner and explicitly set managers. |
| component | Code for a viewer-facing Component Extension. This is visible on top of a channel's video player, but only occupies a set percentage of the video's height and width. |
| config | Code to be run on a Channel's Extension Configuration page. It is only visible to the broadcaster and typically contains one-time or infrequently changed extension configuration options. |
| live | Code to be run on a Channel's Live Dashboard. It is only visible to the broadcaster and typically contains more immediately necessary information. (e.g. live poll updates or game stats) |
| mobile | Code for a viewer-facing Mobile Extension. This runs from within Twitch's mobile app below or along side the channel's video. Screen real-estate is at a premium here.  |
| overlay | Code for a viewer-facing Overlay Extension. This is visible on top of a channel's video player and allows drawing over the entire video's height and width.  |
| shared | This is a convenience folder for shared code between extension types. |
