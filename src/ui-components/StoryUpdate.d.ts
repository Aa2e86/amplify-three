/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Article } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoryUpdateOverridesProps = {
    StoryUpdate?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Banner?: PrimitiveOverrideProps<ImageProps>;
    EditButton?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type StoryUpdateProps = React.PropsWithChildren<Partial<FlexProps> & {
    article?: Article;
} & {
    overrides?: StoryUpdateOverridesProps | undefined | null;
}>;
export default function StoryUpdate(props: StoryUpdateProps): React.ReactElement;
