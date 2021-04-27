import '../css/blog.css'

function Blog() {
  const blogs = [
    { name: 'Office event with tomorrow land', img: 'https://weraveyou.com/wp-content/uploads/2020/04/Tomorrowland-2019-footage.jpg' },
    { name: 'Office event with tomorrow land', img: 'https://media.wired.com/photos/5e618502dd088e00081102a9/2:1/w_2400,h_1200,c_limit/Biz-conference-187591171.jpg' },
    { name: 'Office event with tomorrow land', img: 'https://foxeventnepal.com/uploads/image/19-12-23-30982.png' },
    { name: 'Office event with tomorrow land', img: 'https://hire4event.com/blogs/wp-content/uploads/2019/03/best-Event-company-in-Greater-Noida-.jpg' },
    { name: 'Office event with tomorrow land', img: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg' }
  ]
  return (
    <div className='blog container'>
      <div className='blog-items'>
        { blogs.map( (b, i) => (
          <div className='blog-item' key={ blogs.indexOf(b) }>
            <img src={ b.img } alt={ b.name } />
            <div className='blog-item-content'>
              <h2>{ b.name }</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.</p>
              <span>12 July 2021</span>
            </div>
          </div>
        )) }
      </div>
    </div>  
  )  
}

export default Blog