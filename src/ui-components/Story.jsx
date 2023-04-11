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
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Story(props) {
  const { article, story, overrides, ...rest } = props;
  const storyOnClick = useNavigateAction({
    type: "url",
    url: `${"/article/"}${article?.urltitle}`,
  });
  return (
    <Flex
      gap="20px"
      direction="column"
      width="396px"
      height="437px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="4px 8px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        storyOnClick();
      }}
      {...getOverrideProps(overrides, "Story")}
      {...rest}
    >
      <Image
        width="unset"
        height="239px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={article?.coverimage}
        {...getOverrideProps(overrides, "Banner")}
      ></Image>
      <Text
        fontFamily="Poppins"
        fontSize="20px"
        fontWeight="700"
        color="rgba(66,66,66,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="364px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={article?.title}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="363px"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={article?.description}
        {...getOverrideProps(overrides, "Description32683022")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="12px"
        fontWeight="275"
        color="rgba(0,0,0,1)"
        lineHeight="0px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="352px"
        height="18px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={article?.createdAt}
        {...getOverrideProps(overrides, "Description33693331")}
      ></Text>
    </Flex>
  );
}
