import {
  FieldError,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";

import {
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

import { HTMLInputTypeAttribute } from "react";

interface TextInputProps<T extends FieldValues> {
  errorMessage?: string;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  
  register: UseFormRegister<T>;
}

function TextInput<T extends FieldValues>({
  errorMessage,
  name,
  label,
  placeholder,
  type = "text",
  register,
}: TextInputProps<T>) {
  return (
    <TextField
    
      type={type}
      isInvalid={!!errorMessage}
      isRequired
      validationBehavior="aria"
      className="w-full"
    >
      <Label>{label}</Label>

      <InputGroup>
        <InputGroup.Input
          {...register(name)}
          placeholder={placeholder}
          autoComplete="new-password"
        />
      </InputGroup>

      <FieldError>{errorMessage}</FieldError>
    </TextField>
  );
}

export default TextInput;