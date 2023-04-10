/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function StoryUpdate(props) {
  const { article, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="375px"
      height="161px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="20px"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(190,203,219,1)"
      {...getOverrideProps(overrides, "StoryUpdate")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="25px"
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
        children={article?.title}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Image
        width="365px"
        height="38px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        opacity="0.699999988079071"
        objectFit="cover"
        {...getOverrideProps(overrides, "Banner")}
      ></Image>
      <View
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "EditButton")}
      ></View>
      <Icon
        width="74px"
        height="64px"
        viewBox={{ minX: 0, minY: 0, width: 74, height: 64 }}
        paths={[
          {
            d: "M51.7229 10.3895L63.3111 21.6667C63.7993 22.1418 63.7993 22.917 63.3111 23.3921L35.2528 50.6974L23.3306 51.9852C21.7375 52.1602 20.3885 50.8474 20.5684 49.2971L21.8917 37.6949L49.95 10.3895C50.4382 9.91444 51.2347 9.91444 51.7229 10.3895ZM72.5354 7.52647L66.266 1.42528C64.3132 -0.475093 61.1399 -0.475093 59.1743 1.42528L54.6264 5.85114C54.1382 6.32624 54.1382 7.10139 54.6264 7.57648L66.2146 18.8537C66.7028 19.3288 67.4993 19.3288 67.9875 18.8537L72.5354 14.4278C74.4882 12.5149 74.4882 9.42684 72.5354 7.52647L72.5354 7.52647ZM49.3333 43.271L49.3333 55.9984L8.22222 55.9984L8.22222 15.9906L37.7451 15.9906C38.1562 15.9906 38.5417 15.8281 38.8372 15.553L43.976 10.5521C44.9524 9.60188 44.2587 7.98906 42.884 7.98906L6.16667 7.98906C2.76215 7.98906 0 10.6771 0 13.9902L0 57.9988C0 61.312 2.76215 64 6.16667 64L51.3889 64C54.7934 64 57.5556 61.312 57.5556 57.9988L57.5556 38.27C57.5556 36.9322 55.8983 36.2696 54.9219 37.2073L49.783 42.2082C49.5003 42.4958 49.3333 42.8709 49.3333 43.271Z",
            fill: "rgba(64,81,85,1)",
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
  );
}
