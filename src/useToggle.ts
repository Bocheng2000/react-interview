import * as React from "react";
import { useState } from 'react';

export default function useToggle(initialValue?: boolean) {
  // 1.useToggle should correctly establish its initial value, casting it to a boolean if it's not one
  const [value, setValue] = useState(!!initialValue);

  const toggle = (newValue?: boolean) => {
    // 2.useToggle should toggle the state when its updater function is invoked without a value
    if (newValue === undefined) {
      setValue(!value);
      return;
    }
    // 3.seToggle should set the state to the provided value when its updater function is called with a boolean value
    if (typeof newValue === "boolean") {
      setValue(newValue);
      return;
    }
    // 4.useToggle should not change the state when its updater function is called with the same boolean value
    if (value === newValue) {
      return;
    }

    // 5.seToggle should toggle the state when its updater function is called with a value that isn't a boolean
    if (typeof newValue !== "boolean") {
      setValue(!value);
      return;
    }
  };

  return [value, toggle];
}
