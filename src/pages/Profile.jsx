import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/Button"; // Assuming Button component path

const Profile = ({ user }) => {
  return (
    <Card className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <CardContent className="p-6 text-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
        <p className="mt-2 text-sm text-gray-700">{user.bio}</p>
        <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default Profile;
