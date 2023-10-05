import UserInfo from "./UserInfo";

function UserProfile() {
  const user = {
    name: "Prima Wirawan",
    email: "primailkom@gmail.com",
  };

  return (
    <div>
      <h1>User Profile</h1>
      <UserInfo name={user.name} email={user.email} />
    </div>
  );
}

export default UserProfile;
