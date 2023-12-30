const ReturnRegister = () => {
    return (
        <>
            <p className="mt-8 text-xs font-light text-center text-gray-700">
                아이디가 없다면?{' '}
                <a href="/register" className="font-medium hover:underline">
                    회원가입
                </a>
            </p>
        </>
    );
};

export default ReturnRegister;
