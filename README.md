# React Native Wallet App

A modern, secure, and user-friendly mobile wallet application built with React Native and Expo. This application provides a seamless experience for managing digital assets and transactions.

## 🚀 Features

- **Secure Authentication**: Built-in authentication using Clerk
- **Modern UI/UX**: Clean and intuitive user interface with smooth animations
- **Cross-Platform**: Works on both iOS and Android devices
- **Secure Storage**: Utilizes Expo SecureStore for sensitive data
- **Offline Support**: Basic functionality available without internet connection
- **Gesture Support**: Smooth gesture-based interactions
- **Responsive Design**: Adapts to different screen sizes and orientations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- pnpm (Package Manager)
- Expo CLI
- iOS Simulator (for Mac users) or Android Studio (for Android development)
- Git

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YoussefSayedDev/react-native-wallet.git
   cd react-native-wallet/mobile
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm start
   ```

## 🏗️ Project Structure

```
src/
├── app/          # Main application screens and routing
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── lib/          # Utility functions and services
├── constants/    # Application constants and configuration
└── assets/       # Images, fonts, and other static assets
```

## 🚀 Available Scripts

- `pnpm start` - Start the Expo development server
- `pnpm android` - Start the app on Android emulator
- `pnpm ios` - Start the app on iOS simulator
- `pnpm web` - Start the app in web browser
- `pnpm lint` - Run ESLint for code quality check

## 🔧 Key Dependencies

- **@clerk/clerk-expo**: Authentication and user management
- **expo-router**: File-based routing system
- **expo-secure-store**: Secure storage for sensitive data
- **react-native-reanimated**: Advanced animations
- **expo-blur**: UI blur effects
- **react-native-gesture-handler**: Gesture handling
- **expo-haptics**: Haptic feedback support

## 🔐 Security Features

- Secure authentication flow
- Encrypted storage for sensitive data
- Secure transaction handling
- Protected API endpoints

## 📱 Platform Support

- iOS 13.0 and above
- Android 8.0 (API level 26) and above

## 🧪 Testing

The application includes:
- Unit tests for core functionality
- Integration tests for critical flows
- UI component testing

## 📦 Building for Production

1. Configure your environment variables
2. Run the build command:
   ```bash
   eas build --platform ios  # For iOS
   eas build --platform android  # For Android
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Expo team for the amazing framework
- React Native community for the extensive ecosystem
- All contributors who have helped shape this project

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

Made with ❤️ using React Native and Expo 
