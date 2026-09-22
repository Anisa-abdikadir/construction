import NavBar from "../Components/NavBar"
import FormContact from "../Contact/FormContact";
import HerContact from "../Contact/HerContact";
import Footer from "../Components/Footer"

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <HerContact/>
      <FormContact/>
      <Footer/>
    </div>
  );
};

export default Contact;