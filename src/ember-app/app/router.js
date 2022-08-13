import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-i-s-s31-form-l');
  this.route('i-i-s-i-s-s31-form-e',
  { path: 'i-i-s-i-s-s31-form-e/:id' });
  this.route('i-i-s-i-s-s31-form-e.new',
  { path: 'i-i-s-i-s-s31-form-e/new' });
  this.route('i-i-s-i-s-s31-investment-l');
  this.route('i-i-s-i-s-s31-investment-e',
  { path: 'i-i-s-i-s-s31-investment-e/:id' });
  this.route('i-i-s-i-s-s31-investment-e.new',
  { path: 'i-i-s-i-s-s31-investment-e/new' });
  this.route('i-i-s-i-s-s31-size-l');
  this.route('i-i-s-i-s-s31-size-e',
  { path: 'i-i-s-i-s-s31-size-e/:id' });
  this.route('i-i-s-i-s-s31-size-e.new',
  { path: 'i-i-s-i-s-s31-size-e/new' });
  this.route('i-i-s-i-s-s31-support-l');
  this.route('i-i-s-i-s-s31-support-e',
  { path: 'i-i-s-i-s-s31-support-e/:id' });
  this.route('i-i-s-i-s-s31-support-e.new',
  { path: 'i-i-s-i-s-s31-support-e/new' });
});

export default Router;
