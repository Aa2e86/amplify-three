/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1191px"
      height="86px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(39,45,45,1)"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(239,240,240,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="381px"
        height="72px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="22.09%"
        bottom="-5.81%"
        left="9.15%"
        right="58.86%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children=" Copyright© text 2023 by growyourventures.com&#xA;"
        {...getOverrideProps(
          overrides,
          "Copyright\u00A9 text 2023 by growyourventures.com"
        )}
      ></Text>
      <Text
        fontFamily="Raleway"
        fontSize="32px"
        fontWeight="500"
        color="rgba(235,250,237,1)"
        textTransform="capitalize"
        lineHeight="37.56800079345703px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="453px"
        height="72px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="22px"
        left="708px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="You’ve reached the End . . .&#xA;"
        {...getOverrideProps(overrides, "You\u2019ve reached the End . . .")}
      ></Text>
      <Flex
        gap="2px"
        direction="row"
        width="unset"
        height="45px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="18.6%"
        bottom="29.07%"
        left="calc(50% - 32.5px - 420px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      ></Flex>
      <Text
        fontFamily="Raleway"
        fontSize="32px"
        fontWeight="800"
        color="rgba(235,250,237,1)"
        textTransform="capitalize"
        lineHeight="37.56800079345703px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="28px"
        left="26px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="GYV"
        {...getOverrideProps(overrides, "GYV")}
      ></Text>
    </View>
  );
}
