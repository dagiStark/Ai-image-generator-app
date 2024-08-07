import PropTypes from "prop-types";

export const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="" className="block text-sm font-medium text-gray-900">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded=[5px] text-black"
          >
            Surprise me
          </button>
        )}
      </div>

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
      />
    </div>
  );
};

FormField.propTypes = {
  labelName: PropTypes.string.isRequired, // labelName should be a string and is required
  type: PropTypes.string.isRequired, // type should be a string and is required
  name: PropTypes.string.isRequired, // name should be a string and is required
  placeholder: PropTypes.string.isRequired, // placeholder should be a string and is required
  value: PropTypes.oneOfType([
    // value can be a string or a number and is required
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleChange: PropTypes.func.isRequired, // handleChange should be a function and is required
  isSurpriseMe: PropTypes.bool, // isSurpriseMe should be a boolean and is optional
  handleSurpriseMe: PropTypes.func, // handleSurpriseMe should be a function and is optional
};

// Default props
FormField.defaultProps = {
  isSurpriseMe: false, // Default value for isSurpriseMe is false
  handleSurpriseMe: () => {}, // Default value for handleSurpriseMe is an empty function
};
