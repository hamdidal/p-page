import * as React from "react";

import { CustomAutocomplete } from "./index.styled";
import { AutocompleteProps, OptionType } from "./types";
import TextField from "../TextField";

const AutocompleteContainer: React.FunctionComponent<AutocompleteProps> =
  React.forwardRef(
    ({
      options = [],
      getOptionDisabled,
      multiple = false,
      limitTags,
      onChange,
      onError,
      id,
      label,
      placeholder,
      size = "medium",
      width = 220,
      fullWidth,
      selectedValue,
      height,
      disabled,
    }) => {
      const [value, setValue] = React.useState<string | number>(
        selectedValue ?? ""
      );

      React.useEffect(() => {
        setValue(selectedValue ?? "");
      }, [selectedValue]);

      return (
        <CustomAutocomplete
          multiple={multiple}
          limitTags={limitTags}
          data-testid={"auto-complete"}
          value={value}
          id={id}
          onChange={(_, k) => {
            const option = k as OptionType;
            const event = _ as React.ChangeEvent<{}>;
            if (onChange) {
              setValue(option?.label as string);
              onChange(option?.value as string, event);
            }
          }}
          size={size}
          getOptionDisabled={getOptionDisabled}
          disablePortal
          options={options}
          sx={{ width: fullWidth ? "100%" : width, height: height }}
          renderInput={(params) => (
            <TextField
              {...params}
              width="220"
              label={label}
              placeholder={placeholder}
              size="medium"
            />
          )}
          disabled={disabled}
        />
      );
    }
  );

export default AutocompleteContainer;
