import Header from '../common/Header';

const LoginTemplate = () => {
    return (
        <>
            <Header />
            <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
                <div className="p-6 bg-white rounded-md shadow-md">
                    <h1 className="text-3xl font-semibold text-center">로그인</h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label htmlFor="id" className="text-sm font-semibold text-gray-800">
                                id
                            </label>
                            <input type="id" id="id" className="w-full px-4 py-2 mt-2 bg-white border rounded-md" />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="password" className="text-sm font-semibold text-gray-800">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            />
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white duration-200 bg-black rounded-md hover:bg-gray-700"
                            >
                                로그인
                            </button>
                        </div>

                        <p className="mt-8 text-xs font-light text-center text-gray-700">
                            아이디가 없다면?{' '}
                            <a href="/register" className="font-medium hover:underline">
                                회원가입
                            </a>
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
};

export default LoginTemplate;
