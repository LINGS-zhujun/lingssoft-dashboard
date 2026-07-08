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

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// Kanban application components
import Card from "layouts/applications/kanban/components/Card";

// Images
import officeDark from "assets/images/office-dark.jpg";
import meeting from "assets/images/meeting.jpg";
import homeDecore from "assets/images/home-decor-1.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";

const boards = (t) => ({
  columns: [
    {
      id: uuidv4(),
      title: t("backlog"),
      cards: [
        {
          id: uuidv4(),
          template: t("card_title_placeholder"),
        },
        {
          id: uuidv4(),
          template: t("drag_placeholder"),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              image={officeDark}
              badge={{ color: "dark", label: t("pending") }}
              content={t("website_design")}
              attachedFiles={3}
              members={[team1, team2, team3]}
            />
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      title: t("in_progress"),
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "error", label: t("errors") }}
              content={t("fix_firefox")}
              attachedFiles={9}
              members={[team2, team3]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "info", label: t("updates") }}
              content="Argon Dashboard PRO - React"
              attachedFiles={3}
              members={[team5, team4]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              image={meeting}
              badge={{ color: "info", label: t("updates") }}
              content="ReactJS v17 Updates"
              attachedFiles={3}
              members={[team1, team2, team3]}
            />
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      title: t("in_review"),
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "warning", label: t("in_testing") }}
              content={t("responsive_changes")}
              attachedFiles={11}
              members={[team3, team2]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "success", label: t("in_review") }}
              content={t("change_images_dim")}
              progress={80}
              members={[team3]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "info", label: t("in_review") }}
              content={t("update_links")}
              progress={60}
              attachedFiles={6}
              members={[team5, team1]}
            />
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      title: t("done"),
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              image={homeDecore}
              badge={{ color: "success", label: t("done") }}
              content={t("redesign_home")}
              attachedFiles={8}
              members={[team5, team1, team4]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "success", label: t("done") }}
              content={t("schedule_winter")}
              attachedFiles={2}
              members={[team1, team4]}
            />
          ),
        },
      ],
    },
  ],
});

export default boards;
