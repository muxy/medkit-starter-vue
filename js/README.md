# MEDKit Vue Skeleton Extension - JavaScript

## Finish Setup

1. Copy `.env.sample` to `.env`

2. Edit the variable `VUE_APP_CLIENT_ID` to match the Twitch Extension Client ID you created on the [Twitch Dev Console](https://dev.twitch.tv).

3. Install dependencies: `npm install`

4. Run the local server to develop your extension: `npm run serve`. This will start a local server with hot reloading. Your various extension pages can be accessed at:
  - http://localhost:4000/config.html - The broadcaster configuration
  - http://localhost:4000/live.html - The broadcaster live dashboard
  - http://localhost:4000/panel.html - The viewer panel extension
  - http://localhost:4000/component.html - The viewer component extension
  - http://localhost:4000/overlay.html - The viewer overlay extension

More information about the different types of extensions and broadcaster pages can be found [here](https://docs.muxy.io/docs/getting-started-with-medkit).

5. When you are ready to release your extension, run `npm run build`. This will create a `dist/` folder with compiled versions of the pages as well as a ZIP file containing all HTML, JS and other assets bundled together. You may upload this ZIP directly to Twitch's upload page.
