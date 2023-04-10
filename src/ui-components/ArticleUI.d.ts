/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Article } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArticleUIOverridesProps = {
    ArticleUI?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ArticleUIProps = React.PropsWithChildren<Partial<FlexProps> & {
    article?: Article;
} & {
    overrides?: ArticleUIOverridesProps | undefined | null;
}>;
export default function ArticleUI(props: ArticleUIProps): React.ReactElement;
