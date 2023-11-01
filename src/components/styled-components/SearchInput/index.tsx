import React, { useEffect, useState } from "react";
import { InputAdornment } from "@mui/material";
import { SearchInputProps } from "./types";
import { CustomSearchInput } from "./index.styled";
import { ptr } from "../../../utils/helpers";

const SearchInput: React.FC<SearchInputProps> = ({
  height,
  fullHeight,
  fullWidth,
  value,
  onChange,
  placeholder = "Kullanıcı Ara",
  type = "text",
}) => {
  const [tempValue, setTempValue] = useState("");
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const onChangeText = (text: string) => {
    setTempValue(text);

    clearTimeout(timer!);

    const newTimer = setTimeout(() => {
      onChange(text);
    }, 1000);

    setTimer(newTimer);
  };

  return (
    <CustomSearchInput
      sx={{
        height: fullHeight ? "100%" : height ?? ptr(38),
        width: fullWidth ? "100%" : "fit-content",
        "& div": {
          height: "100%",
        },
      }}
      placeholder={placeholder}
      value={tempValue}
      onChange={(event) => onChangeText(event.target.value)}
      type={type}
      InputProps={{
        inputProps: {
          min: 0,
        },
        endAdornment: (
          <InputAdornment
            style={{ minWidth: ptr(27) }}
            position="end"
          ></InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
