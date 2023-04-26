/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StoryUpdateProps } from "./StoryUpdate";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoryUpdateCollectionOverridesProps = {
    StoryUpdateCollection?: PrimitiveOverrideProps<CollectionProps>;
    StoryUpdate?: StoryUpdateProps;
} & EscapeHatchProps;
export declare type StoryUpdateCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => StoryUpdateProps;
} & {
    overrides?: StoryUpdateCollectionOverridesProps | undefined | null;
}>;
export default function StoryUpdateCollection(props: StoryUpdateCollectionProps): React.ReactElement;
