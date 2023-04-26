<template>
  <div class="flex items-center gap-3">
    <label v-if="hasLabel" :for="id">{{ label }}</label>
    <textarea
      :id="id"
      ref="textAreaRef"
      v-model="text"
      class="rounded border border-gray-400 p-2 text-black focus:border-green-500"
      :class="inputClasses"
      :placeholder="placeholder"
      :cols="cols"
      :rows="rows"
    ></textarea>
    <span v-if="label != null" class="ml-3 font-semibold"></span>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, onMounted, ref } from 'vue';
import { randomId } from '../utils/random';

const id = randomId();

const emit = defineEmits(['update:modelValue']);

const props = defineProps<{
  modelValue?: string;
  label?: string;
  rows?: string | number;
  cols?: string | number;
  placeholder?: string;
  inputClasses?: string;
  focus?: boolean;
}>();

const textAreaRef = ref();
onMounted(() => {
  if (props.focus === true) {
    setTimeout(() => textAreaRef.value.focus(), 50);
  }
});

const hasLabel = computed(() => props.label != null && props.label.length > 0);

const text = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>

<style scoped>
/** NOTE
* This style definition is an exception strictly necessary for showing input errors.
* Always use inline tailwind classes for normal component styling.
**/
.has-error textarea {
  @apply border-error text-error;
}
</style>
