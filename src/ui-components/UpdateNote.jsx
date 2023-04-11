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
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Divider, Flex, Icon, TextField } from "@aws-amplify/ui-react";
export default function UpdateNote(props) {
  const { article, overrides, ...rest } = props;
  const [
    textFieldThreeThreeFourNineThreeZeroSixSevenValue,
    setTextFieldThreeThreeFourNineThreeZeroSixSevenValue,
  ] = useStateMutationAction(article?.description);
  const [
    textFieldThreeThreeFourNineThreeZeroSixSixValue,
    setTextFieldThreeThreeFourNineThreeZeroSixSixValue,
  ] = useStateMutationAction(article?.text);
  const [
    textFieldThreeThreeFourNineThreeZeroSixEightValue,
    setTextFieldThreeThreeFourNineThreeZeroSixEightValue,
  ] = useStateMutationAction(article?.coverimage);
  const [
    textFieldThreeThreeEightFiveThreeZeroEightOneValue,
    setTextFieldThreeThreeEightFiveThreeZeroEightOneValue,
  ] = useStateMutationAction(article?.author);
  const [
    textFieldThreeThreeFourNineThreeZeroSixFiveValue,
    setTextFieldThreeThreeFourNineThreeZeroSixFiveValue,
  ] = useStateMutationAction(article?.title);
  const [
    textFieldThreeThreeNineZeroThreeZeroSevenSevenValue,
    setTextFieldThreeThreeNineZeroThreeZeroSevenSevenValue,
  ] = useStateMutationAction(article?.urltitle);
  const buttonOnClick = useDataStoreUpdateAction({
    fields: {
      description: textFieldThreeThreeFourNineThreeZeroSixSevenValue,
      text: textFieldThreeThreeFourNineThreeZeroSixSixValue,
      coverimage: textFieldThreeThreeFourNineThreeZeroSixEightValue,
      author: textFieldThreeThreeEightFiveThreeZeroEightOneValue,
      title: textFieldThreeThreeFourNineThreeZeroSixFiveValue,
      urltitle: textFieldThreeThreeNineZeroThreeZeroSevenSevenValue,
    },
    id: article?.id,
    model: Article,
    schema: schema,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="784px"
      height="577px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UpdateNote")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="796px"
        height="550px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 30px 0px 30px"
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
          width="unset"
          height="57px"
          label="Title"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeThreeFourNineThreeZeroSixFiveValue}
          onChange={(event) => {
            setTextFieldThreeThreeFourNineThreeZeroSixFiveValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField33493065")}
        ></TextField>
        <TextField
          width="unset"
          height="74px"
          label="Content"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeThreeFourNineThreeZeroSixSixValue}
          onChange={(event) => {
            setTextFieldThreeThreeFourNineThreeZeroSixSixValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField33493066")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Description"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeThreeFourNineThreeZeroSixSevenValue}
          onChange={(event) => {
            setTextFieldThreeThreeFourNineThreeZeroSixSevenValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField33493067")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Image Name"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeThreeFourNineThreeZeroSixEightValue}
          onChange={(event) => {
            setTextFieldThreeThreeFourNineThreeZeroSixEightValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField33493068")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Author"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeThreeEightFiveThreeZeroEightOneValue}
          onChange={(event) => {
            setTextFieldThreeThreeEightFiveThreeZeroEightOneValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField33853081")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="urlTitle"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeThreeNineZeroThreeZeroSevenSevenValue}
          onChange={(event) => {
            setTextFieldThreeThreeNineZeroThreeZeroSevenSevenValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField33903077")}
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
          backgroundColor="rgba(4,125,149,1)"
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
