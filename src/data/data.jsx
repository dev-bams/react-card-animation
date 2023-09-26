import AppleIcon from "../svgcomponents/AppleIcon";
import AndroidIcon from "../svgcomponents/AndroidIcon";
import FigmaIcon from "../svgcomponents/FigmaIcon";
import ChromeIcon from "../svgcomponents/ChromeIcon";
import AdobeIcon from "../svgcomponents/AdobeIcon";

const data = [
  {
    cardImage: <AppleIcon />,
    cardTitle: "iOS App",
    cardText: "Create, browse and save palettes on the go.",
    overLayText: "View on the App store",
    overLayTextColor: "#02aee5",
    overLayBG: "#d8f6ff",
    cardID: 1,
  },
  {
    cardImage: <AndroidIcon />,
    cardTitle: "Android App",
    cardText: "Thousands of palettes in your pocket",
    overLayText: "View on the Play store",
    overLayTextColor: "#15B789",
    overLayBG: "#D5F8EF",
    cardID: 2,
  },
  {
    cardImage: <FigmaIcon />,
    cardTitle: "Figma Plugin",
    cardText: "All palettes right in your workspace",
    overLayText: "Install now",
    overLayTextColor: "#E50087",
    overLayBG: "#FFE5F4",
    cardID: 3,
  },
  {
    cardImage: <ChromeIcon />,
    cardTitle: "Chrome Extension",
    cardText: "Get and edit a palette every new tab",
    overLayText: "Add to chrome",
    overLayTextColor: "#7F2FDE",
    overLayBG: "#E9E2F7",
    cardID: 4,
  },
  {
    cardImage: <AdobeIcon />,
    cardTitle: "Adobe Extension",
    cardText: "Use Coolors with your favorite tools",
    overLayText: "Download",
    overLayTextColor: "#15B789",
    overLayBG: "#D5F8EF",
    cardID: 5,
  },
  
];

export default data;
