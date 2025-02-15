interface LabeledInputProps {
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LabeledInput = ({
  label,
  type,
  placeholder,
  onChange,
}: LabeledInputProps) => {
  return (
    <div>
      <label className=" block text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className=" w-full mt-1 p-2 border border-gray-300 rounded-md"
        onChange={onChange}
      />
    </div>
  );
};
