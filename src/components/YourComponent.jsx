import myImage from '../assets/your-image.jpg'

function YourComponent() {
  return (
    <div>
      <img 
        src={myImage} 
        alt="Description" 
        style={{ 
          width: '300px',
          height: 'auto',
          borderRadius: '8px'
        }} 
      />
    </div>
  )
}

export default YourComponent 