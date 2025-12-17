import UserInfo from "./UserInfo";

const UserProfile = () => {
  const user = {
    name: "John Doe",
    age: 25,
  };

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={user.name} age={user.age} />
    </div>
  );
};

export default UserProfile;
