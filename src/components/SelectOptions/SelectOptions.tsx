import * as React from "react";
import { makeStyles } from "@mui/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { nunito } from "@/app/fonts";
import styled from "styled-components";

const usePlaceholderStyles = makeStyles((theme) => ({
  placeholder: {
    color: "#818790",
  },
}));

const Placeholder = ({ children }) => {
  const classes = usePlaceholderStyles();
  return (
    <div className={`${classes.placeholder} ${nunito.className}`}>
      {children}
    </div>
  );
};

export default function SelectOptions({ selectData }) {
  const handleChange = (e: SelectChangeEvent) => {
    selectData.setVariable(e.target.value);
  };

  return (
    <SelectContainer>
      <FormControl variant="outlined" fullWidth>
        <StyledLabel id={selectData.labelId}>
          {selectData.iconElement}
          {selectData.labelTitle}
        </StyledLabel>
        <Select
          MenuProps={{
            disableScrollLock: true,
          }}
          className={nunito.className}
          labelId={selectData.labelId}
          id={selectData.id}
          value={selectData.variable}
          onChange={handleChange}
          displayEmpty
          renderValue={
            selectData.variable !== ""
              ? undefined
              : () => <Placeholder>{selectData.labelTitle}</Placeholder>
          }
          sx={{
            width: selectData.width,
            height: 30,
            borderRadius: "20px",
            border: "2px solid #32476f",
            backgroundColor: selectData.disabled ? "#32476f" : "#e8f1fe",
            color: selectData.disabled ? "#e8f1fe" : "#32476f",
            opacity: selectData.disabled ? 0.75 : 1,
            cursor: selectData.disabled ? "wait" : "auto",
            "& .MuiSvgIcon-root": {
              color: "#32476f",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
              borderWidth: "thin",
            },
            "&.Mui-active .MuiOutlinedInput-notchedOutline": {
              border: "none",
              borderWidth: "thin",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
              borderWidth: "thin",
            },
          }}
        >
          {selectData.options.map((option) => (
            <MenuItem value={option.optionValue} key={option.optionValue}>
              {option.optionName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SelectContainer>
  );
}

const StyledLabel = styled.label`
  display: flex;
  gap: 0 3px;
  align-items: center;
  margin-bottom: 2px;
`;

const SelectContainer = styled.div`
  margin: 5px 0 10px;
`;