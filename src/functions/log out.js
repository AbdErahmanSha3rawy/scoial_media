import toast from "react-hot-toast";

export async function logout({ navigate }) {
    const savedData = JSON.parse(localStorage.getItem("user_info"));
    const token = localStorage.getItem("token");

    try {
        if (savedData && token) {
            const formData = new FormData();
            formData.append("username", savedData.username);
            formData.append("password", savedData.password);

            const response = await fetch("https://tarmeezacademy.com/api/v1/logout", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/json"
                },
                body: formData
            });

            const textResponse = await response.text();
            let data;
            try {
                data = JSON.parse(textResponse);
            } catch (e) {
                console.log("Logout response text:", textResponse);
            }

            if (!response.ok) {
                console.error("Logout server error:", data?.message || response.statusText);
            } else {
toast.error('Log_out successfully !');
            }

            await new Promise(resolve => setTimeout(resolve, 4000));
        }
    } catch (error) {
        console.error("Logout error:", error.message);
    } finally {
        localStorage.clear();
        window.dispatchEvent(new Event('authChange'));
        navigate("/"); 
    }
}