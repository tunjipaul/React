function ProfileHeader({ name, title, avatar }) {
  return (
    <div className="profileHeader">
      <h2>{name}</h2>
      <p>{title}</p>
      <img src={avatar} alt={name} className="avatar" />
    </div>
  );
}

export default ProfileHeader;
