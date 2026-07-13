/**
=========================================================
* Material Dashboard 3 PRO React - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";

// Material Dashboard 3 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import TimelineList from "examples/Timeline/TimelineList";
import TimelineItem from "examples/Timeline/TimelineItem";

// Data
import timelineData from "layouts/pages/projects/timeline/data/timelineData";

function Timeline() {
  const { t } = useTranslation("page_timeline");

  const translatedTimelineData = useMemo(() => {
    return timelineData.map((item) => ({
      ...item,
      title: t(item.title),
      dateTime: t(item.dateTime),
      description: t(item.description),
      badges: item.badges ? item.badges.map((b) => b.startsWith("#") ? b : t(b)) : [],
    }));
  }, [t]);

  const renderTimelineItems = translatedTimelineData.map(
    ({ color, icon, title, dateTime, description, badges, lastItem }, index) => (
      <TimelineItem
        key={title + color + index}
        color={color}
        icon={icon}
        title={title}
        dateTime={dateTime}
        description={description}
        badges={badges}
        lastItem={lastItem}
      />
    )
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <TimelineList title={t("timeline_with_dotted_line")}>{renderTimelineItems}</TimelineList>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TimelineList title={t("timeline_with_dotted_line")} dark>
              {renderTimelineItems}
            </TimelineList>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Timeline;
