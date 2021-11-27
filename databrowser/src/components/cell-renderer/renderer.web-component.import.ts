import { GenericRendererElement } from './types';

import JsonRenderer from '../custom-elements/JsonRenderer.vue';
window.customElements.define(GenericRendererElement.JSON, JsonRenderer);

import StringRenderer from '../custom-elements/StringRenderer.vue';
window.customElements.define(GenericRendererElement.STRING, StringRenderer);
