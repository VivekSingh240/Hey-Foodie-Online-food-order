import { useSession, signIn, signOut } from "next-auth/react"
import { Form, Input, Button, Checkbox, Row, Col, Card,Avatar } from "antd";
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      window.location = "http://localhost:3000/DashboardPage"
    );
  }
  return (
    <div>
      <Button onClick={() => signIn()} style={{padding: "20px 30px 20px 30px",alignItems: "center",display: "inline-flex",height: "40px",borderRadius: "24px",}}
                htmlType="submit"
                        size="large"><Avatar src="https://pixlok.com/wp-content/uploads/2021/04/Google-Icon-PNG-768x768.jpg"/>Continue With Google</Button>
    </div>
  );
}