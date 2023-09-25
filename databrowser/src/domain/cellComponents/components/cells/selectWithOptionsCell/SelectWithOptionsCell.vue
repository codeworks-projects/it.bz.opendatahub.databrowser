<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
  <div v-if="isWriteable">
    <SelectCustom
      v-if="isWriteable && !isAddNewValue"
      :options="optionsInternal"
      :value="value"
      :show-empty-value="showEmptyValue"
      :show-add-new-value="showAddNewValue"
      :show-value-as-label-fallback="showValueAsLabelFallback"
      :show-search-when-at-least-count-options="
        showSearchWhenAtLeastCountOptions
      "
      @change="change"
    />
    <StringCell
      v-else-if="isWriteable && isAddNewValue && showAddNewValue"
      v-model="newItemValue"
      focus
      :editable="editable"
      @update="onUpdate($event.value)"
    />
  </div>
  <span v-else>{{ value }}</span>
</template>

<script setup lang="ts">
import { ref, toRefs, useAttrs, watch } from 'vue';
import { useMapper } from './mapper';
import SelectCustom from '../../../../../components/select/SelectCustom.vue';
import {
  SelectOption,
  SelectValue,
} from '../../../../../components/select/types';
import StringCell from '../stringCell/StringCell.vue';
import { useWriteable } from '../../utils/writeable/useWriteable';
import { useEditStore } from '../../../../datasets/editView/store/editStore';

const emit = defineEmits(['update']);

const props = withDefaults(
  defineProps<{
    // If options is set, they will be used, otherwise the options from the attributes will be used
    options?: SelectOption[];
    value?: SelectValue;
    showEmptyValue?: boolean;
    showAddNewValue?: boolean;
    showValueAsLabelFallback?: boolean;
    showSearchWhenAtLeastCountOptions?: number;
    editable?: boolean;
    readonly?: string | boolean;
  }>(),
  {
    options: undefined,
    value: undefined,
    showEmptyValue: false,
    showAddNewValue: false,
    showValueAsLabelFallback: false,
    showSearchWhenAtLeastCountOptions: 7,
    editable: true,
    readonly: false,
  }
);

const { options, value, showEmptyValue, editable, readonly } = toRefs(props);

const isWriteable = useWriteable({ editable, readonly });

const attrs = useAttrs();

const { optionsInternal } = useMapper(options, ref(attrs));

const isAddNewValue = ref(false);
const newItemValue = ref('');

const editStore = useEditStore();

watch(
  () => editStore.isEqual,
  (v) => {
    if (v) {
      isAddNewValue.value = false;
    }
  }
);

const change = (value: string) => {
  isAddNewValue.value = !value;
  onUpdate(value);
};

const onUpdate = (value: string) => {
  emit('update', { prop: 'value', value });
};
</script>
