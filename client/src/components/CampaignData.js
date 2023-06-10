import Button from "./Button"

const CampaignData = ({ Campaign }) => {
  return (
    <div
      className='task'
    >
      <h3>
        {Campaign.name}{' '}
        {/* <Button color='green' text='Accept' />
        <Button color='red' text='Reject' /> */}
      </h3>
      <p>{Campaign.day}</p>
    </div>
  )
}

export default CampaignData