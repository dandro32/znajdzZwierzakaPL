import { ComponentType } from "react";
import { RootTabParamList } from "../types";
import { FontAwesome5 } from "@expo/vector-icons";

import LostScreen from "../screens/LostScreen";
import FoundScreen from "../screens/FoundScreen";
import MapScreen from "../screens/MapScreen";

export interface IRoute {
  component: ComponentType<any>;
  fontIconName: React.ComponentProps<typeof FontAwesome5>["name"];
  id: keyof RootTabParamList;
  title: string;
}

export const Routes: IRoute[] = [
  {
    component: MapScreen,
    fontIconName: "map-marked-alt",
    id: "TabOne",
    title: "Mapa",
  },
  {
    component: LostScreen,
    fontIconName: "dog",
    id: "TabTwo",
    title: "Zgubiłem zwierzaka",
  },
  {
    component: FoundScreen,
    fontIconName: "angellist",
    id: "TabThree",
    title: "Znalazłem zwierzaka",
  },
];
