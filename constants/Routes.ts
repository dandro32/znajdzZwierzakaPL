import { ComponentType } from "react";
import { RootTabParamList } from "../types";
import { FontAwesome5 } from "@expo/vector-icons";

import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

export interface IRoute {
  component: ComponentType<any>;
  fontIconName: React.ComponentProps<typeof FontAwesome5>["name"];
  id: keyof RootTabParamList;
  title: string;
}

export const Routes: IRoute[] = [
  {
    component: TabOneScreen,
    fontIconName: "dog",
    id: "TabOne",
    title: "Zgubiłem zwierzaka",
  },
  {
    component: TabTwoScreen,
    fontIconName: "angellist",
    id: "TabTwo",
    title: "Znalazłem zwierzaka",
  },
];
