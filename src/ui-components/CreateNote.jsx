/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Article } from "../models";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Divider, Flex, Icon, TextField } from "@aws-amplify/ui-react";
export default function CreateNote(props) {
  const { note, overrides, ...rest } = props;
  const [
    textFieldThreeOneSixZeroTwoFourEightFiveValue,
    setTextFieldThreeOneSixZeroTwoFourEightFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneSixZeroTwoFourEightSixValue,
    setTextFieldThreeOneSixZeroTwoFourEightSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeThreeOneSixThreeZeroOneFourValue,
    setTextFieldThreeThreeOneSixThreeZeroOneFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeThreeOneSixThreeZeroTwoOneValue,
    setTextFieldThreeThreeOneSixThreeZeroTwoOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeThreeEightFiveThreeZeroSevenFourValue,
    setTextFieldThreeThreeEightFiveThreeZeroSevenFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeThreeNineZeroThreeZeroEightFourValue,
    setTextFieldThreeThreeNineZeroThreeZeroEightFourValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      title: textFieldThreeOneSixZeroTwoFourEightFiveValue,
      text: textFieldThreeOneSixZeroTwoFourEightSixValue,
      description: textFieldThreeThreeOneSixThreeZeroOneFourValue,
      coverimage: textFieldThreeThreeOneSixThreeZeroTwoOneValue,
      author: textFieldThreeThreeEightFiveThreeZeroSevenFourValue,
      urltitle: textFieldThreeThreeNineZeroThreeZeroEightFourValue,
    },
    model: Article,
    schema: schema,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="632px"
      height="568px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CreateNote")}
      {...rest}
    >
      <Flex
        gap="5px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="12px 20px 12px 20px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="5px 5px 5px 5px"
          {...getOverrideProps(overrides, "MyIcon")}
        >
          <Icon
            width="14px"
            height="14px"
            viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
            paths={[
              {
                d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </Flex>
        <TextField
          width="592px"
          height="unset"
          label="Title"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          isRequired={true}
          value={textFieldThreeOneSixZeroTwoFourEightFiveValue}
          onChange={(event) => {
            setTextFieldThreeOneSixZeroTwoFourEightFiveValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField31602485")}
        ></TextField>
        <TextField
          width="592px"
          height="unset"
          label="Content"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeOneSixZeroTwoFourEightSixValue}
          onChange={(event) => {
            setTextFieldThreeOneSixZeroTwoFourEightSixValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField31602486")}
        ></TextField>
        <TextField
          width="592px"
          height="unset"
          label="Description"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          isRequired={true}
          value={textFieldThreeThreeOneSixThreeZeroOneFourValue}
          onChange={(event) => {
            setTextFieldThreeThreeOneSixThreeZeroOneFourValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField33163014")}
        ></TextField>
        <TextField
          width="592px"
          height="unset"
          label="Image Name"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeThreeOneSixThreeZeroTwoOneValue}
          onChange={(event) => {
            setTextFieldThreeThreeOneSixThreeZeroTwoOneValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField33163021")}
        ></TextField>
        <TextField
          width="592px"
          height="unset"
          label="Author"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeThreeEightFiveThreeZeroSevenFourValue}
          onChange={(event) => {
            setTextFieldThreeThreeEightFiveThreeZeroSevenFourValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField33853074")}
        ></TextField>
        <TextField
          width="592px"
          height="unset"
          label="urlTitle"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          isRequired={true}
          value={textFieldThreeThreeNineZeroThreeZeroEightFourValue}
          onChange={(event) => {
            setTextFieldThreeThreeNineZeroThreeZeroEightFourValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField33903084")}
        ></TextField>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Button
          width="unset"
          height="40px"
          gap="20px"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
