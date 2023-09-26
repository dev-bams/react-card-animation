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
    link: "https://apps.apple.com/app/coolors/id956480678",
  },
  {
    cardImage: <AndroidIcon />,
    cardTitle: "Android App",
    cardText: "Thousands of palettes in your pocket",
    overLayText: "View on the Play store",
    overLayTextColor: "#15B789",
    overLayBG: "#D5F8EF",
    cardID: 2,
    link: "https://play.google.com/store/apps/details?id=co.coolors.android",
  },
  {
    cardImage: <FigmaIcon />,
    cardTitle: "Figma Plugin",
    cardText: "All palettes right in your workspace",
    overLayText: "Install now",
    overLayTextColor: "#E50087",
    overLayBG: "#FFE5F4",
    cardID: 3,
    link: "https://www.figma.com/community/plugin/1068919813159975006/Coolors",
  },
  {
    cardImage: <ChromeIcon />,
    cardTitle: "Chrome Extension",
    cardText: "Get and edit a palette every new tab",
    overLayText: "Add to chrome",
    overLayTextColor: "#7F2FDE",
    overLayBG: "#E9E2F7",
    cardID: 4,
    link: "https://chrome.google.com/webstore/detail/coolors-for-chrome/paebljbhhfgngkcldmbcogmkgegjgmbg",
  },
  {
    cardImage: <AdobeIcon />,
    cardTitle: "Adobe Extension",
    cardText: "Use Coolors with your favorite tools",
    overLayText: "Download",
    overLayTextColor: "#DAAB00",
    overLayBG: "#FDF3CE",
    cardID: 5,
    link: "https://coolors.co/",
  },
];

export default data;
