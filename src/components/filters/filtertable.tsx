import { useState, useEffect } from "react";
import WebTable from "../webtable"; 
import MobileTable from "../mobilescreen/mobiletable";

const FilterTable: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileTable /> : <WebTable />;
};

export default FilterTable;
