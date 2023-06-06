import React, { useState, useEffect } from "react";
import "../../styleSheets/Profile.css";
import { Nav } from "../components/Nav";
import { FechtProfile } from "../../utils/ProfileFunctions";
import { NavLink } from "react-router-dom";

export function Profile() {
  const [DataProfile, setDataProfile] = useState([]);
  const [images, setImages] = useState([]);

  const getData = async () => {
    const data = await FechtProfile();
    console.log(data);
    setDataProfile(data);
  };

  const getImages = async () => {
    const token = sessionStorage.getItem("token");
    const res = await fetch("http://localhost:8000/api/my-nfts", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    const img = await res.json();
    setImages(img.nfts);
    console.log(img);
  };

  useEffect(() => {
    getData();
    getImages();
  }, []);

  const url = "https://mugishop-miniproyecto.s3.amazonaws.com";

  return (
    <div className="main_container_perfil">
      <>
        <Nav />
      </>
      <div className="container_perfil">
        <div className="container_info_perfil">
          <div className="info_perfil">
            <img src="public/images/foto1.jpg" alt="" className="image_user" />
            <p>
              {DataProfile.first_name} {DataProfile.last_name}
            </p>
            <p>{DataProfile.email}</p>
            <div className="button_profile">
              <NavLink to={"/editprofile"}>
                <button className="button">Editar Perfil</button>
              </NavLink>
            </div>
          </div>
          <div className="image_profile">
            {images.length >= 1
              ? images.map((p) => (
                  <div className="columns_profile" key={p.id}>
                    <img className="image" src={url + p.imagehd} alt="" />
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
