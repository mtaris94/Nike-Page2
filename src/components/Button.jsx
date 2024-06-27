// const Button = ({
//   label,
//   iconURL,
//   backgroundColor,
//   textColor,
//   borderColor,
//   fullWidth,
// }) => {
//   return (
//     <button
//       className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
//       ${
//         backgroundColor
//           ? `${backgroundColor} ${textColor} ${borderColor}`
//           : "bg-coral-red text-white border-coral-red"
//       } rounded-full ${fullWidth && "w-full"}`}
//     >
//       {label}

//       {iconURL && (
//         <img
//           src={iconURL}
//           alt='arrow right icon'
//           className='ml-2 rounded-full bg-white w-5 h-5'
//         />
//       )}
//       <div
//         className={`
//           absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300
//           group-hover:scale-100 group-hover:bg-white/30
//         `}
//       />
//     </button>
//   );
// };

// export default Button;

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button
      className={`
        inline-flex justify-start items-center gap-2 px-7 py-4 self-start border
        font-montserrat text-lg leading-none
        shadow-[0_4px_9px_-4px_#3b71ca]
        ${backgroundColor? `bg-${backgroundColor} text-${textColor} border-${borderColor}` : 'bg-coral-red rounded-full text-white border-coral-red'}
        rounded-full ${fullWidth && 'w-full'}
        group relative h-12 w-48 overflow-hidden
      `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
      <div
        className={`
          absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300
          group-hover:scale-100 group-hover:bg-white/30
        `}
      />
    </button>
  );
};

export default Button;