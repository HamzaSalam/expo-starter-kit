# 🚀 Expo Starter Kit

> A clean, production-ready starter template for React Native and Expo with file-based routing, Tailwind CSS styling, TypeScript, ESLint, and Prettier.

[![Expo SDK](https://img.shields.io/badge/Expo_SDK-58.0-blue.svg?style=flat-square&logo=expo)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React_Native-0.88-61DAFB.svg?style=flat-square&logo=react)](https://reactnative.dev)
[![NativeWind](https://img.shields.io/badge/NativeWind-v4-06B6D4.svg?style=flat-square&logo=tailwindcss)](https://www.nativewind.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

---

## ✨ Features

- **⚡ Latest Expo SDK 58**: Powered by React 19 and React Native 0.88 with the New Architecture enabled by default.
- **🧭 Expo Router**: Modern file-based routing with typed routes and seamless stack/tab navigation.
- **🎨 NativeWind v4 (Tailwind CSS)**: Write standard Tailwind classes for your cross-platform components.
- **🟦 TypeScript**: Full type-safety configured out-of-the-box with clean `@/*` path aliases.
- **🧹 Modern ESLint & Prettier**: Configured with the latest ESLint Flat Config (`eslint.config.js`) and unified formatting.
- **🧱 Starter Components & Utilities**:
  - `src/components/AppText.tsx`: Flexible typography component with sizes, font-weights, and theme colors.
  - `src/components/Button.tsx`: Ready-to-use button with primary, secondary, and tertiary styles.
  - `src/utils/cn.ts`: Class name merge helper using `clsx` and `tailwind-merge`.
- **📱 Universal Support**: iOS, Android, and Web out-of-the-box.

---

## 🚀 Quick Start

### Option 1: Use as a Template with `create-expo-app`

```bash
# Using npm
npx create-expo-app my-app --template <your-github-username>/expo-starter-kit

# Using bun
bun create expo-app my-app --template <your-github-username>/expo-starter-kit
```

### Option 2: Clone Directly

```bash
# Clone the repository
git clone https://github.com/<your-username>/expo-starter-kit.git my-app
cd my-app

# Install dependencies
npm install
# or: bun install / pnpm install / yarn install

# Start development server
npx expo start
```

---

## 📜 Available Scripts

| Command           | Action                                            |
| ----------------- | ------------------------------------------------- |
| `npm run start`   | Start Metro bundler with interactive menu         |
| `npm run android` | Launch app on Android emulator / connected device |
| `npm run ios`     | Launch app on iOS simulator                       |
| `npm run web`     | Run on local web browser                          |
| `npm run lint`    | Check code quality with ESLint                    |
| `npm run format`  | Auto-format codebase with Prettier                |

---

## 📁 Project Structure

```text
expo-starter-kit/
├── assets/                  # Icons, splash screen, and favicons
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
├── src/
│   ├── app/                 # Expo Router file-based routes
│   │   ├── _layout.tsx      # Root layout & providers
│   │   └── index.tsx        # Home screen
│   ├── components/          # Reusable UI components
│   │   ├── AppText.tsx      # Typography component
│   │   └── Button.tsx       # Button component
│   └── utils/
│       └── cn.ts            # Tailwind class merger (clsx + tailwind-merge)
├── .gitignore
├── .prettierrc
├── app.json                 # Expo configuration
├── babel.config.js          # Babel config for NativeWind
├── eslint.config.js         # ESLint Flat Config
├── global.css               # Tailwind CSS entry file
├── metro.config.js          # Metro bundler configured with NativeWind
├── nativewind-env.d.ts      # NativeWind TypeScript definitions
├── package.json
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration with path aliases
```

---

## 💅 Styling with Tailwind (NativeWind)

NativeWind v4 is configured with `metro.config.js` and `global.css`. You can use standard Tailwind utility classes directly in your JSX:

```tsx
import { View } from "react-native";
import { AppText } from "@/components/AppText";

export default function Example() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50 p-6">
      <AppText size="heading" bold className="text-blue-600">
        Hello World!
      </AppText>
    </View>
  );
}
```

---

## 🛠️ Components & Helpers

### `AppText`

```tsx
<AppText size="large" bold color="primary" center>
  Heading Title
</AppText>
```

- **size**: `'small'` | `'medium'` | `'large'` | `'heading'`
- **bold**: `boolean`
- **color**: `'primary'` | `'secondary'` | `'tertiary'`
- **center**: `boolean`
- Accepts all standard React Native `TextProps` and custom `className`.

### `Button`

```tsx
<Button
  title="Click Me"
  theme="primary"
  onPress={() => console.log("Pressed")}
/>
```

- **theme**: `'primary'` | `'secondary'` | `'tertiary'`
- **disabled**: `boolean`
- Accepts all standard React Native `PressableProps`.

### `cn` Utility

```tsx
import { cn } from "@/utils/cn";

const className = cn("text-base", isActive && "text-blue-500", customClass);
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
