import React, { useState, useEffect } from "react";
import CertificationForm from "./certificationForm";
import uniqid from "uniqid";

export default function Certification({ updateCertification }) {
  const [certificationList, setCertificationList] = useState([]);
  const addNewCertification = () => {
    let arr = certificationList;
    let newArr = [...arr, { id: uniqid() }];
    setCertificationList(newArr);
  };

  const updateCertificationList = (e) => {
    let arr = certificationList;
    let item = arr.filter((i) => {
      return i.id == e.id;
    });
    let index = arr.indexOf(item[0]);
    arr[index] = e;
    setCertificationList(arr);
    updateCertification(arr);
  };

  const deleteCertification = (e) => {
    let arr = certificationList;
    let item = arr.filter((i) => {
      return i.id == e;
    });
    let index = arr.indexOf(item[0]);
    let newArr = arr.filter((x) => {
      return x.id != e;
    });
    setCertificationList(newArr);
    updateCertification(newArr);
  };
  useEffect(() => {
    console.log(certificationList);
  });
  return (
    <div className="section">
      <h2>Certification</h2>
      <hr />
      {certificationList.map((e) => {
        return (
          <CertificationForm
            key={e.id}
            id={e.id}
            updateCertificationList={updateCertificationList}
            deleteCertification={deleteCertification}
          />
        );
      })}
      
      <button onClick={addNewCertification}>Add new certification</button>
    </div>
  );
}
