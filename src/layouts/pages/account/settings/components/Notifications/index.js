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

// @mui material components
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Switch from "@mui/material/Switch";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Setting pages components
import TableCell from "layouts/pages/account/settings/components/TableCell";

// react-i18next
import { useTranslation } from "react-i18next";

function Notifications() {
  const { t } = useTranslation("page_settings");
  return (
    <Card id="notifications">
      <MDBox p={3} lineHeight={1}>
        <MDBox mb={1}>
          <MDTypography variant="h5">{t("notif_title")}</MDTypography>
        </MDBox>
        <MDTypography variant="button" color="text">
          {t("notif_desc")}
        </MDTypography>
      </MDBox>
      <MDBox pb={3} px={3}>
        <MDBox minWidth="auto" sx={{ overflow: "scroll" }}>
          <Table sx={{ minWidth: "36rem" }}>
            <MDBox component="thead">
              <TableRow>
                <TableCell width="100%" padding={[1.5, 3, 1.5, 0.5]} noBorder>
                  {t("notif_activity")}
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]} noBorder>
                  {t("notif_email")}
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]} noBorder>
                  {t("notif_push")}
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]} noBorder>
                  {t("notif_sms")}
                </TableCell>
              </TableRow>
            </MDBox>
            <TableBody>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <MDBox lineHeight={1.4}>
                    <MDTypography
                      display="block"
                      variant="button"
                      fontWeight="regular"
                    >
                      {t("notif_mentions")}
                    </MDTypography>
                    <MDTypography
                      variant="caption"
                      color="text"
                      fontWeight="regular"
                    >
                      {t("notif_mentions_desc")}
                    </MDTypography>
                  </MDBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <MDBox lineHeight={1.4}>
                    <MDTypography
                      display="block"
                      variant="button"
                      fontWeight="regular"
                    >
                      {t("notif_comments")}
                    </MDTypography>
                    <MDTypography
                      variant="caption"
                      color="text"
                      fontWeight="regular"
                    >
                      {t("notif_comments_desc")}
                    </MDTypography>
                  </MDBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <MDBox lineHeight={1.4}>
                    <MDTypography
                      display="block"
                      variant="button"
                      fontWeight="regular"
                    >
                      {t("notif_follows")}
                    </MDTypography>
                    <MDTypography
                      variant="caption"
                      color="text"
                      fontWeight="regular"
                    >
                      {t("notif_follows_desc")}
                    </MDTypography>
                  </MDBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <MDTypography display="block" variant="button" color="text">
                    {t("notif_login")}
                  </MDTypography>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Notifications;
