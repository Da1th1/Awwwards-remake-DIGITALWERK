import "./third.css";
import C from "../img/volvo.jpg";
import D from "../img/cup.jpg";
import E from "../img/drink.jpg";
import F from "../img/man.jpg";
import React, { useState, useEffect } from "react";
import { getCases, getStrapiImageUrl } from "../../services/api";

// Fallback data in case API is not available
const fallbackCases = [
  { title: "Volvo", description: "Thought leadership through sustainable communication", image: C },
  { title: "Deemers Teehaus", description: "Freshly brewed: Austria's largest online shop", image: D },
  { title: "Zurück zum Ursprung", description: "A website relaunch that goes deeper", image: E },
  { title: "Rainer Schönfelder", description: "A website relaunch that goes deeper", image: F }
];

const Third = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        setLoading(true);
        const data = await getCases();
        
        if (data && data.length > 0) {
          // Transform Strapi data to component format
          const transformedCases = data.slice(0, 4).map(caseItem => ({
            title: caseItem.attributes.title,
            description: caseItem.attributes.description,
            image: getStrapiImageUrl(caseItem.attributes.featuredImage),
            slug: caseItem.attributes.slug
          }));
          setCases(transformedCases);
        } else {
          // Use fallback if no data from API
          setCases(fallbackCases);
        }
      } catch (err) {
        console.error("Error loading cases:", err);
        // Use fallback data on error
        setCases(fallbackCases);
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, []);

  // Display first 4 cases
  const displayCases = cases.slice(0, 4);
  const caseClasses = ["rec-1", "rec-2", "rec-3", "rec-4"];

  return <div className="t">
      <div className="rec">Recent <br /> Cases</div>
      {loading && <div className="loading-message">Loading cases...</div>}
      {displayCases.map((caseItem, index) => (
        <div key={index} className={caseClasses[index]}>
          <h1 className="title-1">{caseItem.title}</h1>
          <p className="des-1">{caseItem.description}</p>
          <div className="sub-rec-1">
            <img 
              src={caseItem.image} 
              alt={caseItem.title}  
              className="picdrop"
              onError={(e) => {
                // Fallback to default images if CMS image fails
                e.target.src = fallbackCases[index]?.image || "";
              }}
            />
          </div>
        </div>
      ))}
      <div className="oval-2">
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets2.lottiefiles.com/packages/lf20_avndu8kw.json"
        >
    </lottie-player>
    </div>
  </div>;
};

export default Third;
