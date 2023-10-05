import UserInfo from "./UserInfo";

function UserProfile() {
  const users = [
    {
      name: "Prima Wirawan",
      email: "primailkom@gmail.com",
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
  ];

  return (
    <div>
      <h1>User Profile</h1>
      <h2>This is user information:</h2>
      {users.map((user, index) => (
        <UserInfo key={index} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default UserProfile;
