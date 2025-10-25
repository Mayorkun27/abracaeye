import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/?results=8");
        const data = res.data.results.map((user) => ({
          image: user.picture.large,
          name: `${user.name.first} ${user.name.last}`,
          location: `${user.location.city}, ${user.location.country}`,
          bio: "Passionate about technology and storytelling 💡",
          status: Math.random() > 0.5 ? "online" : "offline",
        }));
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className="flex-1 bg-gray-100 p-6">
      {loading ? (
        <p className="text-center text-gray-600 mt-10">Loading users...</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {users.map((user, index) => (
            <BlogCard key={index} {...user} />
          ))}
        </div>
      )}
      
    </main>
  );
};

export default Home;
