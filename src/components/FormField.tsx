/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";

const FormField = ({ field }: { field: any }) => (
  <Field
    as={TextField}
    name={field.name}
    type={field.type}
    label={field.label}
    fullWidth
    margin="normal"
    variant="outlined"
    helperText={<ErrorMessage name={field.name} />}
  />
);

export default FormField;
