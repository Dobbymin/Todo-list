const LoginButton = ({ onClick }) => {
    return (
        <>
            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white duration-200 bg-brown-50 rounded-md hover:bg-yellow-600"
                    onClick={onClick}
                >
                    로그인
                </button>
            </div>
        </>
    );
};

export default LoginButton;
