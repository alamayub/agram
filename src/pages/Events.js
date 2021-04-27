import '../css/events.css'

function Event() {

  const events = [
    { name: 'Office event with tomorrowland', img: 'https://weraveyou.com/wp-content/uploads/2020/04/Tomorrowland-2019-footage.jpg' },
    { name: 'Office event with tomorrowland', img: 'https://media.wired.com/photos/5e618502dd088e00081102a9/2:1/w_2400,h_1200,c_limit/Biz-conference-187591171.jpg' },
    { name: 'Office event with tomorrowland', img: 'https://foxeventnepal.com/uploads/image/19-12-23-30982.png' },
    { name: 'Office event with tomorrowland', img: 'https://hire4event.com/blogs/wp-content/uploads/2019/03/best-Event-company-in-Greater-Noida-.jpg' },
    { name: 'Office event with tomorrowland', img: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg' },
    { name: 'Office event with tomorrowland', img: 'https://weraveyou.com/wp-content/uploads/2020/04/Tomorrowland-2019-footage.jpg' },
    { name: 'Office event with tomorrowland', img: 'https://media.wired.com/photos/5e618502dd088e00081102a9/2:1/w_2400,h_1200,c_limit/Biz-conference-187591171.jpg' },
    { name: 'Office event with tomorrowland', img: 'https://foxeventnepal.com/uploads/image/19-12-23-30982.png' },
    { name: 'Office event with tomorrowland', img: 'https://hire4event.com/blogs/wp-content/uploads/2019/03/best-Event-company-in-Greater-Noida-.jpg' },
    { name: 'Office event with tomorrowland', img: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg' }
  ]
    
  return (
    <div className='events'>
      { events.map( (e, i) => (
        <div className='events-item'>{ e.name }</div>  
      )) }
    </div>  
  )  
}

export default Event