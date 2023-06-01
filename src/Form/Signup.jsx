import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { projectStorage as storage } from "../firebase";

function Signup() {

  const name = useRef();
  const surname = useRef();
  const id_number = useRef();
  const sex = useRef();
  const telephone = useRef();
  const cellphone = useRef();
  const email = useRef();
  const address = useRef();
  const city = useRef();
  const province = useRef();
  const code = useRef();
  const qualification = useRef();
  const password = useRef();
  const passwordConfirm = useRef();

  const employer = useRef();
  const employer_address = useRef();
  const employer_phone = useRef();
  const employer_email = useRef();
  const employer_fax = useRef();
  const employer_city = useRef();
  const employer_province = useRef();
  const employer_code = useRef();
  const position = useRef();

  const consulting_eng_name = useRef();
  const consulting_eng_surname = useRef();
  const consulting_eng_organisation = useRef();
  const consulting_eng_practicing_field = useRef();
  const consulting_eng_email = useRef();
  const consulting_eng_telephone = useRef();
  const consulting_eng_cellphone = useRef();
  const [consulting_eng_company_profile, setConsultingEngCompanyProfile] =
    useState(null);

  const handleConsultingEngFileChange = (event) => {
    const consulting_eng_company_profile_file = event.target.files[0];
    setConsultingEngCompanyProfile(consulting_eng_company_profile_file);
  };

  const consulting_eng_ref_name = useRef();
  const consulting_eng_ref_address = useRef();
  const consulting_eng_ref_phone = useRef();

  //GET MEMBERSHIP CATEGORY INPUTS
  
  const [selectedStudentCard, setSelectedStudentCard] = useState(null);

  ///Signature and Date

  const [date, setDate] = useState("");
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const signature = useRef();

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    
    setSelectedOption(event.target.value);
   
  };

  
  const handleFileChange = (event) => {
    const student_card_file = event.target.files[0];
    setSelectedStudentCard(student_card_file);
  };

  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password.current.value !== passwordConfirm.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(
          email.current.value,
          password.current.value
        );

      await user.updateProfile({
        displayName: name.current.value,
      });

      if (selectedStudentCard) {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(selectedStudentCard.name);
        await fileRef.put(selectedStudentCard);
        const downloadURL = await fileRef.getDownloadURL();
        user.studentCard = {
          name: selectedStudentCard.name,
          url: downloadURL,
        };
      }

      if (consulting_eng_company_profile) {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(consulting_eng_company_profile.name);
        await fileRef.put(consulting_eng_company_profile);
        const downloadURL = await fileRef.getDownloadURL();
        user.consultingCompanyProfile = {
          name: consulting_eng_company_profile.name,
          url: downloadURL,
        };
      }

      await firebase.firestore().collection("users").doc(user.uid).set({
        ///Member Information
        name: name.current.value,
        surname: surname.current.value,
        id_number: id_number.current.value,
        telephone: telephone.current.value,
        cellphone: cellphone.current.value,
        address: address.current.value,
        city: city.current.value,
        province: province.current.value,
        code: code.current.value,
        qualification: qualification.current.value,

        ///Employer Information
        employer: employer.current.value,
        employer_address: employer_address.current.value,
        employer_phone: employer_phone.current.value,
        employer_email: employer_email.current.value,
        employer_fax: employer_fax.current.value,
        employer_city: employer_city.current.value,
        employer_province: employer_province.current.value,
        employer_code: employer_code.current.value,
        position: position.current.value,

        ///Membership category Information
        membership_category: selectedOption,

        ///Consulting Engineers Information
        consulting_eng_name: consulting_eng_name.current.value,
        consulting_eng_surname: consulting_eng_surname.current.value,
        consulting_eng_organisation: consulting_eng_organisation.current.value,
        consulting_eng_practicing_field:
          consulting_eng_practicing_field.current.value,
        consulting_eng_email: consulting_eng_email.current.value,
        consulting_eng_telephone: consulting_eng_telephone.current.value,
        consulting_eng_cellphone: consulting_eng_cellphone.current.value,

        ///Trade Reference Information
        consulting_eng_ref_name: consulting_eng_ref_name.current.value,
        consulting_eng_ref_address: consulting_eng_ref_address.current.value,
        consulting_eng_ref_phone: consulting_eng_ref_phone.current.value,

        ///Signature and Date
        signature: signature.current.value,
        date: date,
      });

      navigate("/");
    } catch {
      setError("Failed to create an account");
    }
  }

  return (
    <div className="my-5">
      <div className="container xs-container-fluid  m-auto mt-5 mb-5">
        <Card>
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <h2 className="text-center mb-4">Member Information</h2>
              <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" ref={name} required />
              </Form.Group>
              <Form.Group id="surname">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" ref={surname} required />
              </Form.Group>
              <Form.Group id="id_number">
                <Form.Label>ID Number</Form.Label>
                <Form.Control type="text" ref={id_number} required />
              </Form.Group>
              <Form.Group id="sex">
                <Form.Label>Sex</Form.Label>
                <Form.Control type="text" ref={sex} required />
              </Form.Group>
              <Form.Group id="telephone">
                <Form.Label>Telephone</Form.Label>
                <Form.Control type="text" ref={telephone} required />
              </Form.Group>
              <Form.Group id="cellphone">
                <Form.Label>Cellphone</Form.Label>
                <Form.Control type="text" ref={cellphone} required />
              </Form.Group>
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" ref={address} required />
              </Form.Group>
              <Form.Group id="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" ref={city} required />
              </Form.Group>
              <Form.Group id="province">
                <Form.Label>Province</Form.Label>
                <Form.Control type="text" ref={province} required />
              </Form.Group>
              <Form.Group id="code">
                <Form.Label>Code</Form.Label>
                <Form.Control type="text" ref={code} required />
              </Form.Group>
              <Form.Group id="qualification">
                <Form.Label>Qualification</Form.Label>
                <Form.Control type="text" ref={qualification} required />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={email} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={password} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirm} required />
              </Form.Group>

              <h2 className="text-center mb-4">Employment Information</h2>

              <Form.Group id="employer">
                <Form.Label>Employer</Form.Label>
                <Form.Control type="text" ref={employer} required />
              </Form.Group>
              <Form.Group id="employer_address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" ref={employer_address} required />
              </Form.Group>

              <Form.Group id="employer_phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" ref={employer_phone} required />
              </Form.Group>

              <Form.Group id="employer_email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={employer_email} required />
              </Form.Group>
              <Form.Group id="employer_fax">
                <Form.Label>Fax</Form.Label>
                <Form.Control type="text" ref={employer_fax} required />
              </Form.Group>
              <Form.Group id="employer_city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" ref={employer_city} required />
              </Form.Group>
              <Form.Group id="employer_province">
                <Form.Label>Province</Form.Label>
                <Form.Control type="text" ref={employer_province} required />
              </Form.Group>
              <Form.Group id="employer_code">
                <Form.Label>Code</Form.Label>
                <Form.Control type="text" ref={employer_code} required />
              </Form.Group>
              <Form.Group id="position">
                <Form.Label>Position</Form.Label>
                <Form.Control type="text" ref={position} required />
              </Form.Group>

              <h2 className="text-center mb-4">Membership Category (tick)</h2>
              <Form.Group>
               
                <Form.Check
                  type="radio"
                  name="option"
                  value="Full time student"
                  label="Full time student"
                  checked={selectedOption === "Full time student"}
                  onChange={handleOptionChange}
                />
              </Form.Group>
              
              <Form.Group>
               
                <Form.Check
                  type="radio"
                  name="option"
                  label="Engineer Non ESCA Member"
                  value="Engineer Non ESCA Member"
                  checked={selectedOption === "Engineer Non ESCA Member"}
                  onChange={handleOptionChange}
                />
              </Form.Group>

              <Form.Group>
                
                <Form.Check
                  type="radio"
                  name="option"
                  label="Engineer ESCA Member"
                  value="Engineer ESCA Member"
                  checked={selectedOption === "Engineer ESCA Member"}
                  onChange={handleOptionChange}
                />
              </Form.Group>

              <Form.Group>
                
                <Form.Check
                  type="radio"
                  name="option"
                  label="Technical Non Engineer"
                  value="Technical Non Engineer"
                  checked={selectedOption === "Technical Non Engineer"}
                  onChange={handleOptionChange}
                />
              </Form.Group>

              <Form.Group>
                
                <Form.Check
                  type="radio"
                  name="option"
                  value="Retired"
                  label="Retired"
                  checked={selectedOption === "Retired"}
                  onChange={handleOptionChange}
                />
              </Form.Group>

              <Form.Group id="fileInput">
                <Form.Label>Choose a file</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
                <Form.Text className="text-muted">
                  Select a file from your device.
                </Form.Text>
              </Form.Group>

              <h2 className="text-center mb-4">Consulting Engineers</h2>

              <Form.Group id="consulting_eng_name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" ref={consulting_eng_name} required />
              </Form.Group>
              <Form.Group id="consulting_eng_surname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  ref={consulting_eng_surname}
                  required
                />
              </Form.Group>
              <Form.Group id="consulting_eng_organisation">
                <Form.Label>Organization Name</Form.Label>
                <Form.Control
                  type="text"
                  ref={consulting_eng_organisation}
                  required
                />
              </Form.Group>
              <Form.Group id="consulting_eng_practicing_field">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  ref={consulting_eng_practicing_field}
                  required
                />
              </Form.Group>
              <Form.Group id="consulting_eng_email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" ref={consulting_eng_email} required />
              </Form.Group>
              <Form.Group id="consulting_eng_telephone">
                <Form.Label>Telephone</Form.Label>
                <Form.Control
                  type="text"
                  ref={consulting_eng_telephone}
                  required
                />
              </Form.Group>
              <Form.Group id="consulting_eng_cell">
                <Form.Label>Cellphone</Form.Label>
                <Form.Control
                  type="text"
                  ref={consulting_eng_cellphone}
                  required
                />
              </Form.Group>

              <Form.Group id="fileInput">
                <Form.Label>Choose a file</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleConsultingEngFileChange}
                />
                <Form.Text className="text-muted">
                  Select a file from your device.
                </Form.Text>
              </Form.Group>

              <h2 className="text-center mb-4">
                Trade References (consulting engineers only){" "}
              </h2>

              <Form.Group id="consulting_eng_ref_name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  ref={consulting_eng_ref_name}
                  required
                />
              </Form.Group>
              <Form.Group id="consulting_eng_surname">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  ref={consulting_eng_ref_address}
                  required
                />
              </Form.Group>
              <Form.Group id="consulting_eng_organisation">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  ref={consulting_eng_ref_phone}
                  required
                />
              </Form.Group>

              <h2 className="text-center mb-4">Signature </h2>

              <Form.Group id="signatureInput">
                <Form.Label>Signature</Form.Label>
                <Form.Control
                  type="text"
                  ref={signature}
                  placeholder="Enter your signature"
                />
              </Form.Group>

              <Form.Group id="dateInput">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                />
              </Form.Group>

              <Button disabled={loading} className="w-100 mt-4" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
