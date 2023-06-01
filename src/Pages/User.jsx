import React from "react";
import { useLocation } from "react-router-dom";

function User() {
  const location = useLocation();
  const { data } = location.state;

  if(!data) return "";

  return (
    <div className="p-4 mt-5 mb-5">
       
      <h4 className="my-4">
        {data.surname} {data.name}
      </h4>
     <div>
      <p>ID : {data.id_number}</p>
      <p>Sex : {data.sex}</p>
      <p>Cell phone : {data.cellphone}</p>
      <p>Telephone : {data.telephone}</p>
      <p>Address : {data.address}</p>
      <p>Province : {data.province}</p>
      <p>City : {data.city}</p>
      <p>Code : {data.code}</p>
      <p>Qualification : {data.qualification}</p>
      </div>
      <h4 className="my-5">Employment Details</h4>
      <div>
         <p>Employer : {data.employer}</p>
         <p>Address : {data.employer_address}</p>
         <p>Phone : {data.employer_phone}</p>
         <p>Email : {data.employer_email}</p>
         <p>Fax : {data.employer_fax}</p>
         <p>City : {data.employer_city}</p>
         <p>Province : {data.employer_province}</p>
         <p>Code : {data.employer_code}</p>
         <p>Position : {data.position}</p>
      </div>
      <div  className="my-5">
        <h6><h4>Membership Category</h4> <br/> {data.membership_category}</h6>  
      </div>
      <h4 className="my-5">Consulting Engineering</h4>
      <div>
        <p>Name : {data.consulting_eng_name}</p>
        <p>Surname : {data.consulting_eng_surname}</p>
        <p>Organisation : {data.consulting_eng_organisation}</p>
        <p>Practising field : {data.consulting_eng_practicing_field}</p>
        <p>Email : {data.consulting_eng_email}</p>
        <p>Telephone : {data.consulting_eng_telephone}</p>
        <p>Cell phone : {data.consulting_eng_cellphone}</p>
      </div>
      <h4 className="my-5">Trade Reference Information</h4>
      <div>
        <p>Name : {data.consulting_eng_ref_name}</p>
        
        <p>Address : {data.consulting_eng_ref_address}</p>
        
        <p>Phone : {data.consulting_eng_ref_phone}</p>
      </div>

      <h4 className="my-5">Signature</h4>
      <div>
        <p>Signature : {data.signature}</p>
        <p>Cell phone : {data.date}</p>
      </div>

    </div>
  );
}

export default User;
