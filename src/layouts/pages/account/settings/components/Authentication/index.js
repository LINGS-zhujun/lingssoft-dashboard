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
import Divider from "@mui/material/Divider";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDBadge from "components/MDBadge";

// react-i18next
import { useTranslation } from "react-i18next";

function Authentication() {
  const { t } = useTranslation("page_settings");
  return (
    <Card id="2fa" sx={{ overflow: "visible" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDTypography variant="h5">{t("auth_title")}</MDTypography>
        <MDBadge variant="contained" color="success" badgeContent={t("auth_enabled")} container />
      </MDBox>
      <MDBox p={3}>
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <MDTypography variant="body2" color="text">
            {t("auth_security_keys")}
          </MDTypography>
          <MDBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <MDBox mx={{ xs: 0, sm: 2 }} mb={{ xs: 1, sm: 0 }}>
              <MDTypography variant="button" color="text" fontWeight="regular">
                {t("auth_no_keys")}
              </MDTypography>
            </MDBox>
            <MDButton variant="outlined" color="dark" size="small">
              {t("auth_add")}
            </MDButton>
          </MDBox>
        </MDBox>
        <Divider />
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <MDTypography variant="body2" color="text">
            {t("auth_sms")}
          </MDTypography>
          <MDBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <MDBox mx={{ xs: 0, sm: 2 }} mb={{ xs: 1, sm: 0 }}>
              <MDTypography variant="button" color="text" fontWeight="regular">
                +3012374423
              </MDTypography>
            </MDBox>
            <MDButton variant="outlined" color="dark" size="small">
              {t("auth_edit")}
            </MDButton>
          </MDBox>
        </MDBox>
        <Divider />
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <MDTypography variant="body2" color="text">
            {t("auth_app")}
          </MDTypography>
          <MDBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <MDBox mx={{ xs: 0, sm: 2 }} mb={{ xs: 1, sm: 0 }}>
              <MDTypography variant="button" color="text" fontWeight="regular">
                {t("auth_not_configured")}
              </MDTypography>
            </MDBox>
            <MDButton variant="outlined" color="dark" size="small">
              {t("auth_setup")}
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Authentication;
