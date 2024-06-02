/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage } from "formik";
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
interface OptionType {
  value: string;
  label: string;
}
const FormRadioField = ({ field }: { field: any }) => (
  <FormControl component="fieldset" margin="normal">
    <RadioGroup name={field.name}>
      {field.options.map((option: OptionType) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
    </RadioGroup>
    <FormHelperText>
      <ErrorMessage name={field.name} />
    </FormHelperText>
  </FormControl>
);

export default FormRadioField;
