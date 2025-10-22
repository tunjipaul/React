function SkillBadge({ skill, level }) {
  const levelColor =
    level === "Beginner"
      ? "rgba(154, 146, 148, 1)"
      : level === "Intermediate"
      ? "rgba(75, 66, 198, 1)"
      : level === "Expert"
      ? "rgba(9, 127, 37, 1)"
      : "#bdc028ff";
  return (
    <span className="skillLevel" style={{ backgroundColor: levelColor }}>
      Skills:
      {skill} - {level}
    </span>
  );
}

export default SkillBadge;
