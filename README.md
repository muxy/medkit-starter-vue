# Muxy Extension Skeleton
The Muxy Extension Skeleton is a baseline project for twitch extensions using Muxy MEDKit.
It comes in two flavors, the typescript version, in the `ts/` directory, and the javascript
version, in the `js/` directory.

## Using the skeleton

1. Install nodejs from https://nodejs.org/en/ . This should install node and npm. Make sure
   that the node and npm binaries are in your PATH.

2. Choose what language you're using, either typescript or javascript, and copy the corresponding
   folder to a new directory, naming it something relevant to your project.

3. `cd` into that directory, and do `npm install .`

4. Run `init.sh <project_name> <Extension Client ID>` to create a .env file
   On windows, you can create a `.env` file and set `VUE_APP_CLIENT_ID` manually, see
   `.env.sample`

4. Run `npm run serve` to serve up a locally hosted version of the extension, or
   `npm run build` to create a `dist` folder which can be uploaded to twitch.