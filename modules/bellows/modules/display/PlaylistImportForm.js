import { YouTubePlaylistImportService } from '../apis/YouTubePlaylistImportService.js';
import * as MusicStreaming from '../config.js';

export class PlaylistImportForm extends FormApplication {
  constructor(object = {}, options = {}) {
    
    options.height = 'auto';
    super(object, options);
    this.importService = new YouTubePlaylistImportService();
    this.playlistItems = [];
  }
  
  static get defaultOptions() {
    const options = super.defaultOptions;
    options.template = MusicStreaming.templates.importYoutubePlaylist;
    options.title = game.i18n.localize('bellows.import-yt-playlist-nav-text');
    
    return options;
  }
  
  activateListeners(html) {
    super.activateListeners(html);
    
    html.find('button[id="bellows-yt-import-btn-import"]').click(async () => {
      if (this.working) {
        ui.notifications.error(game.i18n.localize('bellows.import-yt-playlist-msg-already-working'));
        return;
      }
      
      this.working = true;
      this.error = null;
      this.playlistItems = [];
      
      await this.rerender();
      
      await this._onImportPlaylist(html.find('input[id="bellows-yt-import-url-text"]')[0].value);
      this.working = false;
      
      await this.rerender();
    });
  }
  
  getData() {
    return {
      working: this.working,
      playlistItems: this.playlistItems
    };
  }
  
  async _onImportPlaylist(playlistStr) {
    let key = this.importService.extractPlaylistKey(playlistStr);
    if (!key) {
      ui.notifications.error(game.i18n.localize('bellows.import-yt-playlist-msg-invalid-key'));
      return;
    }
    try {
      this.playlistItems = await this.importService.getPlaylistInfo(key);
    } catch(ex) {
      if (ex == 'Invalid Playlist') {
        ui.notifications.error(game.i18n.format('bellows.import-yt-playlist-msg-key-not-found', {playlistKey: key}));
      } else {
        ui.notifications.error(game.i18n.localize('bellows.import-yt-playlist-msg-error'));
        MusicStreaming.log(ex);
      }
    }
  }
  
  async rerender() {
    await this._render(false);
    this.setPosition();
  }
  
  async _updateObject(event, formData) {
    try {
      await this.importService.createFoundryVTTPlaylist(formData.playlistname, this.playlistItems, formData.playlistvolume);
      ui.notifications.info(game.i18n.format('bellows.import-yt-playlist-msg-imported', {playlistName: formData.playlistname}));
    } catch (ex) {
      MusicStreaming.log(ex);
      ui.notifications.error(game.i18n.localize('bellows.import-yt-playlist-msg-error'));
    }
  }
}
