// top level import
import { useState } from "react";
// mui
import { Button, Stack } from "@mui/material";

const AppTab = () => {
  const [currentTab, setCurrentTab] = useState("Paris Olympics 2024 - 300");
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
    >
      {[
        "Paris Olympics 2024 - 300",
        "T20 World Cup 2024 - 200",
        "Manchester United - 200",
        "Mumbai City FC- 200",
        "Motorsports - 10",
      ].map((tabs, index) => {
        return (
          <Button
            key={tabs + index}
            variant="outlined"
            className="tabButton"
            sx={{
              backgroundColor:
                currentTab === tabs ? "#ac8454 !important" : "white !important",
              color:
                currentTab === tabs ? "white !important" : "black !important",
            }}
            onClick={() => {
              setCurrentTab(tabs);
            }}
          >
            {tabs}
          </Button>
        );
      })}
    </Stack>
  );
};
export default AppTab;
