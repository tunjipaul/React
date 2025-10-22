function ProfileStats({ projects, followers, following }) {
  return (
    <div className="profileStats">
      <h3 className="entity">Projects:{projects}</h3>
      <p className="entity">Followers:{followers}</p>
      <p className="entity">Following:{following}</p>
    </div>
  );
}

export default ProfileStats;
