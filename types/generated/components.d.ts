import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentContents extends Schema.Component {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'Contents';
    description: '';
  };
  attributes: {
    pageNumber: Attribute.Integer & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface HistoryHistoryItem extends Schema.Component {
  collectionName: 'components_history_history_items';
  info: {
    displayName: 'HistoryItem';
    description: '';
  };
  attributes: {
    year: Attribute.Integer & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.contents': ContentContents;
      'history.history-item': HistoryHistoryItem;
    }
  }
}
