"Use Client";

import {
  TextFieldInput,
  TextFieldRoot,
  TextArea,
  Button,
} from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="space-y-3">
      <TextFieldRoot>
        <TextFieldInput
          placeholder="title"
          className="max-w-xl"
        ></TextFieldInput>
      </TextFieldRoot>
      <TextArea placeholder="description"></TextArea>
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
