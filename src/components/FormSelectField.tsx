/* eslint-disable @typescript-eslint/no-explicit-any */

import { Field, ErrorMessage } from "formik";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
} from "@mui/material";
interface OptionType {
  value: string;
  label: string;
}
const FormSelectField = ({ field }: { field: any }) => (
  <FormControl fullWidth margin="normal" variant="outlined">
    <InputLabel>{field.label}</InputLabel>
    <Field
      as={Select}
      name={field.name}
      multiple={field.multipleSelect}
      label={field.label}
    >
      {field.options.map((option: OptionType) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Field>
    <FormHelperText>
      <ErrorMessage name={field.name} />
    </FormHelperText>
  </FormControl>
);

export default FormSelectField;
