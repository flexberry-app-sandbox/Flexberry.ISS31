import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISISS31FormLForm from './forms/i-i-s-i-s-s31-form-l';
import IISISS31InvestmentLForm from './forms/i-i-s-i-s-s31-investment-l';
import IISISS31SizeLForm from './forms/i-i-s-i-s-s31-size-l';
import IISISS31SupportLForm from './forms/i-i-s-i-s-s31-support-l';
import IISISS31FormEForm from './forms/i-i-s-i-s-s31-form-e';
import IISISS31InvestmentEForm from './forms/i-i-s-i-s-s31-investment-e';
import IISISS31SizeEForm from './forms/i-i-s-i-s-s31-size-e';
import IISISS31SupportEForm from './forms/i-i-s-i-s-s31-support-e';
import IISISS31FormModel from './models/i-i-s-i-s-s31-form';
import IISISS31InvestmentModel from './models/i-i-s-i-s-s31-investment';
import IISISS31ListInvModel from './models/i-i-s-i-s-s31-list-inv';
import IISISS31ListSizeModel from './models/i-i-s-i-s-s31-list-size';
import IISISS31SizeModel from './models/i-i-s-i-s-s31-size';
import IISISS31SupportModel from './models/i-i-s-i-s-s31-support';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s31-form': IISISS31FormModel,
    'i-i-s-i-s-s31-investment': IISISS31InvestmentModel,
    'i-i-s-i-s-s31-list-inv': IISISS31ListInvModel,
    'i-i-s-i-s-s31-list-size': IISISS31ListSizeModel,
    'i-i-s-i-s-s31-size': IISISS31SizeModel,
    'i-i-s-i-s-s31-support': IISISS31SupportModel
  },

  'application-name': 'I s s31',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s31',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s31',
          title: 'I s s31'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'i-s-s31': {
          caption: 'ISS31',
          title: 'ISS31',
          'i-i-s-i-s-s31-support-l': {
            caption: 'Support',
            title: ''
          },
          'i-i-s-i-s-s31-size-l': {
            caption: 'Size',
            title: ''
          },
          'i-i-s-i-s-s31-investment-l': {
            caption: 'Investment',
            title: ''
          },
          'i-i-s-i-s-s31-form-l': {
            caption: 'Form',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-i-s-s31-form-l': IISISS31FormLForm,
    'i-i-s-i-s-s31-investment-l': IISISS31InvestmentLForm,
    'i-i-s-i-s-s31-size-l': IISISS31SizeLForm,
    'i-i-s-i-s-s31-support-l': IISISS31SupportLForm,
    'i-i-s-i-s-s31-form-e': IISISS31FormEForm,
    'i-i-s-i-s-s31-investment-e': IISISS31InvestmentEForm,
    'i-i-s-i-s-s31-size-e': IISISS31SizeEForm,
    'i-i-s-i-s-s31-support-e': IISISS31SupportEForm
  },

});

export default translations;
