import React from 'react';
import 'tailwindcss/tailwind.css';
import CardGrid from "../AgentDashboard/CardGrid"
 
const AgentDashboard = () => {
  const cardData = [
    { title: 'Card 1', content: 'Content for card 1' },
    { title: 'Card 2', content: 'Content for card 2' },
    { title: 'Card 3', content: 'Content for card 3' },
    { title: 'Card 4', content: 'Content for card 4' },
  ];
 
  return (
    <div className="min-h-screen flex flex-col p-4">
          <CardGrid cardData={cardData} />
          <div className="mt-8">
            <iframe
              title="Power BI Report"
              width="100%"
              height="450"
              src="https://app.powerbi.com/reportEmbed?reportId=YOUR_REPORT_ID&autoAuth=true&ctid=YOUR_TENANT_ID"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
    </div>
  );
};
 
export default AgentDashboard;