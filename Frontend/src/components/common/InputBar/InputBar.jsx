const InputBar = ({ htmlFor, type, id, onChange, name }) => {
    return (
        <>
            <div className="mb-2">
                <label htmlFor={htmlFor} className="text-sm font-semibold text-gray-800">
                    {name}
                </label>
                <input
                    onChange={onChange}
                    type={type}
                    id={id}
                    className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
                />
            </div>
        </>
    );
};

export default InputBar;
