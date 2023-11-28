<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
  <div class="flex items-center justify-between">
    {{ title }}
    <div class="flex items-center">
      <TooltipCustom v-if="isDeprecated">
        <template #default>
          <div
            class="cursor-pointer bg-deprecated text-white flex items-center justify-center w-6 h-6 rounded-md leading-3"
          >
            &#x2022;
          </div>
        </template>
        <template #container>
          <p>This field is deprecated. It is not recommended to use it</p>
        </template>
      </TooltipCustom>
      <PopoverCustom v-if="canSort || canFilter">
        <template #trigger>
          <PopoverCustomButton
            v-slot="{ open }"
            class="flex items-center rounded"
          >
            <IconStrokedArrowDown
              class="h-5 w-5 stroke-current"
              :class="{ 'rotate-180': open }"
            />
            <div class="flex items-center gap-1 text-green-500">
              <IconSortAsc v-if="isCurrentSortAsc" />
              <IconSortDesc v-if="isCurrentSortDesc" />
              <IconFilter v-if="isFilterActive" />
            </div>
          </PopoverCustomButton>
        </template>
        <template #container>
          <PopoverCustomPanel v-slot="{ close }">
            <PopoverContentHeader class="pb-0">Sort</PopoverContentHeader>
            <SortPopoverContent :field="field" />

            <PopoverContentHeader class="py-0">Filter</PopoverContentHeader>
            <FilterPopoverContent
              :field="field"
              :title="title"
              @add-filter="close"
            />
          </PopoverCustomPanel>
        </template>
      </PopoverCustom>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import PopoverContentHeader from '../../../components/popover/PopoverContentHeader.vue';
import PopoverCustom from '../../../components/popover/PopoverCustom.vue';
import PopoverCustomButton from '../../../components/popover/PopoverCustomButton.vue';
import PopoverCustomPanel from '../../../components/popover/PopoverCustomPanel.vue';
import IconFilter from '../../../components/svg/IconFilter.vue';
import IconSortAsc from '../../../components/svg/IconSortAsc.vue';
import IconSortDesc from '../../../components/svg/IconSortDesc.vue';
import IconStrokedArrowDown from '../../../components/svg/IconStrokedArrowDown.vue';
import { useTableFilterForField } from './filter/useTableFilter';
import { useTableSortForField } from './sort/useTableSort';
import SortPopoverContent from './sort/SortPopoverContent.vue';
import FilterPopoverContent from './filter/FilterPopoverContent.vue';
import TooltipCustom from '../../../components/tooltip/TooltipCustom.vue';

const props = withDefaults(
  defineProps<{
    title: string;
    field?: string;
    isDeprecated?: boolean;
  }>(),
  { field: undefined }
);

const { title, field } = toRefs(props);

const { canSort, isCurrentSortAsc, isCurrentSortDesc } =
  useTableSortForField(field);

const { canFilter, isFilterActive } = useTableFilterForField(title, field);
</script>
