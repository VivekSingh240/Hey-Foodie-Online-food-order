import { useSession, signIn, signOut } from "next-auth/react"
import { Form, Input, Button, Checkbox, Row, Col, Card,Avatar } from "antd";
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