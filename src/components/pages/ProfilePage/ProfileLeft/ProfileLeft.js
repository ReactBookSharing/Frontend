import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileLeft.css';
function ProfileLeft(props) {
    const { profile, className } = props;
    return (
      <div className={`${className} ProfileLeft`}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title text-center">@{ profile.name }</h3>
          </div>
          <div className="card-body text-center item-user border-bottom">
            <div className="profile-pic">
              <div className="profile-pic-img">
                <span
                  className="bg-success dots"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="online"
                ></span>
                <img
                  src={profile.photo}
                  className="brround"
                  alt="user"
                />
              </div>
              <Link to="/profile" className="text-dark">
                <h4 className="mt-3 mb-0 font-weight-semibold">
                  { profile.name } { profile.surname }
                </h4>
              </Link>
            </div>
          </div>
          <div className="item1-links  mb-0">
            <Link to="/profile/edit/" className="active d-flex align-items-center justify-content-start border-bottom  ProfileLeft__card__item">
              <span className="icon1 mr-3">
                <i className="mdi mdi-account-card-details"></i>
              </span>{' '}
              Редактировать профиль
            </Link>
            <Link to="/profile/books" className="active d-flex align-items-center justify-content-start border-bottom  ProfileLeft__card__item">
              <span className="icon1 mr-3">
                <i className="icon icon-user"></i>
              </span>{' '}
              Мои книги
            </Link>
            {/* <Link to="/profile/history" className="active d-flex align-items-center justify-content-start border-bottom  ProfileLeft__card__item">
              <span className="icon1 mr-3">
                <i className="icon icon-user"></i>
              </span>{' '}
              История активности
            </Link> */}
            <Link to="/logout" className="d-flex align-items-center justify-content-start  ProfileLeft__card__item">
              <span className="icon1 mr-3">
                <i className="icon icon-power"></i>
              </span>{' '}
              Выйти
            </Link>
          </div>
        </div>
      </div>
    );
  // }
}

export default ProfileLeft;
