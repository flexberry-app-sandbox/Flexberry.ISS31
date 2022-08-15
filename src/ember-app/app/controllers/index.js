import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-s-s31.caption'),
          title: i18n.t('forms.application.sitemap.i-s-s31.title'),
          children: [{
            link: 'i-i-s-i-s-s31-support-l',
            caption: i18n.t('forms.application.sitemap.i-s-s31.i-i-s-i-s-s31-support-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s31.i-i-s-i-s-s31-support-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-i-s-s31-size-l',
            caption: i18n.t('forms.application.sitemap.i-s-s31.i-i-s-i-s-s31-size-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s31.i-i-s-i-s-s31-size-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-i-s-s31-investment-l',
            caption: i18n.t('forms.application.sitemap.i-s-s31.i-i-s-i-s-s31-investment-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s31.i-i-s-i-s-s31-investment-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-i-s-s31-form-l',
            caption: i18n.t('forms.application.sitemap.i-s-s31.i-i-s-i-s-s31-form-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s31.i-i-s-i-s-s31-form-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})