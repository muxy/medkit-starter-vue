<template>
  <div class="rig">
    <div fullwidth background-color="default" indicator-color="white" type="text">
      <div title="Viewer App" class="app">
        <ui-select label="Panel Extensions" :options="selectableApps"
          v-model="selectedApp" @change="appSelected"></ui-select>
        </table>

        <div class="viewer">
          <div class="overlay">
            <iframe class="ext" src="/viewer.html" scrolling="no" sandbox="allow-scripts"></iframe>
          </div>
        </div>

        <div class="info">
          This is what the viewer will see underneath the broadcaster's stream, alongside their other panels.
        </div>
      </div>

      <div title="Broadcaster Live App" class="app">
        <div class="broadcaster">
          <div class="live">
            <iframe src="/live.html" scrolling="no" sandbox="allow-scripts"></iframe>
          </div>

          <div class="info">
            <p>
              The broadcaster live app is accessible by the broadcaster from Twitch&#8217;s
              &#8220;Live Dashboard.&#8221; The useable space in the Live App is considerably
              smaller than the other two, and should only display controls that are immediately
              useful to the broadcaster. The expected behavior is that a broadcaster will have
              the Live Dashboard open while they stream.
            </p>
            <p>
              This app is optional, but may be used to display information needed by the
              broadcaster. For example, it may show aggregate voting data. It can also be used
              by the broadcaster to effect app state, such as clearing out a poll&#8217;s
              information, sending messages to viewers or hiding/displaying the app on all
              viewers&#8217; pages.
            </p>
          </div>
        </div>
      </div>

      <div title="Broadcaster Config App" class="app">
        <div class="broadcaster">
          <div class="config">
            <iframe src="/config.html" scrolling="no" sandbox="allow-scripts"></iframe>
          </div>

          <div class="info">
            <p>
              The Broadcaster Config App is accessible by the broadcaster from Twitch&#8217;s
              &#8220;Extension Manager.&#8221; Your extension will
              appear in a large area and should display any configuration options the
              broadcaster may set that will affect your app channel-wide.
            </p>
            <p>
              This page is not expected to be kept open by the broadcaster. Instead it is
              loaded and configured before the extension is enabled, so that viewers only see your
              extension after the broadcaster has tweaked it to their liking. Any realtime events
              or updates sent to this page will most likely not be seen by the broadcaster.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const UiButton = window.KeenUI.UiButton;
const UiTab = window.KeenUI.UiTab;
const UiTabs = window.KeenUI.UiTabs;
const UiToolbar = window.KeenUI.UiToolbar;
const UiSelect = window.KeenUI.UiSelect;

// Developer apps list
const apps = /* DI:AppList */;
const selectableApps = apps.map(a => {return { label: a._rig_id, value: a };});

export default {
  name: 'app',
  components: { UiButton, UiTab, UiTabs, UiToolbar, UiSelect },

  created() {
  },

  data: () => ({
    selectableApps: selectableApps,
	selectedApp: selectableApps[0]
  }),

  computed: {
  },

  methods: {
    popout(url) {
      window.open(url);
    },

    appSelected() {
      console.log(this.selectedApp);
    }
  },

  mounted() {
    this.appSelected();
  }
};
</script>

<style lang='scss'>
@import '../shared/scss/base';

.rig {
  iframe {
    border: 1px solid #bbb;
  }

  .popout {
    margin-bottom: 20px;
  }

  .viewer {
    height: 500px; width: 100%;
    overflow: hidden;

    .overlay {
      height: 100%; width: 100%;
      position: relative;

      .ext {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
		// Panel extensions are limited to a height of 500px
		max-height: 500px;
		// ...and locked to 318px in width
		width: 318px;
      }
    }
  }

  .app {
    display: flex;
    flex-flow: space-around;

    .info {
      margin: 0 40px 20px 20px;

      p:first-child { margin-top: 0; }
    }

    .live {
      flex-grow: 1;
    }
  }

  .config iframe {
    height: 700px;
    width: 800px;
    overflow: hidden;
  }

  .live iframe {
    height: 500px;
    width: 286px;
    overflow: hidden;
  }
}
</style>
