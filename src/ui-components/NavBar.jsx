/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const gROWYOURVENTURESOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonThreeThreeSevenZeroThreeZeroSevenFourOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const buttonThreeOneSixThreeTwoFourEightThreeOnClick = useNavigateAction({
    type: "url",
    url: "/about",
  });
  const buttonThreeThreeSixNineThreeThreeTwoSevenOnClick = useNavigateAction({
    type: "url",
    url: "/upload",
  });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1430px"
      height="93px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(45,42,39,1)"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Flex
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Text
          fontFamily="Raleway"
    
          fontWeight="700"
          color="rgba(235,250,237,1)"
          textTransform="capitalize"
          lineHeight="32.87200164794922px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="GROW YOUR VENTURES"
          onClick={() => {
            gROWYOURVENTURESOnClick();
          }}
          {...getOverrideProps(overrides, "GROW YOUR VENTURES")}
        ></Text>
      </Flex>
      <Flex
        gap="15px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Buttons")}
      >
        <Button
          width="unset"
          height="unset"
          border="1px SOLID rgba(13,26,38,1)"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Articles"
          onClick={() => {
            buttonThreeThreeSevenZeroThreeZeroSevenFourOnClick();
          }}
          {...getOverrideProps(overrides, "Button33703074")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          border="1px SOLID rgba(13,26,38,1)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="About"
          onClick={() => {
            buttonThreeOneSixThreeTwoFourEightThreeOnClick();
          }}
          {...getOverrideProps(overrides, "Button31632483")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          border="1px SOLID rgba(239,143,143,1)"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Edit"
          onClick={() => {
            buttonThreeThreeSixNineThreeThreeTwoSevenOnClick();
          }}
          {...getOverrideProps(overrides, "Button33693327")}
        ></Button>
      </Flex>
    </Flex>
  );
}
