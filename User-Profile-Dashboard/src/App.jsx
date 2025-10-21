import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import SkillBadge from "./SkillBadge";
import ProfileCard from "./ProfileCard";
import "./App.css";
import "./ProfileCard.css";
// //```
// [Avatar Image]
// Chinwe Okoro
// Senior Developer at Paystack

// Projects: 45  |  Followers: 1.2K  |  Following: 300

// Skills:
// [React - Expert] [JavaScript - Expert] [CSS - Intermediate]
// ```

// **Challenge:** Make the stats clickable and change color on hover

function App() {
  return (
    <div className="appContainer">
      <ProfileCard>
        <ProfileHeader
          avatar="https://i.pinimg.com/1200x/f0/34/3b/f0343be20dd25de9832224fe5e2ea3bc.jpg"
          name="Ogor Paul Olatunji"
          title="Junior AI Developer at Google"
        />
        <ProfileStats projects={45} followers="1.2k" following={300} />
        <SkillBadge skill="React" level="Expert" />
        <SkillBadge skill="Javascript" level="Beginner" />
        <SkillBadge skill="CSS" level="Intermediate" />
      </ProfileCard>
    </div>
  );
}

export default App;
