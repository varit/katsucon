export default function Timeline(props) {
  const { thoughts } = props;
  console.log(thoughts);
  return (
    <div>
      {thoughts.map((thought) => (
        <div>
          <div>{thought.user.username}</div>
          <div>{thought.comment}</div>
        </div>
      ))}
    </div>
  );
}
