import { useColorModeValue } from "@chakra-ui/react";
import AppLayout from "../appLayout";
import SettingsSidebar from "./settingsSidebar";

function SettingsLayout({ children }: { children: JSX.Element }) {
  return (
    <AppLayout
      leftSidebar={
        <SettingsSidebar
          borderRight={"1px"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          p={2}
          h="$100vh"
        />
      }
    >
      {children}
    </AppLayout>
  );
}

export default SettingsLayout;
