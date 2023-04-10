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
  const buttonOnClick = useDataStoreUpdateAction({
    fields: {
      description: textFieldThreeThreeFourNineThreeZeroSixSevenValue,
      text: textFieldThreeThreeFourNineThreeZeroSixSixValue,
      coverimage: textFieldThreeThreeFourNineThreeZeroSixEightValue,
    },
    id: article?.id,
    model: Article,
    schema: schema,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UpdateNote")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="545px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
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
          isDisabled={true}
          labelHidden={false}
          variation="default"
          placeholder="Make sure to store/edit data in a DOC and edit here. Can't change title"
          {...getOverrideProps(overrides, "TextField33493065")}
        ></TextField>
        <TextField
          width="592px"
          height="unset"
          label="Content"
          grow="1"
          shrink="1"
          basis="0"
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
          width="592px"
          height="unset"
          label="Description"
          shrink="0"
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
          width="592px"
          height="unset"
          label="Image Name"
          shrink="0"
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
