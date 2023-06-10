import Campaign from "./CampaignData.js"

const Campaigns = ({ value }) => {
  return (
    <div>
    <h1>On-Going Campaigns</h1>
      {value.map((value, index) => (
        <Campaign key={index} Campaign={value} />
      ))}
    </div>
  )
}

export default Campaigns