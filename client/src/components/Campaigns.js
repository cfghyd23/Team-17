import Campaign from "./CampaignData.js"

const Campaigns = ({ value }) => {
  return (
    <div>
    <h1>My Campaigns</h1>
    <h3>Upcoming</h3>
      {value.map((value, index) => (
        <Campaign key={index} Campaign={value} />
      ))}
      <br></br>
      <h3>Participated Campaings</h3>
      {value.map((value, index) => (
        <Campaign key={index} Campaign={value} />
      ))}
    </div>
  )
}

export default Campaigns