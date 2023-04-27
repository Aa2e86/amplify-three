/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Article } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoryOverridesProps = {
    Story?: PrimitiveOverrideProps<FlexProps>;
    Banner?: PrimitiveOverrideProps<ImageProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Description32683022?: PrimitiveOverrideProps<TextProps>;
    Description33693331?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StoryProps = React.PropsWithChildren<Partial<FlexProps> & {
    article?: Article;
    story?: React.ReactNode;
} & {
    overrides?: StoryOverridesProps | undefined | null;
}>;
export default function Story(props: StoryProps): React.ReactElement;
