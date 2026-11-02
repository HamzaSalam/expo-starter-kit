import { Pressable, type PressableProps, Text } from "react-native";
import React from "react";
import { cn } from "../utils/cn";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  theme?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
} & PressableProps;

// In React 19 and latest Expo SDK, ref is a standard prop, forwardRef is not required.
export function Button({
  title,
  onPress,
  theme = "primary",
  disabled = false,
  className,
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={cn(
        "flex-row items-center justify-center rounded-md px-5 py-3 mb-4 border",
        theme === "primary" &&
          "bg-[#007AFF] border-[#007AFF] active:bg-[#0062cc]",
        theme === "secondary" && "bg-white border-gray-300 active:bg-gray-100",
        theme === "tertiary" &&
          "bg-transparent border-transparent active:bg-gray-100/50",
        disabled && "opacity-50",
        className,
      )}
      {...rest}
    >
      <Text
        className={cn(
          "font-semibold text-lg tracking-wider",
          theme === "secondary" && "text-black",
          theme === "primary" && "text-white",
          theme === "tertiary" && "text-gray-800",
        )}
      >
        {title}
      </Text>
    </Pressable>
  );
}
