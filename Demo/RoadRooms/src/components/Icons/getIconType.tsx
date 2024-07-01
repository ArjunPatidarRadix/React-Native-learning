import ZocialIcon from "@expo/vector-icons/Zocial";
import OcticonIcon from "@expo/vector-icons/Octicons";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicon from "@expo/vector-icons/Ionicons";
import FoundationIcon from "@expo/vector-icons/Foundation";
import EvilIcon from "@expo/vector-icons/EvilIcons";
import EntypoIcon from "@expo/vector-icons/Entypo";
import FAIcon from "@expo/vector-icons/FontAwesome";
import FA5Icon from "@expo/vector-icons/FontAwesome5";
import SimpleLineIcon from "@expo/vector-icons/SimpleLineIcons";
import FeatherIcon from "@expo/vector-icons/Feather";
import AntIcon from "@expo/vector-icons/AntDesign";
import FontistoIcon from "@expo/vector-icons/Fontisto";

export default (type: string) => {
  switch (type) {
    case "zocial":
      return ZocialIcon;
    case "octicon":
      return OcticonIcon;
    case "material":
      return MaterialIcon;
    case "material-community":
      return MaterialCommunityIcon;
    case "ionicon":
      return Ionicon;
    case "foundation":
      return FoundationIcon;
    case "evilicon":
      return EvilIcon;
    case "entypo":
      return EntypoIcon;
    case "font-awesome":
      return FAIcon;
    case "font-awesome-5":
      return FA5Icon;
    case "simple-line-icon":
      return SimpleLineIcon;
    case "feather":
      return FeatherIcon;
    case "antdesign":
      return AntIcon;
    case "fontisto":
      return FontistoIcon;
    default:
      return MaterialIcon;
  }
};
