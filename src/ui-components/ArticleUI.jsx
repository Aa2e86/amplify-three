/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function ArticleUI(props) {
  const { article, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="30px 0px 30px 0px"
      backgroundColor="rgba(245,241,230,0)"
      {...getOverrideProps(overrides, "ArticleUI")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="24px"
        fontWeight="600"
        color="rgba(38,32,30,1)"
        lineHeight="36px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={article?.text}
        {...getOverrideProps(overrides, "Content")}
      ></Text>
    </Flex>
  );
}
