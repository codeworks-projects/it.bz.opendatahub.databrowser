import { computed, ref, Ref, watch } from 'vue';
import { SelectOption } from '../../../../../components/select/types';

// This method maps input attributes of form "value_XXX" (where XXX is
// a number) to an index, where the index key is the "XXX" substring
// (converted to a number) and the corresponding value is of type
// SelectOption with its "value" property set to the value of the
// "value_XXX" attribute.

// Example: attrs = {value_001: "EC", value_002: "NOI", ...}
// transforms to {1: {value: "EC"}, 2: {value: "NOI"}, ...}
const mapToOptionsWithKeys = (attrs: Record<string, unknown>) =>
  Object.entries(attrs)
    .filter(([key]) => key.startsWith('value_'))
    .reduce<Record<string, SelectOption>>((previous, [key, val]) => {
      const numberPart = key.substring(7);
      const number = parseInt(numberPart, 10);

      // Return if key is not of form "key_XXX" (where X is a number)
      if (isNaN(number)) {
        return previous;
      }

      return { ...previous, [number]: { value: val } };
    }, {});

// This method tries to match attributes of the form "label_001"
// to the given optionsWithKeys
const mapToOptionsWithKeysAndValues = (
  attrs: Record<string, unknown>,
  optionsWithKeys: Record<string, SelectOption>
) =>
  Object.entries(attrs)
    .filter(([key]) => key.startsWith('label_'))
    .reduce<Record<string, SelectOption>>((previous, [key, label]) => {
      const numberPart = key.substring(7);
      const number = parseInt(numberPart, 10);

      // Return if key is not of form "value_XXX" (where X is a number)
      // or if the key is unknown
      if (isNaN(number) || optionsWithKeys[number] == null) {
        previous;
      }

      const entry = { ...optionsWithKeys[number] };
      entry.label = label as string;

      return { ...previous, [number]: entry };
    }, {});

// Build usable SelectOptions
const buildOptions = (
  optionsWithKeysAndValues: Record<string, SelectOption>,
  sortByLabel: boolean
) => {
  const keys = Object.keys(optionsWithKeysAndValues);
  if (sortByLabel) {
    keys.sort();
  }

  return keys.reduce<SelectOption[]>((previous, key) => {
    const value = optionsWithKeysAndValues[key].value;
    const label = optionsWithKeysAndValues[key].label;
    const option: SelectOption = { value, label };

    return [...previous, option];
  }, []);
};

// The select options are provided as attributes of form
// "value_XXX" and "label_XXX"; they must be transformed in
// order to be usable by the select component
//
// Example: "value_001" with value "EC" and "label_001" with
// value "Eurac" are merged into the following SelectOption:
// {value: "EC", label: "Eurac"}
export const useMapper = (
  attrs: Ref<Record<string, unknown>>,
  sortByLabel: Ref<boolean>
) => {
  const options = ref<SelectOption[]>([]);

  watch(
    () => [attrs.value],
    () => {
      const optionsWithKeys = mapToOptionsWithKeys(attrs.value);
      const optionsWithKeysAndValues = mapToOptionsWithKeysAndValues(
        attrs.value,
        optionsWithKeys
      );

      options.value = buildOptions(optionsWithKeysAndValues, sortByLabel.value);
    },
    { immediate: true }
  );

  return { options };
};
