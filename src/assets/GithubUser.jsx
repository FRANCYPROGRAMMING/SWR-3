import React from 'react';
import useGithubUser from '../hooks/useGithubUser';

const GithubUser = ({ username }) => {
  const { userData, loading, error, refetch } = useGithubUser(username);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return <div>No user data available</div>;
  }

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.bio}</p>
      <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} width={100} />
      <button onClick={refetch}>Refetch Data</button>
    </div>
  );
};

export default GithubUser;