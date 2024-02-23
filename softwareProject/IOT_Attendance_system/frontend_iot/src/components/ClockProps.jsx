import MyReactClock from "my-react-clock";


const ClockProps = () => {
  const containerStyle = {
    border: "1px solid black",
    width: 240, // Adjust the width to accommodate the smaller calendar
    height: 250, // Adjust the height to accommodate the smaller calendar
  };

  return (
    <div>
      {/* Example 3: Styling with a separate style object */}
      <MyReactClock country="Asia/Kolkata" customStyle={containerStyle} />
      
    </div>
  );
};

export default ClockProps;


