import React, { useEffect } from "react";
import WebinarSection from "../Components/Webinar/WebinarSection";

const WebinarPage = () => {
  useEffect(() => {
    document.title = "Webinars | EHM Earth Hydro Management";
  }, []);

  return (
    <div>
      <WebinarSection />
    </div>
  );
};

export default WebinarPage;