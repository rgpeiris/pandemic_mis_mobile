import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { isMobile as MobileBrowser } from "react-device-detect";

import HandleOffline from "./handleOffline";
import ProtectedRoutes from "./protectedRoutes";
import PublicRoutes from "./publicRoutes";
import ScrollToTop from "../hooks/scrollToTop";

import { WebLayout, MobileLayout } from "../components/layout";

import { LoginWeb, LoginMobile } from "../containers/auth";
import { DashboardWeb, DashboardMobile } from "../containers/dashboard";
import { CovidNewsWeb, CovidNewsMobile } from "../containers/covidNews";
import {
  CovidPatientWeb,
  CovidPatientMobile,
} from "../containers/covidPatient";
import {
  CovidTestWeb,
  CovidTestMobile,
  CovidTestAddBeneficiariesMobile,
  CovidTestAddBeneficiariesWeb,
  CovidTestingMenuMobile,
  CovidTestingMenuWeb,
  CovidTestAppointmentsMobile,
  CovidTestAppointmentsWeb,
} from "../containers/covidTest";
import {
  CovidVaccineWeb,
  CovidVaccineMobile,
  CovidVaccineAddBeneficiariesMobile,
  CovidVaccineAddBeneficiariesWeb,
  CovidVaccineMenuMobile,
  CovidVaccineMenuWeb,
  CovidVaccineAppointmentsMobile,
  CovidVaccineAppointmentsWeb,
  VaccinationCertificate,
} from "../containers/covidVaccine";
import {
  ProfileWeb,
  ProfileMobile,
  RegisterUserMobile,
  RegisterUserWeb,
} from "../containers/profile";
import { ContactUsWeb, ContactUsMobile } from "../containers/contactUs";
import { CreateComplaint } from "../containers/complaint";

const Navigator = () => {
  /**
   * Check platform
   * check using screen size (browser responsive), display mode (PWA installed method) or using user agent of browser
   */
  const isMobile =
    useMediaQuery("(max-width:480px)" || "(display-mode: standalone)") ||
    MobileBrowser;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<HandleOffline />}>
          {/* Routes which are accessible without login */}
          <Route element={<PublicRoutes />}>
            <Route
              path="/login"
              element={isMobile ? <LoginMobile /> : <LoginWeb />}
            />
            <Route
              path="/register-user"
              element={
                isMobile ? (
                  <RegisterUserMobile isMobile={isMobile} />
                ) : (
                  <RegisterUserWeb isMobile={isMobile} />
                )
              }
            />
          </Route>

          {/* Routes which are accessible after login  */}
          <Route element={isMobile ? <MobileLayout /> : <WebLayout />}>
            <Route element={<ProtectedRoutes />}>
              {/* Dashboard  */}
              <Route
                path="/"
                element={
                  isMobile ? (
                    <DashboardMobile isMobile={isMobile} />
                  ) : (
                    <DashboardWeb isMobile={isMobile} />
                  )
                }
              />

              {/* COVID News  */}
              <Route
                path="/covid-news"
                element={
                  isMobile ? (
                    <CovidNewsMobile isMobile={isMobile} />
                  ) : (
                    <CovidNewsWeb isMobile={isMobile} />
                  )
                }
              />

              {/* COVID Patients  */}
              <Route
                path="/covid-patients"
                element={
                  isMobile ? (
                    <CovidPatientMobile isMobile={isMobile} />
                  ) : (
                    <CovidPatientWeb isMobile={isMobile} />
                  )
                }
              />

              {/* COVID Viral Tests  */}
              <Route
                path="/covid-viral-tests-menu"
                element={
                  isMobile ? (
                    <CovidTestingMenuMobile isMobile={isMobile} />
                  ) : (
                    <CovidTestingMenuWeb isMobile={isMobile} />
                  )
                }
              />
              <Route
                path="/covid-viral-tests"
                element={
                  isMobile ? (
                    <CovidTestMobile isMobile={isMobile} />
                  ) : (
                    <CovidTestWeb isMobile={isMobile} />
                  )
                }
              />
              <Route
                path="/covid-tests-add-beneficiaries"
                element={
                  isMobile ? (
                    <CovidTestAddBeneficiariesMobile isMobile={isMobile} />
                  ) : (
                    <CovidTestAddBeneficiariesWeb isMobile={isMobile} />
                  )
                }
              />
              <Route
                path="/covid-tests-appointments"
                element={
                  isMobile ? (
                    <CovidTestAppointmentsMobile isMobile={isMobile} />
                  ) : (
                    <CovidTestAppointmentsWeb isMobile={isMobile} />
                  )
                }
              />

              {/* COVID Vaccination  */}
              <Route
                path="/covid-vaccination-menu"
                element={
                  isMobile ? (
                    <CovidVaccineMenuMobile isMobile={isMobile} />
                  ) : (
                    <CovidVaccineMenuWeb isMobile={isMobile} />
                  )
                }
              />
              <Route
                path="/covid-vaccination"
                element={
                  isMobile ? (
                    <CovidVaccineMobile isMobile={isMobile} />
                  ) : (
                    <CovidVaccineWeb isMobile={isMobile} />
                  )
                }
              />
              <Route
                path="/covid-vaccination-add-beneficiaries"
                element={
                  isMobile ? (
                    <CovidVaccineAddBeneficiariesMobile isMobile={isMobile} />
                  ) : (
                    <CovidVaccineAddBeneficiariesWeb isMobile={isMobile} />
                  )
                }
              />
              <Route
                path="/covid-vaccination-appointments"
                element={
                  isMobile ? (
                    <CovidVaccineAppointmentsMobile isMobile={isMobile} />
                  ) : (
                    <CovidVaccineAppointmentsWeb isMobile={isMobile} />
                  )
                }
              />
              <Route
                path="/covid-vaccination-certificate"
                element={<VaccinationCertificate isMobile={isMobile} />}
              />

              {/* Profile  */}
              <Route
                path="/profile"
                element={
                  isMobile ? (
                    <ProfileMobile isMobile={isMobile} />
                  ) : (
                    <ProfileWeb isMobile={isMobile} />
                  )
                }
              />

              {/* Contact Us  */}
              <Route
                path="/contact-us"
                element={
                  isMobile ? (
                    <ContactUsMobile isMobile={isMobile} />
                  ) : (
                    <ContactUsWeb isMobile={isMobile} />
                  )
                }
              />

              {/* Complaint  */}
              <Route
                path="/create-complaint"
                element={
                  isMobile ? (
                    <CreateComplaint isMobile={isMobile} />
                  ) : (
                    <CreateComplaint isMobile={isMobile} />
                  )
                }
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
