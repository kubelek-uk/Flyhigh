import { useFonts } from "@use-expo/font";

export default class FontHandler {
  init(): boolean {
    const [loaded] = useFonts({
      "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
      "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
      "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
      "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
      "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    });

    return loaded;
  }
}
