/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, ErrorMessage, FieldProps, FormikProps } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Typography,
} from "@mui/material";
import { AttachFile } from "@mui/icons-material";
interface CustomFieldProps extends FieldProps {
  name: string;
  label: string;
}
const FormFileField = ({ field }: { field: CustomFieldProps }) => (
  <FormControl fullWidth margin="normal" variant="outlined">
    <InputLabel>{field.label}</InputLabel>
    <Field
      name={field.name}
      type="file"
      component={({
        field,
        form,
      }: {
        field: CustomFieldProps;
        form: FormikProps<any>;
      }) => (
        <Box>
          <input
            id={field.name}
            style={{ display: "none" }}
            type="file"
            onChange={(event) => {
              if (
                event.currentTarget.files &&
                event.currentTarget.files.length > 0
              ) {
                form.setFieldValue(field.name, event.currentTarget.files[0]);
              }
            }}
          />
          <label htmlFor={field.name}>
            <Button
              variant="contained"
              color="primary"
              component="span"
              startIcon={<AttachFile />}
            >
              Choose File
            </Button>
          </label>
          {form.values[field.name] && (
            <Typography variant="body2" style={{ marginTop: "10px" }}>
              Selected File: {form.values[field.name].name}
            </Typography>
          )}
        </Box>
      )}
    />
    <FormHelperText>
      <ErrorMessage name={field.name} />
    </FormHelperText>
  </FormControl>
);

export default FormFileField;
