import { NavigationContainer } from "@react-navigation/native";
import { TabsRoutes } from "./tab.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <TabsRoutes />
    </NavigationContainer>
  );
}
