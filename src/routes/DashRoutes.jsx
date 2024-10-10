import React from "react";
import { Routes, Route } from "react-router-dom";
import CoreTeam from "../components/leadership/CoreTeam";
import Testimonials from "../components/Testimonials/Testimonials";
import Events from "../components/events/Events";
import KnowledgeHub from "../components/KnowledgeHub/KnowledgeHub";
import LoginForm from "../components/auth/LoginForm";
import Home from "../components/Landing/Home";
import BusinessPartners from "../components/BusinessPartners/BusinessPartners";
import Subscribers from "../components/Subscribers/Subscribers";
import Mapview from "../components/map/Mapview";

const DashRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Mapview />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/admin" element={<CoreTeam />} />
      <Route path="/admin/testimonials" element={<Testimonials />} />
      <Route path="/admin/events" element={<Events />} />
      <Route path="/admin/knowledgeHub" element={<KnowledgeHub />} />
      <Route path="/admin/partners" element={<BusinessPartners />} />
      <Route path="/admin/subscribers" element={<Subscribers />} />
    </Routes>
  );
};

export default DashRoutes;
