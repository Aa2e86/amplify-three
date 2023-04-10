/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AboutOverridesProps = {
    About?: PrimitiveOverrideProps<FlexProps>;
    "Slice 1"?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Who We Are?"?: PrimitiveOverrideProps<TextProps>;
    "At Grow Your Venture, we are a team of individuals who are passionate about personal and professional development. We believe that growth is a journey, and we are here to help you every step of the way. Our mission is to provide you with the tools, resources, and inspiration you need to achieve your goals and reach your full potential. Whether you are looking to improve your physical health, build better relationships, or advance your career, we have got you covered. Our team consists of experts in a variety of fields, including fitness, nutrition, psychology, and business. We work together to create content that is informative, engaging, and actionable, so that you can take what you learn and apply it to your own life."?: PrimitiveOverrideProps<TextProps>;
    "image 1"?: PrimitiveOverrideProps<ImageProps>;
    "What We Offer?"?: PrimitiveOverrideProps<TextProps>;
    "Our website is dedicated to providing you with high-quality content that will help you grow in every aspect of your life. Here are just a few examples of what you can expect to find on our site: Fitness tips and workouts Nutrition advice and healthy alternatives Mental health resources and self-improvement strategies Career development tips and job search advice Personal finance and investment guidance Home and Garden improvement ideas and DIY projects We are constantly updating our site with new content, so be sure to check back regularly for fresh ideas and inspiration. We also offer a variety of products and services to help you on your journey to personal growth and we are with you every second! Contact us today to learn more!"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AboutProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AboutOverridesProps | undefined | null;
}>;
export default function About(props: AboutProps): React.ReactElement;
