/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Article } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateNoteOverridesProps = {
    CreateNote?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    TextField31602485?: PrimitiveOverrideProps<TextFieldProps>;
    TextField31602486?: PrimitiveOverrideProps<TextFieldProps>;
    TextField33163014?: PrimitiveOverrideProps<TextFieldProps>;
    TextField33163021?: PrimitiveOverrideProps<TextFieldProps>;
    TextField33853074?: PrimitiveOverrideProps<TextFieldProps>;
    TextField33903084?: PrimitiveOverrideProps<TextFieldProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CreateNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    note?: Article;
} & {
    overrides?: CreateNoteOverridesProps | undefined | null;
}>;
export default function CreateNote(props: CreateNoteProps): React.ReactElement;
