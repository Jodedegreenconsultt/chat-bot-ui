import React from 'react';

type UserProps = {
  content: string;
};

const User: React.FC<UserProps> = ({ content }) => {
  return (
    <div className="message user-message flex justify-end my-[10px]">
      <div className="message-content text-[15px]">{content}</div>
    </div>
  );
};

export default User;
