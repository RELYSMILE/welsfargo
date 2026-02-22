import './PageTitle.css'


const PageTitle = ({pageTitle}) => {
  return (
    <div className='pageTitle-notification'>
      <div className='pageTitle'>{pageTitle}</div>
      <div className='notification'>
      </div>
    </div>
  )
}

export default PageTitle