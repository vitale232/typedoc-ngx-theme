import { Application } from 'typedoc';
import { ngxPluginSubscribe } from './event-handler';

/**
 * Called by TypeDoc when loading this theme as a plugin. Should be used to define themes which
 * can be selected by the user.
 */
export function load(app: Application) {
  ngxPluginSubscribe(app);
}
