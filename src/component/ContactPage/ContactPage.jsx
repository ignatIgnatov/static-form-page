import { useState } from "react";
import { CgMail } from "react-icons/cg";
import { sendMessage } from "../../action/ContactFormAction";
import { useNavigate } from "react-router";

const intitalcontactFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    theme: "",
    question: ""
}

const ContactPage = () => {
    const [contactFormData, setContactFormData] = useState(intitalcontactFormData);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await sendMessage(contactFormData);
        setContactFormData(intitalcontactFormData);

        if (res.status === 200) {
            navigate("/success");
        } else {
            navigate("/error");
        }
    }

    return (
        <div className="w-full">

            <section className="relative w-full h-[300px] sm:h-[455px]">
                <div className="absolute top-0 left-0 w-full lg:w-[800px] h-full bg-black opacity-50"></div>
                <img
                    className="w-full h-full object-cover"
                    src="https://server.internal.anjela.info/uploads/image_95c7461820.png"
                    alt="info"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 lg:p-0 sm:justify-start sm:w-1/2">
                    <div className="text-white  pt-20 pb-8 sm:pl-[123px] h-full flex flex-col justify-evenly">
                        <h1 className="text-3xl sm:text-5xl font-bold">Свържете се с нас</h1>
                        <p className="text-lg sm:text-xl font-semibold tracking-tight">Изпратете запитване за изготвяне на проект и ценово предложение, не се колебайте да попитате ако имате въпроси, нашия екип е винаги отзивчив и любезен.</p>
                    </div>
                </div>
            </section>

            <section className="w-full pt-12 mt-4 sm:pt-20 flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-[812px] px-4 sm:pl-24 sm:pb-20 flex flex-col justify-between">
                    <div className="flex flex-col">
                        <h4 className="text-lg sm:text-xl font-semibold">Производствена база и магазин:</h4>
                        <div className="mt-6 sm:mt-10 flex flex-col justify-between gap-2">
                            <p>Тел. 02 / 123 456</p>
                            <p>Факс. 02 / 123 456</p>
                            <p>e-mail: office@forthepeople.bg</p>
                            <p>Адрес: Черни връх 1</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[580px] rounded-sm bg-white p-1 mt-10 sm:mt-20">
                        <img
                            className="w-full object-cover"
                            src="/Screenshot.png"
                            alt="img"
                        />
                    </div>
                </div>

                <section className="w-full lg:w-[710px] mt-10 lg:mt-0 px-4 sm:pl-0 lg:px-24">
                    <h4 className="text-lg sm:text-xl font-semibold">Изпрати запитване:</h4>
                    <div className="mt-12 sm:mt-16">
                        <form className="flex flex-col gap-6 sm:gap-10" onSubmit={handleSubmit}>
                            <div className="flex flex-col sm:flex-row gap-6">

                                <div className="relative w-full">
                                    <span className="absolute top-0 right-2">*</span>
                                    <input
                                        placeholder="Име"
                                        type="text"
                                        value={contactFormData.firstName}
                                        onChange={(event) => setContactFormData({
                                            ...contactFormData, firstName: event.target.value
                                        })}
                                        className="border placeholder-gray-950 w-full p-4 text-base block bg-white border-gray-950"
                                    />
                                </div>

                                <input
                                    placeholder="Фамилия"
                                    type="text"
                                    value={contactFormData.lastName}
                                    onChange={(event) => setContactFormData({
                                        ...contactFormData, lastName: event.target.value
                                    })}
                                    className="border placeholder-gray-950 w-full p-4 text-base block bg-white border-gray-950"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="relative w-full">
                                    <span className="absolute top-0 right-2">*</span>
                                    <input
                                        placeholder="Е-майл"
                                        type="email"
                                        value={contactFormData.email}
                                        onChange={(event) => setContactFormData({
                                            ...contactFormData, email: event.target.value
                                        })}
                                        className="border placeholder-gray-950 w-full p-4 text-base block bg-white border-gray-950"
                                    />
                                </div>

                                <input
                                    placeholder="Телефон"
                                    type="text"
                                    value={contactFormData.phone}
                                    onChange={(event) => setContactFormData({
                                        ...contactFormData, phone: event.target.value
                                    })}
                                    className="border placeholder-gray-950 w-full p-4 text-base block bg-white border-gray-950"
                                />
                            </div>
                            <input
                                placeholder="Тема"
                                type="text"
                                value={contactFormData.theme}
                                onChange={(event) => setContactFormData({
                                    ...contactFormData, theme: event.target.value
                                })}
                                className="border placeholder-gray-950 w-full p-4 text-base block bg-white border-gray-950"
                            />
                            <textarea
                                placeholder="Запитване"
                                value={contactFormData.question}
                                onChange={(event) => setContactFormData({
                                    ...contactFormData, question: event.target.value
                                })}
                                className="border placeholder-gray-950 placeholder-shown:align-text-top w-full h-[200px] sm:h-[285px] p-4 bg-white border-gray-950"
                            />
                            <button
                                type="submit"
                                className="w-[200px] h-10 bg-gray-900 text-white py-2 flex justify-center items-center gap-3"
                            >
                                <span>Изпрати</span>
                                <span><CgMail size={24} /></span>
                            </button>
                        </form>
                    </div>
                </section>
            </section>

            <footer className="bg-black w-full h-8 mt-20 text-white"></footer>
        </div>
    );
}

export default ContactPage;
