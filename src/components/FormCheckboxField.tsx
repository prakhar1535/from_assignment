/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, ErrorMessage } from "formik";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";
interface OptionType {
  value: string;
  label: string;
}
const FormCheckboxField = ({ field }: { field: any }) => (
  <FormControl component="fieldset" margin="normal">
    {field.options.map((option: OptionType) => (
      <FormControlLabel
        key={option.value}
        control={
          <Field
            as={Checkbox}
            name={field.name}
            type="checkbox"
            value={option.value}
          />
        }
        label={option.label}
      />
    ))}
    <FormHelperText>
      <ErrorMessage name={field.name} />
    </FormHelperText>
  </FormControl>
);

export default FormCheckboxField;
