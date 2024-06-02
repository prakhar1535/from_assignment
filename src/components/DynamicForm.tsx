/* eslint-disable @typescript-eslint/no-explicit-any */

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import formConfig from "../formConfif.json";
import FormField from "./FormField";
import FormFileField from "./FormFileField";
import FormSelectField from "./FormSelectField";
import FormRadioField from "./FormRadioField";
import FormCheckboxField from "./FormCheckboxField";
interface FieldTypeComponentMap {
  [key: string]: React.ComponentType<{ field: any }>;
}
const fieldTypeComponentMap: FieldTypeComponentMap = {
  text: FormField,
  password: FormField,
  select: FormSelectField,
  radio: FormRadioField,
  checkbox: FormCheckboxField,
  file: FormFileField,
};

interface ShapeType {
  [key: string]: Yup.AnySchema;
}

const generateValidationSchema = (config: any[]) => {
  const shape: ShapeType = {};

  config.forEach(
    (field: {
      required: any;
      regex: string | RegExp;
      type: string;
      fileFormatSupported: string | string[];
      name: string | number;
    }) => {
      if (field.required) {
        let validator = Yup.string();
        if (field.regex) {
          validator = validator.matches(
            new RegExp(field.regex),
            "Invalid format"
          );
        }
        if (field.type === "file") {
          validator = validator
            .required("Required")
            .test("fileFormat", "Unsupported Format", (value) => {
              if (value) {
                const fileType = (value as any)?.type?.split("/")[1];
                return field.fileFormatSupported.includes(`.${fileType}`);
              }
              return true;
            });
        } else {
          validator = validator.required("Required");
        }
        shape[field.name as string] = validator;
      }
    }
  );

  return Yup.object().shape(shape);
};

const DynamicForm = () => {
  const initialValues = formConfig.reduce((acc: Record<string, any>, curr) => {
    acc[curr.name] = curr.type === "checkbox" ? [] : "";
    return acc;
  }, {});

  const validationSchema = generateValidationSchema(formConfig);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          {formConfig.map((field) => {
            const Component = fieldTypeComponentMap[field.type];
            return <Component key={field.id} field={field} />;
          })}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
