const API_URL = "https://server.internal.anjela.info/api/contact_form"


export const sendMessage = async (data) => {
    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            const error = await res.text();
            throw new Error(error);
        }

        return res;

    } catch (error) {
        console.log(error);
        return "Error: " + error;
    }
}