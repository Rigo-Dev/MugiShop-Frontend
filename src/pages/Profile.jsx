import React, { useState, useEffect } from "react";
import "../styleSheets/Profile.css";
import { Nav } from "../components/Nav";
import { fetchUserData } from "../services/RequestProfile/fechtUserData";
import { fecthImagesUser } from "../services/RequestProfile/fecthImagesUser";
import { NavLink } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";

export function Profile() {
  const [dataProfile, setDataProfile] = useState([]);
  const [imagesUser, setImages] = useState([]);

  const getDataUser = async () => {
    const data = await fetchUserData();
    setDataProfile(data);
  };

  function dowloadImg(img) {
    const url = img;
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = "image.png";
        a.click();
      });
  }

  const getImages = async () => {
    const data = await fecthImagesUser();
    setImages(data.nfts);
  };

  useEffect(() => {
    getDataUser();
    getImages();
  }, []);

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
              {dataProfile.first_name} {dataProfile.last_name}
            </p>
            <p>{dataProfile.email}</p>
            <div className="button_profile">
              <NavLink to={"/editprofile"}>
                <button className="button">Editar Perfil</button>
              </NavLink>
            </div>
          </div>
          <div className="ntf_user_container">
            {imagesUser.length >= 1
              ? imagesUser.map((p) => (
                  <div className="columns_profile" key={p.id}>
                    <div className="nft_user">
                      <img
                        className="image"
                        src={import.meta.env.VITE_IMAGES_URL + p.image}
                        alt=""
                      />
                      <div className="download_option_container">
                        <div className="download_option">
                          <AiOutlineDownload
                            className="button_download"
                            onClick={() =>
                              dowloadImg(
                                import.meta.env.VITE_IMAGES_URL + p.imagehd
                              )
                            }
                          >
                            Dowload
                          </AiOutlineDownload>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
