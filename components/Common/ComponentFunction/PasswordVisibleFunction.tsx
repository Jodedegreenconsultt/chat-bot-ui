export const handleVisibility = ({ setData, data }: any): React.MouseEventHandler<HTMLButtonElement> => {
  return (event) => {
    setData(!data);
  };
};
