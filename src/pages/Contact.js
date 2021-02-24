import '../css/contact-us.css'
function Contact() {
  return (
    <div className="Contact-us">
      <div className="contact-us-class">
        <div className="contact-us-class-content">
          <div className="contact-us-class-content-header">get in touch</div>
          <div className="contact-us-class-content-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
          </div>
          <ul>
            <li><i class="fa fa-envelope" aria-hidden="true"></i>email@email.com</li>
            <li><i class="fa fa-mobile" aria-hidden="true"></i>+9779876543210</li>
            <li><i class="fa fa-map-marker" aria-hidden="true"></i> Panitanki-10, Birgunj, Parsa, Nepal</li>
          </ul>
          <div className="contact-us-class-content-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.475286597595!2d84.88296471436823!3d27.01514346217793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993558b671d2faf%3A0x8922702ad8a7ddf5!2sAgram%20InfoTech%20Pvt.%20Ltd%2C%20Panitanki%2C%20Birgunj!5e0!3m2!1sen!2snp!4v1613635250851!5m2!1sen!2snp" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="Agram Infotech"></iframe>
          </div>
        </div>  
        <div className="contact-us-class-form">
          <form>
            <input type="text" name="name" placeholder="Full name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="number" name="number" placeholder="Mobile Number" />  
            <textarea rows="5" name="message" placeholder="Type your message..." />
            <input type="submit" value="Submit" />
          </form>  
        </div>  
      </div>  
    </div>
  )
}

export default Contact;