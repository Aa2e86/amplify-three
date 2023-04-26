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
export declare type UpdateNoteOverridesProps = {
    UpdateNote?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    TextField33493065?: PrimitiveOverrideProps<TextFieldProps>;
    TextField33493066?: PrimitiveOverrideProps<TextFieldProps>;
    TextField33493067?: PrimitiveOverrideProps<TextFieldProps>;
    TextField33493068?: PrimitiveOverrideProps<TextFieldProps>;
    TextField33853081?: PrimitiveOverrideProps<TextFieldProps>;
    TextField33903077?: PrimitiveOverrideProps<TextFieldProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UpdateNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    article?: Article;
} & {
    overrides?: UpdateNoteOverridesProps | undefined | null;
}>;
export default function UpdateNote(props: UpdateNoteProps): React.ReactElement;
